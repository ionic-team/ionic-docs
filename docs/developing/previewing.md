chatx/
  backend/
  mobile/
  README.md{
  "name": "chatx-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "dotenv": "^16.1.4",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.0",
    "socket.io": "^4.8.0",
    "multer": "^1.4.5-lts.1",
    "aws-sdk": "^2.1414.0",
    "cors": "^2.8.5",
    "uuid": "^9.0.0",
    "express-rate-limit": "^7.0.0"
  },
  "devDependencies": { "nodemon": "^3.0.1" }
}http://localhost:8081require('dotenv').config();
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const { Server } = require('socket.io');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const convoRoutes = require('./routes/conversation');
const messageRoutes = require('./routes/message');
const gpsRoutes = require('./routes/gps');

const app = express();
const server = http.createServer(app);

app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/conversations', convoRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/gps', gpsRoutes);

const io = new Server(server, {
  cors: { origin: process.env.FRONTEND_URL || '*' },
  maxHttpBufferSize: 1e6 // 1MB default; increase if needed for media chunks
});

require('./socket')(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> console.log(`Server running on ${PORT}`));const mongoose = require('mongoose');

const DeviceSessionSchema = new mongoose.Schema({
  deviceId: String,
  deviceName: String,
  lastActive: Date,
  publicKey: String // E2EE device public key placeholder
}, { _id: false });

const UserSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  name: { type: String, default: '' },
  profilePhoto: { type: String, default: '' },
  identityKey: { type: String, default: '' }, // E2EE identity public key
  deviceSessions: [DeviceSessionSchema],
  createdAt: { type: Date, default: Date.now },
  lastSeen: Date,
  isBlocked: { type: Boolean, default: false },
  role: { type: String, enum: ['user','admin','support'], default: 'user' }
});

module.exports = mongoose.model('User', UserSchema);const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
  type: { type: String, enum: ['private','group'], default: 'private' },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  name: String,
  avatar: String,
  lastMessage: String,
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Conversation', ConversationSchema);const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  conversation: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation', required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // body is encrypted blob; server stores opaque string
  body: { type: String, required: true },
  type: { type: String, enum: ['text','image','video','audio','file','system'], default: 'text' },
  mediaUrl: String,
  thumbUrl: String,
  status: { sent: Boolean, deliveredTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
// For demo: using in-memory OTP store. Use Redis in prod.
const OTP_STORE = {};

router.post('/request-otp', async (req, res) => {
  const { phone } = req.body;
  if(!phone) return res.status(400).json({ error: 'Phone required' });
  const otp = Math.floor(100000 + Math.random()*900000).toString();
  OTP_STORE[phone] = { otp, expires: Date.now() + 5*60*1000 };
  // TODO: integrate SMS provider (Twilio/MSG91) to send OTP
  console.log('OTP for', phone, otp);
  return res.json({ ok: true, message: 'OTP sent (dev console)' });
});

router.post('/verify-otp', async (req, res) => {
  const { phone, otp, deviceId, deviceName } = req.body;
  const entry = OTP_STORE[phone];
  if(!entry || entry.expires < Date.now() || entry.otp !== otp) {
    return res.status(400).json({ error: 'Invalid or expired OTP' });
  }
  delete OTP_STORE[phone];
  let user = await User.findOne({ phone });
  if(!user) user = await User.create({ phone });
  // Create jwt token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  // Save session device
  if(deviceId) {
    user.deviceSessions.push({ deviceId, deviceName, lastActive: new Date() });
    await user.save();
  }
  return res.json({ token, user });
});

module.exports = router;const jwt = require('jsonwebtoken');
const User = require('../models/User');
module.exports = async (req, res, next) => {
  const auth = req.headers.authorization;
  if(!auth) return res.status(401).json({ error: 'Missing token' });
  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId);
    next();
  } catch(err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Message = require('./models/Message');
const Conversation = require('./models/Conversation');

module.exports = (io) => {
  const onlineUsers = new Map(); // userId -> socketId(s)

  io.use(async (socket, next) => {
    // Expect token in query: token=...
    const token = socket.handshake.auth?.token;
    if(!token) return next(new Error('Authentication error'));
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);
      if(!user) throw new Error('User not found');
      socket.user = user;
      return next();
    } catch(err){
      return next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    const userId = String(socket.user._id);
    // maintain multiple sockets per user
    if(!onlineUsers.has(userId)) onlineUsers.set(userId, new Set());
    onlineUsers.get(userId).add(socket.id);

    // broadcast presence
    socket.broadcast.emit('presence:update', { userId, online: true });

    console.log('Connected', userId, socket.id);

    socket.on('message:send', async (payload, ack) => {
      // payload: { conversationId, encryptedBody, type, mediaMeta? }
      // Server stores metadata + encryptedBody (server cannot decrypt)
      try {
        const msg = await Message.create({
          conversation: payload.conversationId,
          sender: userId,
          body: payload.encryptedBody,
          type: payload.type || 'text',
          mediaUrl: payload.mediaUrl || ''
        });
        // update conversation
        await Conversation.findByIdAndUpdate(payload.conversationId, { lastMessage: '[media/text]', updatedAt: new Date() });
        // emit to participants (lookup conversation)
        const conv = await Conversation.findById(payload.conversationId).populate('participants','_id');
        const recipients = conv.participants.map(p => String(p._id));
        recipients.forEach(recipientId => {
          const sockets = onlineUsers.get(recipientId);
          if(sockets) {
            sockets.forEach(sid => io.to(sid).emit('message:new', { messageId: msg._id, conversationId: payload.conversationId }));
          }
        });
        if(ack) ack({ ok: true, messageId: msg._id });
      } catch(err) {
        console.error(err);
        if(ack) ack({ ok: false, error: err.message });
      }
    });

    socket.on('message:read', async ({ messageId }) => {
      // add user to readBy
      await Message.findByIdAndUpdate(messageId, { $addToSet: { 'status.readBy': socket.user._id } });
    });

    socket.on('call:signal', ({ toUserId, signal }) => {
      // Forward signaling messages for WebRTC
      const sockets = onlineUsers.get(String(toUserId));
      if(sockets) sockets.forEach(sid => io.to(sid).emit('call:signal', { from: userId, signal }));
    });

    socket.on('disconnect', () => {
      const set = onlineUsers.get(userId);
      if(set) {
        set.delete(socket.id);
        if(set.size === 0) {
          onlineUsers.delete(userId);
          socket.broadcast.emit('presence:update', { userId, online: false });
        }
      }
      console.log('Disconnected', userId, socket.id);
    });
  });
};const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const auth = require('../middleware/auth');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

router.post('/upload-url', auth, async (req, res) => {
  const { filename, contentType } = req.body;
  const key = `${req.user._id}/${Date.now()}-${uuidv4()}-${filename}`;
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Expires: 60,
    ContentType: contentType
  };
  const uploadUrl = await s3.getSignedUrlPromise('putObject', params);
  const getUrl = `https://${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
  res.json({ uploadUrl, key, getUrl });
});

module.exports = router;{
  "name": "chatx-mobile",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo run:android",
    "ios": "expo run:ios"
  },
  "dependencies": {
    "expo": "~49.0.0",
    "react": "18.2.0",
    "react-native": "0.72.6",
    "axios": "^1.4.0",
    "socket.io-client": "^4.8.0",
    "react-navigation": "^4.4.4",
    "react-native-gesture-handler": "~2.12.0",
    "react-native-push-notification": "^8.1.1",
    "react-native-webrtc": "^1.91.1"
  }
}import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import MainStack from './src/navigation/MainStack';
import { getToken, setToken } from './src/utils/token';
import io from 'socket.io-client';

export default function App() {
  const [token, setTok] = useState(null);

  useEffect(() => {
    (async () => {
      const t = await getToken();
      setTok(t);
      if(t) {
        // connect socket
        global.socket = io('http://YOUR_BACKEND_URL:5000', {
          auth: { token: t }
        });
        global.socket.on('connect', ()=> console.log('Socket connected'));
      }
    })();
  }, []);

  return (
    <SafeAreaView style={{flex:1}}>
      { token ? <MainStack /> : <AuthStack onLogin={(tok)=> setTok(tok)} /> }
    </SafeAreaView>
  );
}import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';
import { saveToken } from '../../utils/token';

export default function PhoneLogin({ navigation, onLogin }) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [stage, setStage] = useState(0);

  const requestOtp = async () => {
    await axios.post('http://YOUR_BACKEND_URL:5000/api/auth/request-otp', { phone });
    setStage(1);
  };

  const verifyOtp = async () => {
    const res = await axios.post('http://YOUR_BACKEND_URL:5000/api/auth/verify-otp', { phone, otp, deviceId: 'expo-device', deviceName: 'Expo' });
    const token = res.data.token;
    await saveToken(token);
    onLogin(token);
  };

  return (
    <View>
      { stage === 0 ? (
        <>
          <TextInput placeholder="+971..." value={phone} onChangeText={setPhone} />
          <Button title="Request OTP" onPress={requestOtp} />
        </>
      ) : (
        <>
          <TextInput placeholder="Enter OTP" value={otp} onChangeText={setOtp} />
          <Button title="Verify & Login" onPress={verifyOtp} />
        </>
      )}
    </View>
  );
}import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import axios from 'axios';
export default function ChatScreen({ route }) {
  const { conversationId } = route.params;
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // fetch messages
    (async ()=> {
      const res = await axios.get(`http://YOUR_BACKEND_URL:5000/api/messages/${conversationId}`, { headers: { Authorization: 'Bearer '+global.token } });
      setMessages(res.data);
    })();

    global.socket.on('message:new', (payload)=>{
      if(payload.conversationId === conversationId) {
        // fetch new message or optimistically push (we'll fetch)
      }
    });

    return ()=> global.socket.off('message:new');
  }, []);

  const send = async () => {
    // TODO: perform E2EE encryption here before sending
    const encryptedBody = encryptForRecipients(text); // placeholder
    global.socket.emit('message:send', { conversationId, encryptedBody, type: 'text' }, (ack) => {
      if(ack.ok) {
        // optimistic UI or fetch new
      }
    });
    setText('');
  };

  return (
    <View style={{flex:1}}>
      <FlatList data={messages} renderItem={({item})=> <Text>{item.body}</Text>} keyExtractor={i=>i._id} />
      <TextInput value={text} onChangeText={setText} />
      <Button title="Send" onPress={send} />
    </View>
  );
}user_id | name | phone | profile_photo | about | status | last_seen | blocked_list[]chat_id | sender_id | receiver_id | message | timestamp | status (sent, delivered, seen) | encryptedmedia_id | chat_id | type (image/video/audio) | url | size | timestampcall_id | caller_id | receiver_id | type (voice/video) | duration | status | timestamp

# GooglePlayGamesServices 


A Cordova plugin that let's you interact with Google Play Games Services.


Repo: [https://github.com/artberri/cordova-plugin-play-games-services](https://github.com/artberri/cordova-plugin-play-games-services)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cordova-plugin-play-games-services --variable APP_ID="YOUR_APP_ID
$ npm install --save @ionic-native/google-play-games-services
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { GooglePlayGamesServices } from '@ionic-native/google-play-games-services';


constructor(private googlePlayGamesServices: GooglePlayGamesServices) { }

...

// Authenticate with Play Games Services
this.googlePlayGamesServices.auth()
    .then(() => console.log('Logged in to Play Games Services'))
    .catch(e) => console.log('Error logging in Play Games Services', e);

// Sign out of Play Games Services.
this.googlePlayGamesServices.signOut()
    .then(() => console.log('Logged out of Play Games Services'))
    .catch(e => console.log('Error logging out of Play Games Services', e);

// Check auth status.
this.googlePlayGamesServices.isSignedIn()
    .then((signedIn: SignedInResponse) => {
        if (signedIn.isSignedIn) {
            hideLoginButton();
        }
    });

// Fetch currently authenticated user's data.
this.googlePlayGamesServices.showPlayer().then((data: Player) => {
   console.log('Player data', data);
});

// Submit a score.
this.googlePlayGamesServices.submitScore({
    score: 100,
    leaderboardId: 'SomeLeaderboardId'
});

// Show the native leaderboards window.
this.googlePlayGamesServices.showAllLeaderboards()
    .then(() => console.log('The leaderboard window is visible.'));

// Show a signle native leaderboard window.
this.googlePlayGamesServices.showLeaderboard({
    leaderboardId: 'SomeLeaderBoardId'
}).then(() => console.log('The leaderboard window is visible.'));

// Unlock an achievement.
this.googlePlayGamesServices.unlockAchievement({
    achievementId: 'SomeAchievementId'
}).then(() => console.log('Achievement unlocked'));

// Incremement an achievement.
this.googlePlayGamesServices.incrementAchievement({
    step: 1,
    achievementId: 'SomeAchievementId'
}).then(() => console.log('Achievement incremented'));

// Show the native achievements window.
this.googlePlayGamesServices.showAchivements()
   .then(() => console.log('The achievements window is visible.'));

```




<p><br></p>

## Instance Members

### auth

Initialise native Play Games Service login procedure.

### incrementAchievement

Increment an achievement.

<dl>
<dt><h4>data</h4><strong>Type: </strong><code>IncrementableAchievementData</code></dt>
<dd>See IncrementableAchievementData table below</dd>
</dl>

### isSignedIn

Check if the user is signed in.

### showAchievements

Lauches the native Play Games achievements view controller to show
achievements.

### showAllLeaderboards

Launches the native Play Games leaderboard view controller to show all the
leaderboards.

### showLeaderboard

Launches the native Play Games leaderboard view controll to show the
specified leaderboard.

<dl>
<dt><h4>data</h4><strong>Type: </strong><code>LeaderboardData</code></dt>
<dd>See LeaderboardData table below</dd>
</dl>

### showPlayer

Show the currently authenticated player.

### signOut

Sign out of Google Play Games Services.

### submitScore

Submit a score to a leaderboard. You should ensure that you have a
successful return from auth() before submitting a score.

<dl>
<dt><h4>data</h4><strong>Type: </strong><code>ScoreData</code></dt>
<dd>See ScoreData table below</dd>
</dl>

### unlockAchievement

Unlock an achievement.

<dl>
<dt><h4>data</h4><strong>Type: </strong><code>AchievementData</code></dt>
<dd>See AchievementData table below</dd>
</dl>

<p><br></p>

## AchievementData

<dl>
<dt><h4>achievementId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The achievement ID from Google Play Developer console.</dd>
</dl>

## IncrementableAchievementData

<dl>
<dt><h4>achievementId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The achievement ID from Google Play Developer console.</dd><dt><h4>numSteps</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The amount to increment the achievement by.</dd>
</dl>

## LeaderboardData

<dl>
<dt><h4>leaderboardId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The leaderboard ID from Goole Play Developer console.</dd>
</dl>

## Player

<dl>
<dt><h4>displayName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The players display name.</dd><dt><h4>hiResIconImageUrl</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Retrieves the URI for loading this player's hi-res profile image. Returns
null if the player has no profile image.</dd><dt><h4>iconImageUrl</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Retrieves the URI for loading this player's icon-size profile image.
Returns null if the player has no profile image.</dd><dt><h4>playerId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The ID given to the player by Play Games Services.</dd><dt><h4>title</h4><strong>Type: </strong><code>union</code></dt>
<dd>The title of the player based on their gameplay activity. Not
all players have this and it may change over time.</dd>
</dl>

## ScoreData

<dl>
<dt><h4>leaderboardId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The leaderboard ID from Google Play Developer console.</dd><dt><h4>score</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The score to submit.</dd>
</dl>

## SignedInResponse

<dl>
<dt><h4>isSignedIn</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>True or false is the use is signed in.</dd>
</dl>


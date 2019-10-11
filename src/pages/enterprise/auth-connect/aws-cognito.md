# AWS Cognito Configuration

## Configuration Details



```typescript
const webCognitoConfig: IonicAuthOptions = {
  clientID: 's5hsc5a1qcoco1irkrcad8774',
  discoveryUrl: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_TxsSViaVi/.well-known/openid-configuration',
  redirectUri: 'http://localhost:8100/myapp',
  scope: 'openid phone aws.cognito.signin.user.admin profile email',
  audience: 'https://api.myapp.com',
  logoutUrl: 'myapp://callback?logout=true',
  authConfig: 'cognito',
  platform: 'web'
};
```
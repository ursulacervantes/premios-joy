const google = require('googleapis');

const serviceAccount = require('./joy-firebase-adminsdk.json');

const scopes = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/firebase.database',
];
const jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  scopes,
);

const getToken = () =>
  new Promise((resolve, reject) => {
    jwtClient.authorize((error, tokens) => {
      if (error) {
        console.log('Error making request to generate access token:', error);
        reject(null);
      } else if (tokens.access_token === null) {
        console.log(
          'Provided service account does not have permission to generate access tokens',
        );
      reject(null);
      } else {
        resolve(tokens.access_token);
      }
    });
  });

export default getToken;

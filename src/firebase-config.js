/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyBbuehWMBOkk_wWzet95h0MoNQoS8xWEWk",
  authDomain: "friendlychat-9d087.firebaseapp.com",
  databaseURL: "https://friendlychat-9d087.firebaseio.com",
  projectId: "friendlychat-9d087",
  storageBucket: "friendlychat-9d087.appspot.com",
  messagingSenderId: "944625987520",
  appId: "1:944625987520:web:592dac7b9763b04be42225"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

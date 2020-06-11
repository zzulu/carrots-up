import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  projectId: 'carrots-up',
  authDomain: 'carrots-up.web.app',
  databaseURL: "https://carrots-up.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

export default firebase;

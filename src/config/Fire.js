import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: 'AIzaSyD_PxFjzcPKX50pq3ITq6Q69fuHvCowMtE',
  authDomain: 'visual-studio-sync.firebaseapp.com',
  databaseURL: 'https://visual-studio-sync.firebaseio.com',
  projectId: 'visual-studio-sync',
  storageBucket: 'visual-studio-sync.appspot.com',
  messagingSenderId: '691628632398'
};
const fire = firebase.initializeApp(config);
export default fire;

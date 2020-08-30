import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAmQL-sVrYigNdhs59o-2CSPbNlIFOOoaA",
    authDomain: "twitter-clone-c33ef.firebaseapp.com",
    databaseURL: "https://twitter-clone-c33ef.firebaseio.com",
    projectId: "twitter-clone-c33ef",
    storageBucket: "twitter-clone-c33ef.appspot.com",
    messagingSenderId: "842510222937",
    appId: "1:842510222937:web:cfe9e3a35b08820a9f5348",
    measurementId: "G-JK53ZN9LTV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;
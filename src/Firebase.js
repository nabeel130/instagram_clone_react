import firebase, { firestore } from "firebase";


  const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBmSlHN4ZCfFkFqRcbFROhwVc85QFCC4qQ",
    authDomain: "instagram-clone-react-22991.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-22991.firebaseio.com",
    projectId: "instagram-clone-react-22991",
    storageBucket: "instagram-clone-react-22991.appspot.com",
    messagingSenderId: "149703094866",
    appId: "1:149703094866:web:e529e68813fa72b8ad658b",
    measurementId: "G-7R87RJ3TN0"
    
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export  {db , auth , storage};
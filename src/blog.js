import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyD89jDlIWrOoYCDG56w_0fqeVuvaTkXOok",
    authDomain: "my-blog-c0d3a.firebaseapp.com",
    databaseURL: "https://my-blog-c0d3a.firebaseio.com",
    projectId: "my-blog-c0d3a",
    storageBucket: "",
    messagingSenderId: "86773165338",
    appId: "1:86773165338:web:a65a8acabaaf286669d0a3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const blogger = firebase.firestore();


  export default blogger;
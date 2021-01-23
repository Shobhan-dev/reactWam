  
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBbqsMmyQNxzF3QQf_r0SfWDG-TUXU9cSE",
    authDomain: "wamsg-d0024.firebaseapp.com",
    databaseURL: "https://wamsg-d0024-default-rtdb.firebaseio.com",
    projectId: "wamsg-d0024",
    storageBucket: "wamsg-d0024.appspot.com",
    messagingSenderId: "1052167996647",
    appId: "1:1052167996647:web:a65af18013397dd40b0e42",
    measurementId: "G-F61TKP3MP2"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase
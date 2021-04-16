import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDwOqvQ0CVcBCW2dkdx85iupz2oG_563-c",
    authDomain: "restaurant-8832c.firebaseapp.com",
    projectId: "restaurant-8832c",
    storageBucket: "restaurant-8832c.appspot.com",
    messagingSenderId: "651639394337",
    appId: "1:651639394337:web:317b5bdfecf6047a5a9360"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
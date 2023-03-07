import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";

import 'firebase/storage';  


const firebaseConfig = {
    apiKey: "AIzaSyBQBuXlQJbJNoirKZq6HIvvAthjuy0GeqE",
    authDomain: "menus-e66c9.firebaseapp.com",
    projectId: "menus-e66c9",
    storageBucket: "menus-e66c9.appspot.com",
    messagingSenderId: "1084234419239",
    appId: "1:1084234419239:web:00330e12c1ce327354d202",
    measurementId: "G-56874W88HN"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const storage = getStorage(app);
  const storageRef = ref(storage);
  const database = getDatabase(app);

  

  
  export { app, db, auth, storage, storageRef, database}
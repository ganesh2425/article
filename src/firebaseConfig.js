import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCyXYIHpTv5OtO6V4L3wrj5ZMRCBNsN248",
    authDomain: "my-articles-3150d.firebaseapp.com",
    projectId: "my-articles-3150d",
    storageBucket: "my-articles-3150d.appspot.com",
    messagingSenderId: "634513409515",
    appId: "1:634513409515:web:88d3207126869178c105ae"
  };

  const app = initializeApp(firebaseConfig);
  
  export const storage = getStorage(app);
  export const db = getFirestore(app); 
  export const auth = getAuth(app);
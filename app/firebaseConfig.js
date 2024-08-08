import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBDhIBfMzuF393jDg7Zy5mcaSngVxeqOTM",
  authDomain: "connectplus-e1582.firebaseapp.com",
  databaseURL: "https://connectplus-e1582-default-rtdb.firebaseio.com/",
  projectId: "connectplus-e1582",
  storageBucket: "connectplus-e1582.appspot.com",
  messagingSenderId: "395602561095",
  appId: "1:395602561095:web:5b70cbb232ce2d114e8962",
  measurementId: "G-N0PVPN29T1"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
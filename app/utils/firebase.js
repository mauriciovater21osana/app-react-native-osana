import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // no se cambia.
  apiKey: "AIzaSyBL47_egbMBgugjvez4QaTzAyENDSuFUmY",
  authDomain: "tenedores-mv.firebaseapp.com",
  projectId: "tenedores-mv",
  storageBucket: "tenedores-mv.appspot.com",
  messagingSenderId: "1061013585180",
  appId: "1:1061013585180:web:4a29ab8422bbbfeb6fced9",
};

export const initFirebase = initializeApp(firebaseConfig);

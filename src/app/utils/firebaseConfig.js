import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB1adnDDVjq2Mepu0-IhMDQSaLSDmntbmQ",
    authDomain: "chatterhub-9206d.firebaseapp.com",
    projectId: "chatterhub-9206d",
    storageBucket: "chatterhub-9206d.appspot.com",
    messagingSenderId: "522934994803",
    appId: "1:522934994803:web:afad5f761473dcaca66706",
    measurementId: "G-SDVPK8M83R"
  };

const app = initializeApp(firebaseConfig);
export const firebasAuth = getAuth(app);
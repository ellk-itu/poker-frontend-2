import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDHlyGzxVuT5YniMnyjQeADAv_aJl2RQvU",
  authDomain: "poker-bot-frontend.firebaseapp.com",
  projectId: "poker-bot-frontend",
  storageBucket: "poker-bot-frontend.firebasestorage.app",
  messagingSenderId: "986191072544",
  appId: "1:986191072544:web:433de35416892ad50d1b45",
  measurementId: "G-LG9TSGWHS2",
};

export const app = initializeApp(firebaseConfig);

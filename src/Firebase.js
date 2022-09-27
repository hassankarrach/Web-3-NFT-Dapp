import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpgEPUixuHseg5NQ_ekqFPScyLlQ5eIlU",
    authDomain: "cryptstars-ef2fe.firebaseapp.com",
    projectId: "cryptstars-ef2fe",
    storageBucket: "cryptstars-ef2fe.appspot.com",
    messagingSenderId: "613508355461",
    appId: "1:613508355461:web:e4320c65241cd4050ee0ec"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
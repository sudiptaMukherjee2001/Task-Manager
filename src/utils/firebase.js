import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {

    apiKey: "AIzaSyCQlDduzrMX6n-3zn5cTMtuThc9MCO4dfU",
    authDomain: "task-manager-a5f7f.firebaseapp.com",
    databaseURL: "https://task-manager-a5f7f-default-rtdb.firebaseio.com",
    projectId: "task-manager-a5f7f",
    storageBucket: "task-manager-a5f7f.appspot.com",
    messagingSenderId: "965343527254",
    appId: "1:965343527254:web:9c380dab18ef69648856f7"
};

const FirebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(FirebaseApp)
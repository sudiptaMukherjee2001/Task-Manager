// firebaseFunctions.js
import { createContext, useContext } from "react";
/* firebase imports */
import { db } from "../utils/firebase";
import { ref, set } from "firebase/database";
/*  context imports */
export const firebaseContext = createContext(null);
export const useFirebase = () => useContext(firebaseContext);

export const storeDataIntoFirebase = (completeTaskInfo, route) => {
    set(ref(db, route), completeTaskInfo);
};

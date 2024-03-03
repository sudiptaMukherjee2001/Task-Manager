import { useState } from "react"
import PropTypes from 'prop-types';
import { firebaseContext, storeDataIntoFirebase } from "./firebaseFunction";


export const FirebaseProvider = ({ children }) => {
    const [completedTask, setCompletedTask] = useState()
    // yah jo value hein oo usko app  main har jaga se access kiya ja sakta hein
    return (<firebaseContext.Provider value={{ completedTask, setCompletedTask, storeDataIntoFirebase }}>
        {children}
    </firebaseContext.Provider>

    )

}
FirebaseProvider.propTypes = {
    children: PropTypes.any
};

import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';


export const context = createContext();
const auth = getAuth(app)

const AuthContext = ({children}) => {

    const [user, setUser] = useState({});



    const googleSignIn = (provider) => {
        return signInWithPopup(auth,provider);
    }

    const facebookSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    
    const emailPasswordSingUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {
        googleSignIn,
        facebookSignIn,
        emailPasswordSingUp,
        

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                console.log(user);
                setUser(user);
            }
        })
        return unsubscribe();
    }, [])



    return (
        <context.Provider value={authInfo}>
            {children}
        </context.Provider>
    );
};

export default AuthContext;
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth,sendPasswordResetEmail,signInWithEmailAndPassword } from 'firebase/auth';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {


    const SignUp = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }
    const SignIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }

    

    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }
 
    const authInfo = {
        SignUp,
        SignIn,
        resetPassword,
        
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged,sendPasswordResetEmail,signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    // for current user
  const [user, setUser] = useState(null);

    const SignUp = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }
    const SignIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }

    

    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }
    const logOut = () => {
        
        return signOut(auth);
      };

    
  // for current user: observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing");
      setUser(currentUser);
      
    });
    return () => unsubscribe();
  }, []);

 
    const authInfo = {
        SignUp,
        SignIn,
        resetPassword,
        user,
        logOut,
        
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
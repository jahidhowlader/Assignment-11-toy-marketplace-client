import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"


export const AuthContext = createContext(null)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Create User with firebase
    const createUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Signin User with firebase
    const signinUser = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google signin user with firebase
    const googleSignin = () => {

        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Github Signin with firebase
    const githubSignin = () => {
        
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // Logout with firebase
    const logout = () => {
        
        setLoading(true)
        return signOut(auth)
    }

    // User Overbation when signin and signout
    useEffect(()=> {

        const unsubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unsubscriber
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signinUser,
        googleSignin,
        githubSignin,
        logout,
        setLoading
    }

    return (
        <AuthContext.Provider
            value={authInfo}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
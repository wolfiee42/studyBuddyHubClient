import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.confiq";
import axiosSecure from "../hooks/useAxiosSecure";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('spying', currentUser);

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            if(currentUser){
                axiosSecure.post('/jwt', loggedUser)
                .then(res=>console.log(res.data))
            } else {
                axiosSecure.post('/logout', loggedUser)
                .then(res=>console.log(res.data))
            }


        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = { createUser, logIn, loginWithGoogle, user, loading, updateUser, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}



export default AuthProvider;
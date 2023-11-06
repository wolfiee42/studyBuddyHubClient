import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.confiq";


export const AuthContxt = createContext()

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }



    const authInfo = { createUser }
    return (
        <AuthContxt.Provider value={authInfo}>
            {children}
        </AuthContxt.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;
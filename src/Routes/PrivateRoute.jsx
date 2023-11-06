import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <div className="flex text-center items-center w-full min-h-[600px]">
            <span className="loading loading-spinner loading-lg min-w-max mx-auto"></span>
        </div>
    }
    if (user?.email) {
        return children
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}


export default PrivateRoute;
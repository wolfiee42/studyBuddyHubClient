import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth"
const Navbar = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    const navbarMenus = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/makeassignment'}>Create Assignment</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>

    const handleLogoutbtn = (e) => {
        e.preventDefault();
        logOut()
            .then(() => console.log("logged out successfully"))
            .catch(error => console.log(error.message))
    }


    return (

        <div className="navbar max-w-7xl mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarMenus}
                    </ul>
                </div>
                <Link to={'/'}><img className="w-[100px] h-[100px]" src="https://i.ibb.co/wRhbYs6/logo-W-removebg-preview.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-5 px-1">
                    {navbarMenus}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <div className="flex justify-center items-center gap-10">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src="https://i.ibb.co/z7hTcB7/pic.jpg" />
                        </div>
                    </div>
                    <button onClick={handleLogoutbtn} className="btn bg-yellow-400 hover:bg-yellow-500 hover:text-white">Sign Out</button>
                </div> :
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src="https://i.ibb.co/MBdTkhw/Friendly-Ones-Avatar.png" />
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default Navbar;
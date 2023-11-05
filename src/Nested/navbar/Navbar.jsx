import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navbarMenus = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/makeassignment'}>Create Assignment</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>
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
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
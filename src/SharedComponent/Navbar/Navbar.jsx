import React, { useContext } from 'react';
import logo from "../../img/Logo/logo.png"
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext)

    const handleLogOut = () => {
        userSignOut()
            .then(() => {
                return ('logout successfull')

            })
            .catch(error => {
                console.log(error)
            })

    }

    const navlinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
        <li><NavLink to={"/contact"}>Contact us</NavLink></li>

    </>
    return (
        <div className='bg-base-100 border h-20  flex items-center'>
            <div className="navbar flex items-center container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 gap-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navlinks
                            }
                        </ul>
                    </div>
                    <a className="h-28 w-28 text-xl">
                        <picture>
                            <img src={logo} className='h-24 w-24' alt="" />
                        </picture>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user? <img alt="Tailwind CSS Navbar component" src={user.photoURL} />:<img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                }
                            </div>
                        </div>
                        {
                            user && <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {user.displayName}
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={handleLogOut} ><a>Logout</a></li>
                        </ul>
                        }
                    </div>
                    {
                        <Link to={"/login"} className={`btn bg-[#007bff] text-[#FFF] ${user ? 'hidden': 'visible'}`}>Login</Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;
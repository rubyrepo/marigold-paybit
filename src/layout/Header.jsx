import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handeLogOut =() =>{
        console.log('user trying to logout')
        logOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className="navbar bg-base-100 shadow-sm px-6 sm:px-10 md:px-16 lg:px-20 py-4">
            {/* Start */}
            <style>{`
                .active {
                    background-color: #e0e0e0; /* light gray */
                    padding: 6px 12px;
                    border-radius: 4px;
                }
            `}</style>
            <div className="navbar-start">
                {/* Mobile dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/Bills'}>Bills</NavLink></li>
                        <li><NavLink to={'/MyProfile'}>My Profile</NavLink></li>
                    </ul>
                </div>

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img width="40" height="40" src="https://img.icons8.com/deco-glyph/48/bank.png" alt="bank" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">Paybit</h1>
                </div>
            </div>

            {/* Center - only on lg+ */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/Bills'}>Bills</NavLink></li>
                    <li><NavLink to={'/MyProfile'}>My Profile</NavLink></li>
                </ul>
            </div>

            {/* End */}
            <div className="navbar-end gap-2 flex-col sm:flex-row">
                {user ?
                    <div onClick={handeLogOut} className="btn btn-sm sm:btn-md">
                        logout
                    </div> :
                     <Link to={'/User_login'}>
                        <div className="btn btn-sm sm:btn-md">
                            Login
                        </div>
                    </Link>}

                <Link to={'/User_register'}>
                    <div className="btn btn-sm sm:btn-md">
                        Register
                    </div>
                </Link>
            </div>
        </div >
    );
};

export default Header;

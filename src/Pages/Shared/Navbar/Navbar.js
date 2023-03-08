import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.JPG'

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/about'>About me</Link></li>
    </React.Fragment>
    return (
        <div className='sticky top-0 z-50' data-theme="night">
            <div className="navbar py-6 font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className='hidden sm:block'>
                        <div className='flex items-center'>
                            <img alt="" className="w-10 h-10 mr-2 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src={logo} />
                            <a href='/' className="btn btn-ghost normal-case text-xl">PORTFOLIO</a>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://drive.google.com/file/d/1l2zcWszuCOw5b1180Lpu00becNazJccu/view?usp=sharing' target='_blank'>
                        <button className='btn btn-white text-white btn-outline'>Download Resume</button>
                    </a>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Navbar;
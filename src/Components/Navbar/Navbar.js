import React from 'react';
import logo from '../../assets/planes/aviation_logo-22.png'
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBag} from "react-icons/fa";



const Navbar = () => {

    const {user} = usecon

    const menuItems = <>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'><Link to='/about'>About</Link></li>
        <li className='font-bold'><Link to='/blog'>Blog</Link></li>
        <li className='font-bold'><Link to='/services'>Services</Link></li>
        <li className='font-bold'><Link to='/contact'>Contact</Link></li>
        <li className='font-bold'><Link to='/login'>Login</Link></li>
        <li className='font-bold'><Link to='/signup'>SignUp</Link></li>
    </>

    return (
        <div className="navbar mt-[-20]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img src={logo} alt="" className='w-32' />
                <a className="btn btn-ghost normal-case text-xl font-bold my-4">AirVel</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            
            <div className="navbar-end">
                <FaShoppingBag></FaShoppingBag>
                <span className='mx-3'><FaSearch></FaSearch></span>
                <button className="btn btn-outline btn-warning rounded-xl py-2 px-7 ">Booking</button>
            </div>
            <div>
            </div>
        </div>
    );
};


export default Navbar;
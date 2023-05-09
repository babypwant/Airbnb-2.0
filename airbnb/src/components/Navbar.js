import React from 'react';
import logo from '../assets/logo.png';
import { BiWorld } from 'react-icons/bi';
import { FiMenu,FiSearch } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='flex 
        justify-between
        items-center border-b'> 
        {/* Left */}
        <div className="h-20 flex">
            <img src={logo} className="object-cover " alt="logo" />
        </div>
        {/* Middle - Search Bar */}
        <div className='flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full'>
            <input type='search' 
            placeholder='' className='py-2.5 w-[20rem] rounded-full outline-0'/>
            <div className='flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-500'>
                <button className=''>Place</button>
                <button>Time</button>
                <button>Group Size</button>
            </div>
            <div className='bg-[#ff5a60] p-2 rounded-full mr-2'>
                    <FiSearch className='text-white' />
            </div>
        </div>
        {/* Right - Login/Sign Up */}
        <div className='flex items-center pr-3'>
            <p>Rent House</p>
            <BiWorld />
        <div className='flex items-center'>
            <FiMenu />
            <FaUserCircle className=''/>
        </div> 
        </div>   
        </div>
        )
}

export default Navbar;
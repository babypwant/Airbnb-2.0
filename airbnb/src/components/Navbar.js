import React from 'react';
import logo from '../assets/logo.png';
import { BiWorld } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='border-b sticky top-0 bg-white/[95%]'>
            <div className='flex 
                    justify-between
                    items-center sm:mx-6 md:mx-10 lg:mx-12'> 
                    {/* Left */}
                    <div className="h-20 flex">
                        <img src={logo} className="object-cover " alt="logo" />
                    </div>
                    {/* Middle - Search Bar */}
                    <div className='hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full'>
                        <input type='search' 
                        placeholder='' className='py-2.5 w-[20rem] rounded-full outline-0'/>
                        <div className='flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600'>
                            <button className='w-full'>Place</button>
                            <button className='border-l border-x px-6'>Time</button>
                            <button className='w-full text-gray-600/60'>Group Size</button>
                        </div>
                        <div className='bg-[#ff5a60] p-2 rounded-full mr-2'>
                                <FiSearch className='text-white' />
                        </div>
                    </div>
                    {/* Right - Login/Sign Up */}
                    <div className='flex items-center pr-3 font-semibold text-gray-600'>
                        <p>Rent House</p>
                        <BiWorld className='mx-4'/>
                    <div className='flex items-center gap-2 border px-4 py-2 
                    rounded-full shadow-lg shadow-gray-250 font-bold hover:bg-[#be585b] duration-100 ease-out
                    hover:cursor-pointer
                    '>
                        <p>Sign in</p>
                        <FaUserCircle className='text-[19px]'/>
                    </div> 
                    </div>   
             </div>
        </div>
        
        )
}

export default Navbar;
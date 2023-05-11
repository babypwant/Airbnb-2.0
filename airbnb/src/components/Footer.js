import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {

    const socials = [
        <AiFillGithub />,
        <AiFillLinkedin />
    ]

  return (
    <div className='bg-red-400 sticky bottom-0 h-10 w-full
    border-t-1 shadow-t shadow-gray-300 shadow-t-lg
    flex justify-center items-center space-x-4
    '>
        {socials.map((icon) => (
            <div className='text-[30px] text-gray-600 hover:text-black duration:100 ease-out cursor-pointer'> {icon}</div>
        ))}
    </div>
  )
}

export default Footer
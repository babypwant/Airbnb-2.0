import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const Rental = ({title, image, price, id, rating}) => {

  return (
    <div className=''>
        <div key={id} className='relative' >
            {/* gradient */}
            <div className='grad absolute w-full h-full rounded-b-[1.3rem]'></div>
            <div className='flex'>
                {/* background */}
                <img src={image} alt='view of house' className='object-cover rounded-[1.3rem]
                 '/>
                <div className='absolute text-white font-bold bottom-6 left-6 text-[22px]
                '>
                    {/* title */}
                    {title}
                    <p>
                        ${price}
                    </p>
                </div>
            </div>
        </div>
        {/* description */}
        <div className='pt-3 flex justify-between items-start'> 
        <div>
            {/* Left */}
            <p className='max-w-[17rem] font-semibold text-[17px]'>
            This is a beautiful, nature feel stay
            </p>
            <p className='max-w-[17rem] text-[16px] -mt-1 text-gray-500'>
                Mar 28 - Aug 2
            </p>
            <p>
            ${price}
            </p>
        </div>
        {/* Right */}
        <div className='flex items-center space-x-1'>
            <AiFillStar />
            <p>
                {rating}
            </p> 
        </div>
        </div>
    </div>
  )
}

export default Rental
import React from 'react'

const Rental = ({title, image, price, id}) => {

  return (
    <div key={id} className='relative' >
        <div className='grad absolute w-full h-full'>hi </div>
        <div className='flex
        '>
            <img src={image} alt='view of house' className='object-cover rounded-[1.3rem]'/>
            <div className='absolute text-white font-bold bottom-0'>
                {title}
            </div>
        </div>
    </div>
  )
}

export default Rental
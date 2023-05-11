import React from 'react'

const Rental = ({title, image, price, id}) => {

  return (
    <div key={id} className='relative' >
        <div className='flex
        '>
            <div className='grad h-full w-full'>
            </div>
            <img src={image} alt='view of house' className='object-cover rounded-[1.3rem]'/>
            <div className='absolute text-white font-bold bottom-0'>
                {title}
            </div>
        </div>
    </div>
  )
}

export default Rental
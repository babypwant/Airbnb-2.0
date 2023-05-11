import React from 'react'

const Rental = ({title, image, price, key}) => {
    // console.log('title',title, 
    //             'image',image,
    //             'price', price,
    //             'key', key)
  return (
    <div>
        <div className='w-full 
        '>
            <img src={image} alt='view of house'/>
        </div>
    </div>
  )
}

export default Rental
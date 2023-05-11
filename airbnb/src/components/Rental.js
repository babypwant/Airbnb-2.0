import React from 'react'

const Rental = ({title, image, price, id}) => {

  return (
    <div key={id} >
        <div className='w-full 
        '>
            <img src={image} alt='view of house'/>
        </div>
    </div>
  )
}

export default Rental
import React from 'react'
import Rental from './Rental'
import house1 from '../assets/house3.jpeg'


const Rentals = () => {
    const rentals = [
    {title:"Palm Springs, CA", image: house1, price: 350, rating: 4.5, id:1},
    {title:"Palm Springs, CA", image: house1, price: 350, rating: 4.5, id:2},
    {title:"Palm Springs, CA", image: house1, price: 350, rating: 4.5, id:3},
    ]
  return (
    <div className='
    pt-3
    '>
        <div
        className='grid grid-cols-1 gap-4'>
            {rentals.map((rental) => <Rental title={rental.title} image={rental.image} price={rental.price} id={rental.id} key={rental.id}/>)}
        </div>
    </div>
  )
}

export default Rentals
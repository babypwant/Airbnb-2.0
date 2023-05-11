import React from 'react'
import Rental from './Rental'
import house1 from '../assets/house3.jpeg'


const Rentals = () => {
    const rentals = [{title:"Palm Springs, CA", image: house1, price: 350, rating: 4.5, key:1}]
    console.log(house1)
  return (
    <div className='
    pt-3
    '>
    {rentals.map((rental) => <Rental title={rental.title} image={rental.image} price={rental.price} key={rental.key}/>)}
    </div>
  )
}

export default Rentals
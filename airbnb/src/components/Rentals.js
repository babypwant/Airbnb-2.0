import React from 'react'
import Rental from './Rental'
import house1 from '../assets/house3.jpeg'


const Rentals = () => {
    const rentals = [
    {title:"Palm Springs, CA", image: house1, price: 350, rating: 4.5, id:1},
    {title:"Palm Springs, CA", image: house1, price: 350, rating: 4.5, id:2},
    {title:"Palm Springs, CA", image: house1, price: 350, rating: 4.5, id:3},
    {title:"Palm Springs, CA", image: house1, price: 350, rating: 4.5, id:4},
    {title:"Palm Springs, CA", image: house1, price: 350, rating: 4.5, id:5},
    {title:"Palm Springs, CA", image: house1, price: 350, rating: 4.5, id:6},
    ]
  return (
    <div className='
    py-3
    sm:pt-5
    '>
        <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4'>
            {rentals.map((rental) => <Rental title={rental.title} image={rental.image} price={rental.price} id={rental.id} rating={rental.rating} key={rental.id}/>)}
        </div>
    </div>
  )
}

export default Rentals
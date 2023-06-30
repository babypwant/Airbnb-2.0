import { useState } from 'react';
import axios from 'axios';
import PhotosUploader from '../PhotosUploader';
import Perks from '../Perks';
import AccountNav from '../AccountNav';
import { Navigate } from 'react-router-dom';

export default function PlacesFormPage() {

    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [addedPhotos, setAddedPhotos] = useState([])
  
    const [description, setDescription] = useState('')
    const [perks, setPerks] = useState([])
    const [extraInfo, setExtraInfo] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [maxGuests, setMaxGuests] = useState('')
    const [redirect, setRedirect] = useState(false)

    function inputHeader(text) {
        return(
          <h2 className='text-2xl'>{text}</h2>
        )
    
      }
    
      function inputDescription(text) {
        return(
          <p className='text-gray-500 text-sm' >{text}</p>
        )
    
      }
      
      function preInput(header, description) {
        return (
          <>
            {inputHeader(header)}
            {inputDescription(description)}
          </>
        )
      }

    async function addNewPlace(e) {
        e.preventDefault()
        await axios.post('/places', {
          title,
          address,
          addedPhotos,
          description,
          perks,
          extraInfo,
          checkIn,
          checkOut,
          maxGuests
        })
        setRedirect(true)
    
    }

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }

    
  return (
    <div> 
    <AccountNav />
    <form onSubmit={addNewPlace}>
      {preInput('Title', 'What vibe does your house have?')}
      <input type='text' values={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title ex: My Lovely Apartment..' />
      {preInput('Address', 'Where is your place located?')}
      <input type='text' values={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' />
      {preInput('Photos', 'Show off your place!')}
      
      <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
      {preInput('Description', 'What makes your place special?')}
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

      {preInput('Perks', 'What does your place have?')}
        <div className='grid gap-2 mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6' >

            <Perks selected={perks} onChange={setPerks} />

        </div>
        {preInput('Exta Info', 'Gate code, parking instructions, etc.')}
        <textarea value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)} />

        {preInput('Check In/Out', 'When should your guests arrive and leave?')}
        <div className='grid gap-2 sm:grid-cols-3' >
          <div>
            <h3 className='mt-2 -mb-1' >Check In time</h3>
            <input value={checkIn} onChange={(e) => setCheckIn(e.target.value)} type='text' placeholder='10:00 AM' />
          </div>

          <div>
          <h3 className='mt-2 -mb-1' >Check Out time</h3>

          <input value={checkOut} onChange={(e) => setCheckOut(e.target.value)} type='text' placeholder='3:00 PM' />
          </div>

          <div>
          <h3 className='mt-2 -mb-1' >Number of guests</h3>

          <input type='number' value={maxGuests} onChange={(e) => setMaxGuests(e.target.value)} placeholder='2' />
          </div>
        </div>
        <button className='primary my-4' >Save</button>
    </form>
  </div>
  )
}

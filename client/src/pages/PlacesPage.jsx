import {Link, useParams} from 'react-router-dom';
import { useState } from 'react';
import Perks from '../Perks';
import axios from 'axios';

export default function PlacesPage() {
  const { action } = useParams()
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState([])
  const [photoLink, setPhotoLink] = useState('')
  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [maxGuests, setMaxGuests] = useState('')

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

  async function addPhotoByLink (e) {
    e.preventDefault()
    const {data:filename} = await axios.post('/upload-by-link', {link: photoLink})
    setAddedPhotos(prev => [...prev, filename])
    setPhotoLink('')
  }

  return (
    <div>
      {
        action !== 'new' && (
          <div className='text-center'>
          <Link className=' inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full 'to={'/account/places/new'}>
         
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
            Add new place
  
          </Link>
        </div>
        )}
        {
          action === 'new' && (
              <div>
                <form>
                  {preInput('Title', 'What vibe does your house have?')}
                  <input type='text' values={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title ex: My Lovely Apartment..' />
                  {preInput('Address', 'Where is your place located?')}
                  <input type='text' values={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' />
                  {preInput('Photos', 'Show off your place!')}
                  <div className='flex gap-2'>
                    <input value={photoLink} onChange={(e) => setPhotoLink(e.target.value)} type='text' placeholder='Photo URL' />
                    <button className='bg-gray-200 px-4 rounded-2xl' onClick={addPhotoByLink} >Add&nbsp; Photo</button>
                  </div>
                  <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2' >
                    {addedPhotos.length > 0 && addedPhotos.map((link) => (
                          <div key={link}>
                            {link}
                          </div>
                      ))}
                    <button className='flex justify-center gap-2 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>

                      Upload</button>
                  </div>

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
          )}
    </div>
  )
}

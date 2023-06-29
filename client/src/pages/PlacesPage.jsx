import {Link, useParams} from 'react-router-dom';
import { useState } from 'react';

export default function PlacesPage() {
  const { action } = useParams()
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [adddedPhotos, setAddedPhotos] = useState([])
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
                  <h2 className='text-2xl'>Title</h2>
                  <p className='text-gray-500 text-sm' >What vibe does your house have?</p>
                  <input type='text' placeholder='Title ex: My Lovely Apartment..' />
                  <h2 className='text-2xl'>Address </h2>
                  <p className='text-gray-500 text-sm' >Apartment number?</p>
                  <input type='text' placeholder='Address' />
                  <h2 className='text-2xl mt-4'>Photos</h2>
                  <p className='text-gray-500 text-sm' >More = Better! Show off your place!</p>
                  <div className='flex gap-2'>
                    <input type='text' placeholder='Photo URL' />
                    <button className='bg-gray-200 px-4 rounded-2xl' >Add&nbsp; Photo</button>
                  </div>
                  <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2' >
                    <button className='flex justify-center gap-2 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>

                      Upload</button>
                  </div>

                  <h2 className='text-2xl mt-4'>Description</h2>
                  <p className='text-gray-500 text-sm' >What makes your place special?</p>
                  <textarea />

                  <h2 className='text-2xl mt-4'>Ammeneties</h2>
                  <p className='text-gray-500 text-sm' >Does your place have any of these?</p>
                    <div className='grid gap-2 mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6' >

                        <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer' >
                          <input type='checkbox' />
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                          </svg>

                          <span>T.V.</span>
                      </label>

                      <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer' >
                        <input type='checkbox' />
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                          </svg>
                        <span>Wifi</span>
                      </label>

                      <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer' >
                          <input type='checkbox' />
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                          </svg>
                          <span>EV Charging</span>
                      </label>

                      <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer' >
                        <input type='checkbox' />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>

                        <span>Pets allowed</span>
                      </label>

                      <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer' >
                        <input type='checkbox' />

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3" />
                        </svg>

                        <span>Air conditioning</span>
                      </label>

                      <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer' >
                        <input type='checkbox' />

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>

                        <span>Kitchen</span>
                      </label>

                    </div>
                    <h2 className='text-2xl mt-4'>Extra Info</h2>
                    <p className='text-gray-500 text-sm' >Gate code? House Rules? Put them here !</p>
                    <textarea />

                    <h2 className='text-2xl mt-4'>Check In/Out</h2>
                    <p className='text-gray-500 text-sm' >What time should your guests arrive?</p>
                    <div className='grid gap-2 sm:grid-cols-3' >
                      <div>
                        <h3 className='mt-2 -mb-1' >Check In time</h3>
                        <input type='text' placeholder='10:00 AM' />
                      </div>

                      <div>
                      <h3 className='mt-2 -mb-1' >Check Out time</h3>

                      <input type='text' placeholder='3:00 PM' />
                      </div>

                      <div>
                      <h3 className='mt-2 -mb-1' >Number of guests</h3>

                      <input type='text' placeholder='2' />
                      </div>
                    </div>
                    <button className='primary my-4' >Save</button>
                </form>
              </div>
          )}
    </div>
  )
}

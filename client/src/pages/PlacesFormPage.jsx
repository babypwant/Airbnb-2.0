import React from 'react';
import PhotosUploader from "../PhotosUploader.jsx";
import Perks from "../Perks.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import AccountNav from "../AccountNav";
import {Navigate, useParams} from "react-router-dom";

export default function PlacesFormPage() {
  const {id} = useParams();
  const [title,setTitle] = useState('');
  const [address,setAddress] = useState('');
  const [addedPhotos,setAddedPhotos] = useState([]);
  const [description,setDescription] = useState('');
  const [perks,setPerks] = useState([]);
  const [extraInfo,setExtraInfo] = useState('');
  const [checkIn,setCheckIn] = useState('10:00 AM');
  const [checkOut, setCheckOut] = useState('2:00 PM');
  const [maxGuests,setMaxGuests] = useState(1);
  const [price,setPrice] = useState(100);
  const [redirect,setRedirect] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/places/'+id).then(response => {
       const {data} = response;
       setTitle(data.title);
       setAddress(data.address);
       setAddedPhotos(data.photos);
       setDescription(data.description);
       setPerks(data.perks);
       setExtraInfo(data.extraInfo);
       setCheckIn(data.checkIn);
       setCheckOut(data.checkOut);
       setMaxGuests(data.maxGuests);
       setPrice(data.price);
    });
  }, [id]);
  function inputHeader(text) {
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    );
  }
  function inputDescription(text) {
    return (
      <p className="text-gray-500 text-sm">{text}</p>
    );
  }
  function preInput(header,description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function savePlace(ev) {
    ev.preventDefault();
    const placeData = {
      title, address, addedPhotos,
      description, perks, extraInfo,
      checkIn, checkOut, maxGuests, price,
    };
    if (id) {
      // update
      await axios.put('/places', {
        id, ...placeData
      });
      setRedirect(true);
    } else {
      // new place
      await axios.post('/places', placeData);
      setRedirect(true);
    }

  }

  if (redirect) {
    return <Navigate to={'/account/places'} />
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={savePlace}>
        {preInput('Title', 'Give your place a name ! ')}
        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="My Lovely Apartment..."/>
        {preInput('Address', 'Where is your place located ?')}
        <input type="text" value={address} onChange={ev => setAddress(ev.target.value)}placeholder="address"/>
        {preInput('Photos','Show off your decor ! more is better')}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        {preInput('Description','What vibes does your place give off?')}
        <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
        {preInput('Amenities','Does your space offer any of these?')}
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Perks selected={perks} onChange={setPerks} />
        </div>
        {preInput('Extra info','Anything else your guests should know? Gate code? Private entrance?')}
        <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
        {preInput('Check In/Out','When should your guests arrive and leave?')}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1">Check in time</h3>
              <select
              value={checkIn}
              onChange={ev => setCheckIn(ev.target.value)}
            >
              <option value="10:00 AM">10:00 AM</option>
              {Array.from({ length: 12 }, (_, i) => {
                const hour = i + 1;
                const amTime = `${hour}:00 AM`;
                const pmTime = `${hour}:00 PM`;
                return (
                  <React.Fragment key={hour}>
                    <option value={amTime}>{amTime}</option>
                    <option value={pmTime}>{pmTime}</option>
                  </React.Fragment>
                );
              })}
            </select>
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check out time</h3>
                <select
                value={checkOut}
                onChange={ev => setCheckOut(ev.target.value)}
              >
                <option value="2:00 PM">2:00 PM</option>
                {Array.from({ length: 12 }, (_, i) => {
                  const hour = i + 1;
                  const amTime = `${hour}:00 AM`;
                  const pmTime = `${hour}:00 PM`;
                  return (
                    <React.Fragment key={hour}>
                      <option value={amTime}>{amTime}</option>
                      <option value={pmTime}>{pmTime}</option>
                    </React.Fragment>
                  );
                })}
              </select>
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max number of guests</h3>
            <input type="number" value={maxGuests}
                   onChange={ev => setMaxGuests(ev.target.value)}/>
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Price per night</h3>
            <input type="number" value={price}
                   onChange={ev => setPrice(ev.target.value)}/>
          </div>
        </div>
        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
}
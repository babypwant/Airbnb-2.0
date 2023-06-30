import axios from 'axios';
import { useState } from 'react';



export default function PhotosUploader({addedPhotos, onChange}) {
    const [photoLink, setPhotoLink] = useState('')

    async function addPhotoByLink (e) {
        e.preventDefault()
        const {data:filename} = await axios.post('/upload-by-link', {link: photoLink})
        onChange(prev => [...prev, filename])
        setPhotoLink('')
      }
    
      async function uploadPhoto(e) {
          e.preventDefault()
          try {
            const files = e.target.files;
            const data = new FormData()
            for (let i = 0; i < files.length; i++) {
                data.append('photos', files[i])
            }
            await axios.post('/upload', data, {
              headers: {'Content-type': 'multipart/form-data'}
            }).then (response => {
              console.log(response)
              const {data:filenames} = response;
              onChange(prev => [...prev, ...filenames])
            })
          }
          catch(e) {
            console.log('Sorry something went wrong', e )
          }
        }
  return (
    <>
    <div className='flex gap-2'>
                    <input value={photoLink} onChange={(e) => setPhotoLink(e.target.value)} type='text' placeholder='Photo URL' />
                    <button className='bg-gray-200 px-4 rounded-2xl' onClick={addPhotoByLink} >Add&nbsp; Photo</button>
                  </div>
                  <div className='grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2' >
                    {addedPhotos.length > 0 && addedPhotos.map((link) => (
                          <div className='flex' key={link}>
                            <img className='rounded-2xl w-full object-cover position-center ' src={'http://localhost:4000/uploads/' + link} alt='house image' />
                          </div>
                      ))}
                    <label className='h-32 flex items-center justify-center gap-2 border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 cursor-pointer'>
                      <input type='file' multiple className='hidden' onChange={uploadPhoto} />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>

                      Upload</label>
                  </div>
    </>
  )
}

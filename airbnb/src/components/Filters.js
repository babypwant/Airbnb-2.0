import React from 'react'
import {FaKey,FaMountain} from 'react-icons/fa'
import {GiBowlingStrike, GiSailboat} from 'react-icons/gi'
import {MdHouseboat,MdBedroomChild} from 'react-icons/md'
import Filter from './Filter'

const Filters = () => {
    const icons = [
        // {title:"New",icon:<FaKey/>},
        // {title:"Top of the world",icon:<FaMountain/>},
        // {title:"Play",icon:<GiBowlingStrike/>},
        // {title:"Japanese Inn",icon:<MdHouseboat/>},
        // {title:"Private Rooms",icon:<MdBedroomChild/>},
        // {title:"Boats",icon:<GiSailboat/>},
    ];
  return (
    <div className="sm:mx-6 md:mx-10 lg:mx-12"
    >
        <div className='flex justify-center'>
            {icons.map((obj) => (
                <Filter title={obj.title} icon={obj.icon} />
            ))}
        </div>
    </div>
  )
}

export default Filters
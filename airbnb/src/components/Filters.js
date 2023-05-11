import React from 'react'
import {FaKey,FaMountain} from 'react-icons/fa'
import {GiBowlingStrike, GiSailboat} from 'react-icons/gi'
import {MdHouseboat,MdBedroomChild} from 'react-icons/md'
import Filter from './Filter'

const Filters = () => {
    // remake the icons into an array instead of array o objects.
    const icons = [
        {title:"New",icon:<FaKey/> ,key:1},
        {title:"Top of the world",icon:<FaMountain/>,key:1},
        {title:"Play",icon:<GiBowlingStrike/>,key:2},
        {title:"Japanese Inn",icon:<MdHouseboat/>,key:3},
        {title:"Private Rooms",icon:<MdBedroomChild/>,key:4},
        {title:"Boats",icon:<GiSailboat/>,key:5},
    ];
  return (
    <div className="sm:mx-6 md:mx-10 lg:mx-12">
        <div className='flex justify-center'>
            {icons.map((obj) => (
                <Filter title={obj.title} icon={obj.icon} />
            ))}
        </div>
    </div>
  )
}

export default Filters
import React from 'react'
import {FaKey,FaMountain} from 'react-icons/fa'
import {GiBowlingStrike, GiSailboat} from 'react-icons/gi'
import {MdHouseboat,MdBedroomChild} from 'react-icons/md'
import Filter from './Filter'

const Filters = () => {
    // remake the icons into an array instead of array o objects.
    const icons = [
        {title:"New",icon:<FaKey/> ,id:0},
        {title:"Top of the world",icon:<FaMountain/>,id:1},
        {title:"Play",icon:<GiBowlingStrike/>,id:2},
        {title:"Japanese Inn",icon:<MdHouseboat/>,id:3},
        {title:"Private Rooms",icon:<MdBedroomChild/>,id:4},
        {title:"Boats",icon:<GiSailboat/>,id:5},
    ];
  return (
    <div className="
    py-8">
        <div className='flex justify-center'>
            {icons.map((obj) => (
                <Filter title={obj.title} icon={obj.icon} key={obj.id} />
            ))}
        </div>
    </div>
  )
}

export default Filters
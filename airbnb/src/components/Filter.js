import React from "react";

const Filter = ({title, icon}) => {
    return (
      <div className='mx-5'>
        {icon}
        <p className='text-center text-sm text-gray-600'>{title}</p>
      </div>
    )
}
  

export default Filter;
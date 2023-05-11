import React from "react";

const Filter = ({title, icon}) => {
    return (
      <div className='flex items-center 
      text-white bg-[#ff5a60] 
      hover:bg-white
      hover:text-[#ff5a60] 
      hover:font-bold
      duration-200 ease-out
      py-1 px-4 rounded-full mx-2
      sm:px-4 rourounded-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]
      '>
        {icon}
        <p className='text-center text-sm text-black px-1'>{title}</p>
      </div>
    )
}
  

export default Filter;
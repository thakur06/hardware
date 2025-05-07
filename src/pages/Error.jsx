import React from 'react'
import { BiErrorCircle } from "react-icons/bi";
export const Error = () => {
  return (
    <div className='p-5 flex flex-col items-center h-[80vh] justify-center'>
        <BiErrorCircle size={140} color='red'/>
        <h1
        className="text-2xl md:text-3xl w-full text-[red] text-center mt-10 mb-5"
        style={{ fontFamily: "incognito" }}
      >
        The page you'are trying to reach isn't available
      </h1>
    </div>
  )
}

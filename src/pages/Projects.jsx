import React from 'react'
import mongo from "../assets/Tech/mongo.png"
export const Projects = () => {
  return (
    <div className="md:p-14 p-4">
   <h1 style={{fontFamily:"incognito"}} className='md:text-3xl text-xl'>Contribution Graph</h1>
  <p className="text-gray-600 md:w-3xl mt-4">
    I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 mt-10">
    {/* Card */}
    <div className="h-24 w-full bg-[#222123] rounded-2xl flex items-center p-4">
      <img src={mongo} alt="MongoDB" className="h-16 w-16 object-contain mr-4 bg-[#272728] p-1 rounded-md" />
      <div className="flex flex-col">
        <h1 className="text-white text-md font-semibold">Project Name</h1>
        <p className="text-gray-300 text-sm">Short description</p>
      </div>
    </div>
  </div>
</div>

  )
}

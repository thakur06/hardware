import React from 'react'
import mongo from "../assets/Tech/mongo.png"
export const Projects = () => {
  return (
    <div className="md:p-14 p-4">
  <h1 className="text-2xl font-bold mb-4">Projects</h1>
  <p className="text-gray-600">
    I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mt-10">
    {/* Card */}
    <div className="h-28 w-full bg-amber-950 rounded-2xl flex items-center p-4">
      <img src={mongo} alt="MongoDB" className="h-20 w-20 object-contain mr-4" />
      <div className="flex flex-col">
        <h1 className="text-white text-lg font-semibold">Project Name</h1>
        <p className="text-gray-300 text-sm">Short description</p>
      </div>
    </div>

    <div className="h-28 w-full bg-amber-950 rounded-2xl flex items-center p-4">
      <img src={mongo} alt="MongoDB" className="h-20 w-20 object-contain mr-4" />
      <div className="flex flex-col">
        <h1 className="text-white text-lg font-semibold">Project Name</h1>
        <p className="text-gray-300 text-sm">Short description</p>
      </div>
    </div>

    <div className="h-28 w-full bg-amber-950 rounded-2xl flex items-center p-4">
      <img src={mongo} alt="MongoDB" className="h-20 w-20 object-contain mr-4" />
      <div className="flex flex-col">
        <h1 className="text-white text-lg font-semibold">Project Name</h1>
        <p className="text-gray-300 text-sm">Short description</p>
      </div>
    </div>

    <div className="h-28 w-full bg-amber-950 rounded-2xl flex items-center p-4">
      <img src={mongo} alt="MongoDB" className="h-20 w-20 object-contain mr-4" />
      <div className="flex flex-col">
        <h1 className="text-white text-lg font-semibold">Project Name</h1>
        <p className="text-gray-300 text-sm">Short description</p>
      </div>
    </div>
  </div>
</div>

  )
}

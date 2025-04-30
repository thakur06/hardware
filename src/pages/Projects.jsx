import React from 'react'
import mongo from "../assets/Tech/mongo.png";
import tic from "../assets/Icons/tic.png";
import npm from "../assets/Icons/npm.png"
import cart from "../assets/Icons/cart.png"
import calender from "../assets/Icons/calender.png"
import management from "../assets/Icons/management.png"
export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Shopvilla",
      icon: cart,
      desc: "An online store for everyday essentials.",
    },
    {
      id: 2,
      name: "Clockworker",
      icon: management,
      desc: "A clock-in/out app with location tracking for employees.",
    },
    {
      id: 3,
      name: "Google Calendar",
      icon: calender,
      desc: "A task management calendar with email reminders.",
    },
    {
      id: 4,
      name: "Tic Tac Toe - Multiplayer",
      icon: tic,
      desc: "Play Tic Tac Toe and chat with friends from anywhere.",
    },
    {
      id: 5,
      name: "mynetworkinfo",
      icon: npm,
      desc: "An NPM package to detect network type, speed, and status.",
    }
  ];
  
  return (
    <div className="md:p-14 p-4 font-serif">
   <h1 style={{fontFamily:"incognito"}} className='md:text-3xl text-xl'>Projects</h1>
  <p className="text-gray-600 md:w-3xl mt-4">
    I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 mt-10">
    {/* Card */}
    {projects.map((data,index)=>(

   
<div className="h-24 w-full bg-[#22212386] rounded-xl shadow-lg flex items-center p-4 hover:border hover:border-gray-500 ">
      <div className="h-16 w-16 flex items-center justify-center bg-[#2d292da5] rounded-lg shadow-md p-1 mr-5">
        <img src={data.icon} alt={data.name} className="h-14 w-14 object-contain" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-gray-500 text-lg font-bold tracking-tight">{data.name}</h1>
        <p className="text-gray-400 text-sm mt-1 font-medium">{data.desc}</p>
      </div>
    </div> ))}
  </div>
</div>

  )
}

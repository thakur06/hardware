import React from 'react'
import Biogas from "../assets/Company/Biogaseng.png"
import Oneshield from "../assets/Company/Oneshield.png"
export const Exp = () => {
    const experience=[

{
comapany:"Biogas Engineering",
role:"Associate Software Engineer",
duration:<small className='text-sm text-gray-400 mb-2'>Jan 2025 - <span className='text-green-500 font-bold'>Present</span></small>,
Icon:Biogas,
desc:"At Optimus, my work involves developing and maintaing dynamic user-centric applications and interfaces for top organizations and government agencies"
},
{
    comapany:"Oneshield India",
    role:"Associate Software Engineer",
    duration:<small className='text-sm text-gray-400 mb-2'>Aug 2023 - Sept 2024</small>,
    Icon:Oneshield,
    desc:"At Optimus, my work involves developing and maintaing dynamic user-centric applications and interfaces for top organizations and government agencies"
}


    ];
  return (
    <div className='md:p-15 p-1 mt-5'>
        <h1 className='text-2xl md:text-3xl' style={{fontFamily:"incognito"}}>WORK EXPERIENCE</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8  md:p-4 p-1">
  {/* Card 1 */}
 { experience.map((data,index)=>(<div className=" rounded-2xl md:p-6 p-0 flex flex-col justify-between" key={data.comapany}>
    <div className="flex items-start md:gap-4 gap-2 py-6 md:py-0 " >
      <img
        className="h-24 w-24 object-contain bg-[#202022] rounded-2xl p-2"
        src={data.Icon}
        alt="Company Logo"
      />
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold text-white">{data.comapany}</h1>
        <h2 className="text-sm text-gray-400">{data.role}</h2>
        {data.duration}
        <p className="text-gray-300 text-sm">
          {data.desc}
        </p>
      </div>
    </div>
  </div>))}


</div>

        </div>
 
  )
}

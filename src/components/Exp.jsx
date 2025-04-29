import React from 'react'
import Biogas from "../assets/Company/Biogaseng.png"
import Oneshield from "../assets/Company/Oneshield.png"
export const Exp = () => {
  return (
    <div className='md:p-15 p-6'>
        <h1>WORK EXPERIENCE</h1>
    <div className='grid md:grid-cols-2 gap-5 grid-cols-1  '>
        <div className='bg-transparent h-80'>
            <div className='flex flex-row'>
            <img className='h-24 w-24 object-contain bg-[#202022] rounded-2xl p-2' src={Biogas}/>
            <div className='flex flex-col'>
            <h1>Company</h1><br/>
            <h1>Role</h1>
            <h1>Role</h1>
            <p>At Optimus, my work involves developing and maintaing dynamic user-centric applications and interfaces for top organizations and government agencies</p></div></div>
        </div>
        <div className='bg-transparent h-80'>
       
            <div className='flex flex-row'>
            <img className='h-24 w-24 object-contain bg-[#202022] rounded-2xl p-2' src={Biogas}/>
            <div className='flex flex-col'>
            <h1>Company</h1><br/>
            <h1>Role</h1>
            <h1>Role</h1>
            <p>At Optimus, my work involves developing and maintaing dynamic user-centric applications and interfaces for top organizations and government agencies</p></div></div>
        </div>
        </div>
        </div>
 
  )
}

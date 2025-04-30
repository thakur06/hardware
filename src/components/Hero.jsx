import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export const Hero = () => {
  return (
    <div className='flex md:flex-row flex-col md:p-10 p-1 md:mt-8 mt-10 justify-between items-center'>
        <div className='flex flex-col md:w-4xl'>
<h1 className='md:text-5xl text-2xl' style={{fontFamily:"incognito"}}>
Software engineer, technical writer & open-source maintainer
</h1>
<small className='text-gray-600 mt-6'>I'm Victor Eke, an experienced frontend developer passionate about learning and building open-source software that is beneficial to developers and the world at large.</small>
<div className="flex flex-wrap text-center gap-4 items-center mt-5">
  <div className="flex flex-row items-center gap-2 border-b border-white/10 px-2 py-1 cursor-pointer">
    <FaGithub color="grey" size={18} />
    <span>Github</span>
  </div>
  <div className="flex flex-row items-center gap-2 border-b border-white/10 px-2 py-1 cursor-pointer">
    <FaLinkedin color="grey" size={18} />
    <span>LinkedIn</span>
  </div>
  <div className="flex flex-row items-center gap-2 border-b border-white/10 px-2 py-1 cursor-pointer">
    <SiLeetcode color="grey" size={18} />
    <span>LeetCode</span>
  </div>
  <div className="flex flex-row items-center gap-2 border-b border-white/10 px-2 py-1 cursor-pointer">
    <FaInstagram color="grey" size={18} />
    <span>Instagram</span>
  </div>
</div>

</div>


<div className="w-full h-auto aspect-[1.4/1] max-w-screen-lg mx-auto md:w-4/5 lg:w-3/5">
<svg viewBox="0 0 1273 906" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="paint-linear" x1="1272.23" y1="479.474" x2="506.242" y2="-216.277" gradientUnits="userSpaceOnUse">
      <stop stopColor="#27b173">
        <animate attributeName="stopColor" values="#27b173;#1a663f;#26312d;#27b173" dur="10s" repeatCount="indefinite" />
      </stop>
      <stop offset="0.619553" stopColor="#1a663f">
        <animate attributeName="stopColor" values="#1a663f;#26312d;#27b173;#1a663f" dur="20s" repeatCount="indefinite" />
      </stop>
      <stop offset="0.93102" stopColor="#26312d">
        <animate attributeName="stopColor" values="#26312d;#27b173;#1a663f;#26312d" dur="17s" repeatCount="indefinite" />
      </stop>
    </linearGradient>
    
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  
  <path d="M318.587 315.483L159.63 236.949M318.587 315.483L159.63 237.286L0.673828 315.483M318.587 315.483L159.63 394.016M159.63 236.949V79.5451M159.63 589.469V394.016M159.63 589.469L0.673828 509.925V315.483M0.673828 315.483L159.63 394.016M159.63 79.5451L318.587 1.34863L477.544 79.5451L318.587 158.079L159.63 79.5451Z" 
        stroke="url(#paint-linear)" strokeWidth="2" strokeOpacity="0.8" filter="url(#glow)">
    <animate attributeName="stroke-dasharray" values="1,2000;2000,0" dur="30s" repeatCount="indefinite" />
    <animate attributeName="stroke-dashoffset" values="2000;0" dur="16s" repeatCount="indefinite" />
    <animate attributeName="strokeOpacity" values="0.8;0.4;0.8" dur="10s" repeatCount="indefinite" />
  </path>
  
  <path d="M318.587 315.483V510.936L477.544 431.391V236.949M318.587 315.483L477.544 236.949M318.587 315.483V509.925L159.63 589.469M477.544 236.949L318.587 158.753L159.63 236.949M477.544 236.949V432.402M477.544 236.949L318.587 158.416L477.544 80.2192L636.5 158.416L477.544 236.949Z" 
        stroke="url(#paint-linear)" strokeWidth="2" strokeOpacity="0.8" filter="url(#glow)">
    <animate attributeName="stroke-dasharray" values="1,1800;1800,0" dur="8s" repeatCount="indefinite" />
    <animate attributeName="stroke-dashoffset" values="1800;0" dur="9s" repeatCount="indefinite" />
    <animate attributeName="strokeOpacity" values="0.8;0.5;0.8" dur="12s" repeatCount="indefinite" />
  </path>
  
  <path d="M795.457 395.701V237.286M795.457 237.286L636.5 159.09L477.544 237.286M795.457 237.286L636.5 315.82M477.544 237.286V431.728L601.139 491.762M477.544 237.286L636.5 315.82M636.5 315.82V472.887" 
        stroke="url(#paint-linear)" strokeWidth="2" strokeOpacity="0.8" filter="url(#glow)">
    <animate attributeName="stroke-dasharray" values="1,1500;1500,0" dur="10s" repeatCount="indefinite" />
    <animate attributeName="stroke-dashoffset" values="1500;0" dur="9s" repeatCount="indefinite" />
    <animate attributeName="strokeOpacity" values="0.8;0.4;0.8" dur="8s" repeatCount="indefinite" />
  </path>
  
  <path d="M954.414 668.003V473.561M954.414 473.561L795.457 395.364L636.5 473.561L795.457 552.094M954.414 473.561L795.457 552.094M954.414 473.561V669.014M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L954.414 473.561Z" 
        stroke="url(#paint-linear)" strokeWidth="2" strokeOpacity="0.8" filter="url(#glow)">
    <animate attributeName="stroke-dasharray" values="1,1700;1700,0" dur="9s" repeatCount="indefinite" />
    <animate attributeName="stroke-dashoffset" values="1700;0" dur="8s" repeatCount="indefinite" />
    <animate attributeName="strokeOpacity" values="0.8;0.5;0.8" dur="10s" repeatCount="indefinite" />
  </path>
  
  <path d="M795.457 552.094L636.5 473.898L477.544 552.094M795.457 552.094L636.5 630.628M477.544 552.094V746.534L636.5 826.078V630.628M477.544 552.094L636.5 630.628M795.457 709.498V904.949M795.457 709.498L636.5 630.965M795.457 709.498L954.414 630.965M795.457 904.949L954.414 825.404V630.965M795.457 904.949L636.5 825.404V630.965M636.5 630.965L795.457 552.768L954.414 630.965" 
        stroke="url(#paint-linear)" strokeWidth="2" strokeOpacity="0.8" filter="url(#glow)">
    <animate attributeName="stroke-dasharray" values="1,2100;2100,0" dur="9s" repeatCount="indefinite" />
    <animate attributeName="stroke-dashoffset" values="2100;0" dur="9s" repeatCount="indefinite" />
    <animate attributeName="strokeOpacity" values="0.8;0.4;0.8" dur="12s" repeatCount="indefinite" />
  </path>
  
  <path d="M1113.37 552.431V747.882M1113.37 552.431L954.414 473.898M1113.37 552.431L1272.33 473.898M1113.37 747.882L1272.33 668.34V473.898M1113.37 747.882L954.414 668.34V473.898M954.414 473.898L1113.37 395.701L1272.33 473.898" 
        stroke="url(#paint-linear)" strokeWidth="2" strokeOpacity="0.8" filter="url(#glow)">
    <animate attributeName="stroke-dasharray" values="1,1800;1800,0" dur="16s" repeatCount="indefinite" />
    <animate attributeName="stroke-dashoffset" values="1800;0" dur="10s" repeatCount="indefinite" />
    <animate attributeName="strokeOpacity" values="0.8;0.5;0.8" dur="9s" repeatCount="indefinite" />
  </path>
  
  <path d="M318.587 315.483V510.936L477.544 431.391V236.949M318.587 315.483L159.63 236.949M318.587 315.483L477.544 236.949M318.587 315.483V509.925L159.63 589.469M318.587 315.483L159.63 237.286L0.673828 315.483M318.587 315.483L159.63 394.016M477.544 236.949L318.587 158.753L159.63 236.949M477.544 236.949V432.402M477.544 236.949L318.587 158.416L477.544 80.2192L636.5 158.416L477.544 236.949ZM159.63 236.949V79.5451M159.63 589.469V394.016M159.63 589.469L0.673828 509.925V315.483M0.673828 315.483L159.63 394.016M159.63 79.5451L318.587 1.34863L477.544 79.5451L318.587 158.079L159.63 79.5451ZM795.457 395.701V237.286M795.457 237.286L636.5 159.09L477.544 237.286M795.457 237.286L636.5 315.82M477.544 237.286V431.728L601.139 491.762M477.544 237.286L636.5 315.82M636.5 315.82V472.887M954.414 668.003V473.561M954.414 473.561L795.457 395.364L636.5 473.561L795.457 552.094M954.414 473.561L795.457 552.094M954.414 473.561V669.014M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L954.414 473.561ZM795.457 552.094L636.5 473.898L477.544 552.094M795.457 552.094L636.5 630.628M477.544 552.094V746.534L636.5 826.078V630.628M477.544 552.094L636.5 630.628M795.457 709.498V904.949M795.457 709.498L636.5 630.965M795.457 709.498L954.414 630.965M795.457 904.949L954.414 825.404V630.965M795.457 904.949L636.5 825.404V630.965M636.5 630.965L795.457 552.768L954.414 630.965M1113.37 552.431V747.882M1113.37 552.431L954.414 473.898M1113.37 552.431L1272.33 473.898M1113.37 747.882L1272.33 668.34V473.898M1113.37 747.882L954.414 668.34V473.898M954.414 473.898L1113.37 395.701L1272.33 473.898" 
        stroke="url(#paint-linear)" strokeWidth="0.5" strokeOpacity="0.2">
    <animate attributeName="strokeOpacity" values="0.1;0.3;0.1" dur="8s" repeatCount="indefinite" />
  </path>
  
  <g>
    <circle cx="159" cy="586" r="5" fill="#27B173">
      <animate attributeName="r" values="5;6;5" dur="4s" repeatCount="indefinite" />
      <animate attributeName="fill-opacity" values="1;0.7;1" dur="12s" repeatCount="indefinite" />
    </circle>
    <circle cx="159" cy="393" r="5" fill="#27B173">
      <animate attributeName="r" values="5;6;5" dur="5s" repeatCount="indefinite" />
      <animate attributeName="fill-opacity" values="1;0.8;1" dur="9s" repeatCount="indefinite" />
    </circle>
    <circle cx="793" cy="551" r="5" fill="#27B173">
      <animate attributeName="r" values="5;7;5" dur="6s" repeatCount="indefinite" />
      <animate attributeName="fill-opacity" values="1;0.7;1" dur="10s" repeatCount="indefinite" />
    </circle>
    <circle cx="1113" cy="551" r="5" fill="#27B173">
      <animate attributeName="r" values="5;6;5" dur="4.5s" repeatCount="indefinite" />
      <animate attributeName="fill-opacity" values="1;0.8;1" dur="11.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="1113" cy="398" r="5" fill="#27B173">
      <animate attributeName="r" values="5;7;5" dur="5.5s" repeatCount="indefinite" />
      <animate attributeName="fill-opacity" values="1;0.7;1" dur="10.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="793" cy="237" r="5" fill="#27B173">
      <animate attributeName="r" values="5;6;5" dur="5s" repeatCount="indefinite" />
      <animate attributeName="fill-opacity" values="1;0.8;1" dur="8s" repeatCount="indefinite" />
    </circle>
  </g>
</svg>
</div>
    </div>
  )
}

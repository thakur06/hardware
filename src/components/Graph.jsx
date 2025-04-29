import React,{useEffect,useState} from 'react'
import GitHubCalendar from 'react-github-calendar'
export const Graph = () => {
    
        const [years, setYears] = useState([]);
        const [gitYear, setGitYear] = useState()
        useEffect(() => {
          const currentYear = new Date().getFullYear();
          const lastFiveYears = Array.from({ length: 5 }, (_, i) => currentYear - i);
        setGitYear(currentYear);
          setYears(lastFiveYears);
        }, []);
        
  return (
    <div className='md:p-16 p-1'>
        <h1 style={{fontFamily:"incognito"}} className='md:text-3xl text-xl'>Contribution Graph</h1>
    <div className='p-7 flex flex-row border border-gray-600 rounded-md bg-[#222224]'>
   <GitHubCalendar username='thakur06'year={gitYear} />
  
   <div className=' hidden md:flex flex-col p-3 gap-2 ml-10 '>   {years.map((data,index)=>(
    <span key={data} className={` ${data==gitYear? "bg-green-600":null} p-1 rounded-md border border-gray-700`} onClick={()=>setGitYear(data)}>{data}</span>
   ))}</div>
   </div>
   <div className='flex md:hidden flex-row p-3 gap-2 ml-5 items-center justify-center'>   {years.map((data,index)=>(
    <span key={data} className={` ${data==gitYear? "bg-green-600":null} p-1 rounded-md border border-gray-700`} onClick={()=>setGitYear(data)}>{data}</span>
   ))}</div>
   </div>
  )


}
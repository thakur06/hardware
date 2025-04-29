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
    <div className='p-16'>
        <h1 style={{fontFamily:"incognito"}} className='text-3xl'>Contribution Graph</h1>
    <div className='p-7 flex flex-row border border-gray-600 rounded-md bg-[#222224]'>
   <GitHubCalendar username='thakur06'year={gitYear} />
   <div className='flex flex-col p-3 gap-2 ml-5'>   {years.map((data,index)=>(
    <span key={data} className={` ${data==gitYear? "bg-green-600":null} p-1 rounded-md border border-gray-700`} onClick={()=>setGitYear(data)}>{data}</span>
   ))}</div>

   </div>
   </div>
  )


}
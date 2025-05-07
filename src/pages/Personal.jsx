import React, { useEffect } from 'react'
import { Outlet,Link,useLocation} from 'react-router-dom'
export const Personal = () => {
    let page=useLocation();
    useEffect(() => {
      
    console.log(page)
    
    }, [page])
    
  return (
    <div>
        <div className='p-5 w-full flex flex-row items-center justify-center gap-10'>
        <Link to="/me" style={{fontFamily:"incognito"}}     className={` transition-all hover:ease-in-out hover:duration-150 hover:scale-110 text-3xl py-1 px-3 rounded-sm ${location.pathname=="/me"?"underline":null}`}>dsa</Link>
        <Link to="/me/dev" style={{fontFamily:"incognito"}} className={` transition-all hover:ease-in-out hover:duration-150 hover:scale-110 text-3xl py-1 px-3 rounded-sm ${location.pathname=="/me/dev"?"underline":null}`}>dev</Link>
       
    </div>
<Outlet/>
    </div>
  )
}

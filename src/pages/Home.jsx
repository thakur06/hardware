import React from 'react'
import { Hero } from '../components/Hero'
import { Graph } from '../components/Graph'
import { Exp } from '../components/Exp'
export const Home = () => {
  return (
    <div className='p-5'>
        <Hero/>
        <Graph/>
        <Exp/>
    </div>
  )
}

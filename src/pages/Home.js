import React from 'react'
import Herosection1 from '../components/Herosection1'
import Herosection2 from '../components/Herosection2'
import Herosection3 from '../components/Herosection3'

export default function Home({handleLoginView, login}) {
  return (
    <div className='Home h-fit'>
        <Herosection1/>
        <Herosection2/>
        <Herosection3/>
    </div>
  )
}

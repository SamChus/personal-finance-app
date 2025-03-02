import React from 'react'
import PotBtn from '../../components/PotBtn'

const Pots = () => {
  return (
    <div>
       <div className='flex justify-between items-center'>
        <h1 className='text-3xl text-black font-bold'>Pots</h1>
        <PotBtn />
      </div>
    </div>
  )
}

export default Pots
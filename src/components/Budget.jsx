import React from 'react'
import { MdArrowRight } from 'react-icons/md'

const Budget = () => {
  return (
    <div className='bg-[#fff] w-full px-10 py-5 rounded-xl h-[400px]'>
          <div className='flex justify-between'>
            <div>
              <h2 className='text-[30px] font-bold'>Budget</h2>
            </div>
            <div className='flex mt-1 justify-between'>
              <p className='text-[17px] mt-1'>See Details</p>
              <MdArrowRight className=' text-[35px]' />
            </div>
          </div>
          
        </div>
  )
}

export default Budget
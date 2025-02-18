import React from 'react'
import { MdArrowRight } from 'react-icons/md'

const Transaction = () => {
  return (
    <div className='bg-[#fff] w-full px-10 py-5 rounded-xl  ml-10 h-[200px]'>
          <div className='flex justify-between'>
            <div>
              <h2 className='text-[30px] font-bold'>Transactions</h2>
            </div>
            <div className='flex mt-1 justify-between'>
              <p className='text-[17px] mt-1'>See Details</p>
              <MdArrowRight className=' text-[35px]' />
            </div>
          </div>
        </div>
  )
}

export default Transaction
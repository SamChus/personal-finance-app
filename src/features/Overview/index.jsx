
import React from 'react'
import Pot from '../../components/Pot'
import Transaction from '../../components/Transaction';
import Budget from '../../components/Budget';



const Overview = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8'>
      <div className="columns-1 lg:columns-2 mt-4 gap-12">
        <div className="mb-2 break-inside-avoid">
          <Pot />
        </div>
        <div className="mb-2 break-inside-avoid">
          <Transaction />
        </div>
        <div className="mb-2 break-inside-avoid">
          <Budget />
        </div>
      </div>
    </div>
  );
}

export default Overview
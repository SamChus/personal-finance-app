import React from 'react'
import BudgetBtn from '../../components/BudgetBtn'

const Budgets = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl text-black font-bold'>Budget</h1>
        <BudgetBtn />
      </div>
    </div>
  )
}

export default Budgets
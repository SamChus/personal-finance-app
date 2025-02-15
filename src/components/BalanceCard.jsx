import React from 'react'
import { useLocation } from 'react-router'
import { cn } from '../utils/cn'



const BalanceCard = ({title, amount, active}) => {


  return (
    <div className={cn('w-full p-4 col justify-between ml-1  rounded-[8px]', active ? 'bg-black' : 'bg-beige-100')}>
        <h2 className={cn('text-sm font-semibold flex', active ? 'text-beige-100' : 'text-gray-500')}>{title}</h2>
        <p className={cn('text-2xl font-bold mt-5', active ? 'text-white' : 'text-black')}>${amount}</p>
    </div>
  )
}

export default BalanceCard
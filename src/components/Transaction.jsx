import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import { Link } from 'react-router'
import { CaretRight } from '../assets/icons'

const Transaction = () => {
  return (
    <div className="min-h-[200px] break-inside-avoid rounded-lg bg-white px-5 py-6 md:p-8">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h3 className="text-preset-2 font-bold text-grey-900">
            Transactions
          </h3>
          <Link
            to={'/transactions'}
            className="inline-flex items-center gap-3 text-grey-500"
          >
            See Details
            <CaretRight />
          </Link>
        </div>
        {/* {transactions.length > 0 ? (
          slicedTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex justify-between border-b border-grey-100 pb-5"
            >
              <div className="flex items-center gap-4">
                <span className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={transaction.avatar}
                    alt="transaction image"
                    fill
                    unoptimized
                  />
                </span>
                <h4 className="text-preset-4 font-bold capitalize text-grey-900">
                  {transaction.name}
                </h4>
              </div>
              <div className="flex flex-col gap-2 text-right">
                <p
                  className="text-preset-4 font-bold"
                  style={{
                    color: transaction.amount < 0 ? '#201F24' : '#277C78',
                  }}
                >
                  {transaction.amount < 0 ? '-' : '+'}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </p>
                <p className="text-preset-5 font-normal text-grey-500">
                  {format(new Date(transaction.date), 'dd MMM yyyy')}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-preset-4 text-grey-300">No Data Provided</p>
        )} */}
      </div>
    </div>
  )
}

export default Transaction
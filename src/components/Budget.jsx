import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import { Link } from 'react-router'
import { CaretRight } from '../assets/icons'

const Budget = () => {

  const chartData = [
    {
      category: 'Groceries',
      totalSpent: -100,
      fill: '#FFC107',
    },
    {
      category: 'Transportation',
      totalSpent: -50,
      fill: '#9C27B0',
    },
    {
      category: 'Entertainment',
      totalSpent: -150,
      fill: '#3F51B5',
    },
    {
      category: 'Health',
      totalSpent: -200,
      fill: '#4CAF50',
    },
    {
      category: 'Others',
      totalSpent: -50,
      fill: '#FF5722',
    },
  ]

  const slicedChartData = chartData.slice(0, 3)
  return (
    <div className="min-h-[358px] w-full break-inside-avoid rounded-lg bg-white px-5 py-6 md:p-8">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h3 className="text-preset-2 font-bold text-grey-900">Budgets</h3>
          <Link
            to={'/budgets'}
            className="inline-flex items-center gap-3 text-grey-500"
          >
            See Details
            <CaretRight />
          </Link>
        </div>
        {/* <div className="flex flex-col gap-4 md:flex-row">
          {chartData.length > 0 ? (
            // <Chart chartData={chartData} />
            <p>Chart</p>
          ) : (
            <p className="text-preset-4 text-grey-300">No Data Provided.</p>
          )}
          <div className="flex flex-col gap-4 lg:w-[98px]">
            {slicedChartData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-start pl-4`}
              >
                <span
                  className="absolute bottom-0 left-0 top-0 h-full w-1 rounded-full"
                  style={{ backgroundColor: item.fill }}
                />

                <h4 className="text-preset-4 truncate font-normal text-grey-500">
                  {item.category}
                </h4>
                <p className="text-preset-5 font-bold text-grey-900">
                  ${Math.abs(item.totalSpent)?.toFixed(2) ?? 'N/A'}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Budget
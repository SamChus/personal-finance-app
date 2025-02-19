import React from 'react'
import { MdArrowRight } from "react-icons/md";
import { TbReceiptDollar } from "react-icons/tb";
import { JarLight } from '../assets/icons';
import { Link } from 'react-router';

const Pot = () => {
  const totalSaved = 0; // Replace with actual total saved value
  const slicedPots = []; // Replace with actual pots data

  return (
    <div className="w-full break-inside-avoid rounded-lg bg-white px-5 py-6 md:p-8">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h3 className="text-preset-2 font-bold text-grey-900">Pots</h3>
          <Link
            to={'/pots'}
            className="inline-flex items-center gap-3 text-grey-500"
          >
            See Details
            <MdArrowRight />
          </Link>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="rounded-lg bg-beige-100 p-4 md:flex-1">
            <div className="flex items-center gap-4">
              <JarLight className="fill-transparent text-secondary-green" />
              <div className="flex flex-col gap-[11px]">
                <p className="text-preset-4 font-normal text-grey-500">Pots</p>
                <p className="text-preset-1 font-bold text-grey-900">
                  ${totalSaved}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-0 gap-y-4 md:flex-1">
            {slicedPots.map((pot) => (
              <div key={pot.id} className="relative w-[49%] pl-5">
                <span className="absolute bottom-0 left-0 top-0 h-full w-1 rounded-[8px] bg-red-800" />
                <div className="flex flex-col gap-1">
                  <p className="text-preset-5 line-clamp-1 font-normal text-grey-500">
                    {pot.name}
                  </p>
                  <p className="text-preset-4 font-bold text-grey-900">
                    ${pot.total}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pot
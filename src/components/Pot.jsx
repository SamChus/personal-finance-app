import React from 'react'
import { MdArrowRight } from "react-icons/md";
import { TbReceiptDollar } from "react-icons/tb";
import { JarLight } from '../assets/icons';

const Pot = () => {
  return (
    <div className="bg-[#fff] w-full px-10 py-5 rounded-xl ml-10 h-[200px]">
      <div className="flex justify-between">
        <div>
          <h2 className="text-[30px] font-bold">Pots</h2>
        </div>
        <div className="flex mt-1 justify-between">
          <p className="text-[17px] mt-1">See Details</p>
          <MdArrowRight className=" text-[35px]" />
        </div>
      </div>
      <div className="bg-beige-100 flex px-3 py- rounded-xl w-[60%]">       
          <JarLight className="h-[100px]" />
        <div className='ml-5 mt-3'>
          <h2>Pots</h2>
          <h2 className="text-[30px] font-bold">$0</h2>
        </div>
      </div>
    </div>
  );
}

export default Pot
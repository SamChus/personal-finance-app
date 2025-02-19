import React from "react";
import Pot from "../../components/Pot";
import Transaction from "../../components/Transaction";
import Budget from "../../components/Budget";
import BalanceCard from "../../components/BalanceCard";

const Overview = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
        <BalanceCard title={"Current Balance"} amount={"0.00"} active={true} />
        <BalanceCard title={"Current Balance"} amount={"0.00"} />
        <BalanceCard title={"Current Balance"} amount={"0.00"} />
      </div>
      <div>
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
    </div>
  );
};

export default Overview;

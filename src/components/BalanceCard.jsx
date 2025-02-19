import React from "react";
import { cn } from "../utils/cn";

const BalanceCard = ({ title, amount, active }) => {
  return (
    <div className={cn("w-full rounded-lg p-5 md:p-6", active ? "bg-black" : "bg-white")}>
      <div className="flex flex-col gap-3">
        <p className={cn("text-preset-4 font-normal", active ? "text-white" : "text-black")}>
          {title}
        </p>
        <h4 className={cn("text-preset-1 font-bold", active ? "text-white" : "text-black")}>
          ${amount}
        </h4>
      </div>
    </div>
  );
};

export default BalanceCard;

import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const StatCard = ({ title, value, change, color, icon, price, bgColor }) => (
  <div className="p-4 bg-white shadow rounded-lg min-w-[250px] h-[150px] flex flex-col justify-between">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between">
        {icon && <div className={`mr-2 text-white ${bgColor} rounded-full p-2`}>{icon}</div>}
        <div>
          <h3 className="text-xs text-gray-800">{title}</h3>
          <h3 className="text-xs text-gray-400">{price}</h3>
        </div>
      </div>
      <span><BsThreeDotsVertical className="ml-4" /></span>
    </div>
    <span className={`text-lg font-normal `}>{value}</span>
    <hr className="m-1" />
    <div className="text-xs mt-2">
      Equity Breach Level <span className={`${color}`}>$12,900.00</span>
    </div>
  </div> 
);

export default StatCard;

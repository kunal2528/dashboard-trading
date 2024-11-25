import React from "react";

const StatsCard = ({ title, value, percentage, icon, bgColor, textColor }) => {
  return (
    <div className="flex flex-col items-start justify-between p-4 rounded-lg shadow-md bg-white">
      <div className="flex items-center">
        <div className={`p-2 rounded-full ${bgColor}`}>{icon}</div>
        <h4 className="ml-2 font-medium text-gray-600">{title}</h4>
      </div>
      <div className="flex justify-between items-center w-full mt-2">
        <span className={`text-xl font-bold ${textColor}`}>{value}</span>
        {percentage && (
          <div
            className={`text-sm px-2 py-1 rounded-md flex items-center ${
              percentage > 0 ? "bg-blue-100 text-blue-500" : "bg-red-100 text-red-500"
            }`}
          >
            {percentage > 0 ? "↑" : "↓"} {Math.abs(percentage)}%
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;

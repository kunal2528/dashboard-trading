import React from "react";
import StatsCard from "./StatsCard";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";

const StatsSection = () => {
  const statsData = [
    {
      title: "Average Win",
      value: "$642.00",
      percentage: 7,
      icon: <BsArrowUpRight className="text-blue-500" />,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "Average Loss",
      value: "$0.00",
      percentage: 0,
      icon: <BsArrowDownRight className="text-red-500" />,
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      title: "Profit Factor",
      value: "6.4",
      icon: <BsArrowUpRight className="text-blue-500" />,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "Best Trade",
      value: "$8,908.99",
      icon: <BsArrowUpRight className="text-gray-500" />,
      bgColor: "bg-gray-100",
      textColor: "text-gray-700",
    },
    {
      title: "Win Ratio",
      value: "-$4,800.90",
      icon: <BsArrowDownRight className="text-green-500" />,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      title: "Risk Reward",
      value: "$3,490.00",
      icon: <BsArrowUpRight className="text-orange-500" />,
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {statsData.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsSection;

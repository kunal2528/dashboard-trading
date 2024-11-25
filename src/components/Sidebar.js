import React, { useState } from "react";
import { FaHome, FaChartBar, FaTable, FaUser, FaAngleDown, FaRegNewspaper, FaCalculator } from "react-icons/fa";
import { TbCircles } from "react-icons/tb";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { CiCalculator1, CiCalendarDate, CiViewTable } from "react-icons/ci";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } p-4 h-screen bg-white text-gray-700 transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold flex items-center">
          <TbCircles className="mr-2 text-blue-700" />
          {!isCollapsed && <span>Trading</span>}
        </div>
        <button
          className="p-1 rounded-full hover:bg-gray-200"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <IoChevronForward className="text-gray-600" />
          ) : (
            <IoChevronBack className="text-gray-600" />
          )}
        </button>
      </div>

      <h3
        className={`pt-3 text-gray-400 text-sm ${
          isCollapsed && "hidden"
        }`}
      >
        MENU
      </h3>
      <ul className="text-gray-600">
        <li
          className="flex items-center p-2 hover:bg-blue-800 hover:text-white rounded-lg"
          title="Accounts Overview"
        >
          <FaHome className="mr-2" />
          {!isCollapsed && <span>Accounts Overview</span>}
        </li>
        <li
          className="flex items-center p-2 hover:bg-blue-800 hover:text-white rounded-lg"
          title="Payouts"
        >
          <FaChartBar className="mr-2" />
          {!isCollapsed && <span>Payouts</span>}
        </li>
        <li
          className="flex items-center p-2 hover:bg-blue-800 hover:text-white rounded-lg"
          title="Certificates"
        >
          <FaTable className="mr-2" />
          {!isCollapsed && <span>Certificates</span>}
        </li>
        <li
          className="flex items-center p-2 hover:bg-blue-800 hover:text-white rounded-lg"
          title="Leaderboard"
        >
          <FaTable className="mr-2" />
          {!isCollapsed && <span>Leaderboard</span>}
        </li>
        <li
          className="flex items-center p-2 hover:bg-blue-800 hover:text-white rounded-lg"
          title="Order List"
        >
          <FaUser className="mr-2" />
          {!isCollapsed && <span>Order List</span>}
        </li>
      </ul>

      <h3
        className={`pt-3 text-gray-400 text-sm ${
          isCollapsed && "hidden"
        }`}
      >
        APPS
      </h3>
      <ul className="text-gray-600">
        <li
          className="flex items-center p-2 hover:bg-blue-800 hover:text-white rounded-lg"
          title="News Feeds"
        >
          <FaRegNewspaper className="mr-2" />
          {!isCollapsed && <span>News Feeds</span>}
        </li>
        <li
          className="flex items-center p-2 hover:bg-blue-800 hover:text-white rounded-lg"
          title="Economic Calendar"
        >
          <CiCalendarDate className="mr-2" />
          {!isCollapsed && <span>Economic Calendar</span>}
        </li>
        <li
          className="flex items-center p-2 hover:bg-blue-800 hover:text-white rounded-lg"
          title="WebTrader Platform"
        >
          <CiViewTable className="mr-2" />
          {!isCollapsed && <span>WebTrader Platform</span>}
        </li>
        <li
          className="flex items-center p-2 hover:bg-blue-800 hover:text-white rounded-lg"
          title="Margin Calculator"
        >
          <CiCalculator1 className="mr-2" />
          {!isCollapsed && <span>Margin Calculator</span>}
        </li>
        <li
          className="flex items-center p-2 hover:bg-blue-800 hover:text-white rounded-lg"
          title="Profit Calculator"
        >
          <FaCalculator className="mr-2" />
          {!isCollapsed && <span>Profit Calculator</span>}
        </li>
      </ul>
      {!isCollapsed &&<div className="flex flex-col p-2 bg-gray-200 rounded-lg text-sm mt-2">
        <div className="flex justify-between my-1 bg-white p-1 rounded">
          <span className="text-gray-400">Account </span>
          <span className="flex justify-between items-center">9999999 <FaAngleDown className="ml-2 cursor-pointer" /> </span>
        </div>
        <div className="flex justify-between my-1 bg-white p-1 rounded">
          <span className="text-gray-400">Status </span>
          <span className="flex justify-between items-center">Active <div className="h-2 w-2 bg-green-500 rounded-full ml-2"></div></span>
        </div>
        <div className="flex justify-between my-1 bg-white p-1 rounded">
          <span className="text-gray-400">Program </span>
          <span className="flex justify-between items-center">$50,000 Evl.</span>
        </div>
      </div>}
      <div className="fixed bottom-2">
        <div className="flex justify-between p-2 items-center text-sm">
          <div className="bg-gray-300 p-2 rounded-full">
            <FaUser />
          </div>
          {!isCollapsed && <div className="flex flex-col ml-2">
            <span>Kunal Mewara</span>
            <span className="text-gray-400">Developer</span>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { FaDollarSign, FaKey, FaShareAlt } from "react-icons/fa";

const Header = ({ username }) => (
  <div className="flex justify-between items-center bg-white p-4">
    <h1 className="text-lg font-bold">Welcome back, {username}!</h1>
    <div className="flex items-center px-4">
      <button className="px-4 py-2 bg-blue-800 text-white rounded mr-3 flex items-center"><FaDollarSign className="mr-2 rounded-full bg-white text-blue-700" /> Request Payout</button>
      <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded flex items-center"><FaShareAlt className="mr-2" /> Share Matrices</button>
      <button className="px-4 py-3 bg-blue-50 text-blue-800 rounded flex items-center mx-3"><FaKey /></button>
    </div>
  </div>
);

export default Header;

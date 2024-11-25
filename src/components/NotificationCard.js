import React from "react";

const NotificationCard = ({ notification }) => (
  <div className="border-b py-2 flex justify-between items-center px-6">
    <span className="text-sm">{notification.time}</span>
    <h4 className="font-medium text-gray-400 bg-gray-100 p-2 rounded-lg text-sm">{notification.type}</h4>
    <p className="text-gray-600 max-w-[250px] line-clamp-1">{notification.message}</p>
  </div>
);

export default NotificationCard;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage, goToPage } from "../redux/notificationPaginationSlice";
import notifications from "../data/notifications";
import NotificationCard from "./NotificationCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Notifications = () => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector((state) => state.notificationPagination);

  const indexOfLastNotification = currentPage * itemsPerPage;
  const indexOfFirstNotification = indexOfLastNotification - itemsPerPage;
  const currentNotifications = notifications.slice(indexOfFirstNotification, indexOfLastNotification);

  const totalPages = Math.ceil(notifications.length / itemsPerPage);
  

  return (
    <div>
      <div className="divide-y">
        {currentNotifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => dispatch(prevPage())}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${currentPage === 1 ? "text-gray-300" : "text-blue-500 "}`}
        >
          <FaAngleLeft />
        </button>
        <div>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => dispatch(goToPage(i + 1))}
              className={`mx-1 px-3 py-1 rounded-lg ${
                currentPage === i + 1 ? "text-blue-500" : "text-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => dispatch(nextPage())}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? "text-gray-300" : "text-blue-500 "}`}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Notifications;

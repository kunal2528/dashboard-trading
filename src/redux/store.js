import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import paginationReducer from "./paginationSlice";
import notificationPaginationReducer from "./notificationPaginationSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    pagination: paginationReducer,
    notificationPagination: notificationPaginationReducer,
  },
});

export default store;

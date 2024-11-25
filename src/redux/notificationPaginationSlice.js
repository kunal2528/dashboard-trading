import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  itemsPerPage: 2,
};

const notificationPaginationSlice = createSlice({
  name: "notificationPagination",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    prevPage: (state) => {
      if (state.currentPage > 1) state.currentPage -= 1;
    },
    goToPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { nextPage, prevPage, goToPage } = notificationPaginationSlice.actions;
export default notificationPaginationSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tooltips: {
    comment: "Comment",
    like: "Like",
    repost: "Repost",
    copy: "Copy",
    share: "Share",
  },
};

const tooltipSlice = createSlice({
  name: "tooltips",
  initialState,
  reducers: {},
});

export const selectTooltips = (state) => state.tooltips.tooltips;

export default tooltipSlice.reducer;

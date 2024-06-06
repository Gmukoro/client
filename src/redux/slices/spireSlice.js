import { createSlice } from "@reduxjs/toolkit";

const spireSlice = createSlice({
  name: "spires",
  initialState: {
    spires: [],
  },
  reducers: {
    setSpires: (state, action) => {
      state.spires = action.payload;
    },
    addSpire: (state, action) => {
      state.spires.push(action.payload);
    },
  },
});

export const { setSpires, addSpire } = spireSlice.actions;
export default spireSlice.reducer;

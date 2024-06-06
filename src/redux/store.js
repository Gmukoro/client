import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import spireReducer from "./slices/spireSlice";
import tooltipReducer from "./slices/tooltipSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    spires: spireReducer,
    tooltips: tooltipReducer,
  },
});

export default store;

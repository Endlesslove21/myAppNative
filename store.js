import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./store/reducers/meals";

export default configureStore({
  reducer: {
    meals: mealsReducer,
  },
});

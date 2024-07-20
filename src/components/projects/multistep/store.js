import { configureStore } from "@reduxjs/toolkit";
import {
  stepReducer,
  footerReducer,
  headerReducer,
  subscriptionReducer,
} from "./features";

export const store = configureStore({
  reducer: {
    step: stepReducer,
    heading: headerReducer,
    footer: footerReducer,
    subscription: subscriptionReducer,
  },
});

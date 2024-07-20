import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Plan, Root, AddOns, Done, Summary } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
import "./multistep.css";
const Multistep = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="plan" element={<Plan />} />
          <Route path="add-ons" element={<AddOns />} />
          <Route path="summary" element={<Summary />} />
          <Route path="done" element={<Done />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default Multistep;

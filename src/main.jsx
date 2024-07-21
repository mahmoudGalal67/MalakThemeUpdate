import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { GeneralContextProvider } from "./components/context/GeneralStyles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>
);

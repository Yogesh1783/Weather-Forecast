import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WeatherApi from "./Components/WeatherApi";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <WeatherApi />
  </StrictMode>
);

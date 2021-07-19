import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes.js";
import MainLayout from '../src/commonComponents/MainLayout/index.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Routes />
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

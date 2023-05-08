import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Helmet>
      <title> Romhen Family Tree </title>
    </Helmet>
    <App />
  </StrictMode>,
  rootElement
);

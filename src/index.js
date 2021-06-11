import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import login from "./login";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <login />
  </StrictMode>,
  rootElement
);

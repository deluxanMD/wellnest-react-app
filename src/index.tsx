import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "store";
import ThemeWrapper from "helpers/theme/theme.wrapper";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeWrapper>
        <CssBaseline />
        <App />
      </ThemeWrapper>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://62ve6y3nszsd.usemoralis.com:2053/server" appId="p9B1Nf4QKwJftEcZPjBVbBYv0Q2ucUCW4aFFAmiV">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
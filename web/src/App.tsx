import React from "react";

import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { CommonStyles } from "./styles/common";

function App() {
  return (
    <>
      <CommonStyles />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import Paperbase from "./Components/Paperbase";

import "./styles.css";

function App() {
  return <Paperbase />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

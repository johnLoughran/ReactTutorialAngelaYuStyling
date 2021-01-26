import React from "react";
import ReactDOM from "react-dom";
import { add, subtract1from2, divide } from "./calculator.js";

ReactDOM.render(
  <div>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{subtract1from2(7, 2)}</li>
      <li>{divide(1, 71)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);

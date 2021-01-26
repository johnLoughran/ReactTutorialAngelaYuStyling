//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
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

// ReactDOM.render(
//   <div>
//     <App />
//   </div>,
//   document.getElementById("root")
// );

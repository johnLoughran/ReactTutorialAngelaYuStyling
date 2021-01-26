//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const timeOfDayStyle = {
  color: "grey"
};

let timeOfDay = "";

const d = new Date();
let dateStrDate = d.getDate();
let dateStrMonth = d.getMonth();
let hour = d.getHours();
hour = 24;

if (hour < 12) {
  timeOfDay = "Morning";
  timeOfDayStyle.color = "pink";
} else if (hour >= 12 && hour < 18) {
  timeOfDay = "Afternoon";
  timeOfDayStyle.color = "darkgreen";
} else if (hour > 21) {
  timeOfDay = "Night";
  timeOfDayStyle.color = "darkblue";
} else {
  timeOfDay = "Evening";
  timeOfDayStyle.color = "lightblue";
}

//dateStrDate = 12;
//dateStrMonth = 1;
if (dateStrDate === 12 && dateStrMonth === 1) {
  timeOfDay = "New Year";
  timeOfDayStyle.color = "red";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={timeOfDayStyle}>
      Good {timeOfDay}, {dateStrDate}/{dateStrMonth + 1}
    </h1>
  </div>,
  document.getElementById("root")
);

import React from "react";

function Heading() {
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

  return (
    <h1 className="heading" style={timeOfDayStyle}>
      Good {timeOfDay}, {dateStrDate}/{dateStrMonth + 1}
    </h1>
  );
}

export default Heading;

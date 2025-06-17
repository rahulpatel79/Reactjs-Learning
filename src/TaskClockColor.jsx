import React, { useEffect, useState } from "react";
import TaskClock from "./TaskClock";

function TaskClockColor() {
  const [color, setColor] = useState("black");

  return (
    <div >
      <h1>Digital Clock in React Js</h1>
 
      <select
        onChange={(event) => setColor(event.target.value)}
        style={{
          padding: "20px",
          fontWeight: "600",
          fontSize: "20px",
          borderRadius: "20px",display: "flex"
        }}
      >
        <option value={"black"}>Black</option>
        <option value={"green"}>Green</option>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
      </select>

      <TaskClock color={color} />
    </div>
  );
}

export default TaskClockColor;

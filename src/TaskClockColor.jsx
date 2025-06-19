import React, { useEffect, useState } from "react";
import TaskClock from "./TaskClock";
import InlineCssInReactJs from "./InlineCssInReactJs";

function TaskClockColor() {
  const [color, setColor] = useState("black");

  return (
    <>
      {/* <h1>Digital Clock in React Js</h1> */}
      <div style={{display:"flex", width:"100%",height:"46px"}}>
      
      <select
        onChange={(event) => setColor(event.target.value)}
        style={{
          padding: "5px",
          fontWeight: "600",
          fontSize: "15px",
          borderRadius: "20px",display: "flex",width:"8%"
        }}
      >
        <option value={"black"}>Black</option>
        <option value={"green"}>Green</option>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
      </select>

      <TaskClock color={color} />

</div>
 
    </>
  );
}

export default TaskClockColor;

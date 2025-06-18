import React, { useEffect, useState } from "react";

function TaskClock({color}) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
//   console.log(color);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1
        style={{
          color: color,
          backgroundColor: "orange",
          borderRadius: "50px",
          padding: "10px",
          width:"12%",
          fontSize:"16px",
        }}
      >
        {time}
      </h1>
    </div>
  );
}

export default TaskClock;

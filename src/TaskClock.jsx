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
      <div
        style={{
          color: color,
          backgroundColor: "orange",
          borderRadius: "50px",
          padding: "8px",
          width:"100%",
          fontSize:"20px",
          marginLeft:"20px",
          fontWeight:"700",
          textAlign:"center"
          
        }}
      >
        {time}
      </div>
    </div>
  );
}

export default TaskClock;

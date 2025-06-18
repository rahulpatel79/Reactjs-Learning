import React, { useEffect } from "react";

function UseEffectByComponent({ data, counter }) {
  function handleCount() {
    console.log("Hello Handle Counter.");
  }

  //   handleCount(); // yha pe jitni bar bhi counter update hoga to function kam kr rha he
  // ise bachne ke liye useEffect ka use krte he taki hame jb chalana ho tabhi chale ske
  
  useEffect(() => {
    // ek hi function me multiple useEffect use kr skte he.
    handleData();
  },[]);
  useEffect(() => {
    handleCount();
  }, [counter]);

  function handleData() {
    console.log("Hello Handle Data.");
  }

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <h3>Data: {data}</h3>
    </div>
  );
}

export default UseEffectByComponent;

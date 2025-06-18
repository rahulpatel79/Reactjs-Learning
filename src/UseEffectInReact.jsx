import React, { useEffect, useState } from "react";
import UseEffectByComponent from "./UseEffectByComponent";

function UseEffectInReact() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);


  function callOnes() {
    console.log("hello call Ones function");
  }

  function dataFunction(){
    console.log("Data Funcation : " , data) 
  }


  useEffect(() => callOnes(), [data]); // yha sirf callOnes ek hi bar chalega,,,,, or yaha pe data mila he as a argumnet to only ye data ke click pe hi chalega baki nhi chalge kabhi.

  // callOnes(); // ye funcation bar bar call ho rha he jab bhi ham koi activity karte he jese counter pe click krte he or iski ko rekne ke liye
  // useEffect ka use krte he .

  return (
    <div>
      <h1>UseEffect Hook In React</h1>

      <button onClick={() => setCounter(counter + 1)}>
        Counter : {counter}
      </button>
      <button onClick={() => setData(data + 1)}>
        Data : {data} 
        {/* man lo ki data pe state ko update krna he but counter pe nhi to ham kya karenge ki useEffect ke array me pass as a parameter pass kr denge. */}
      </button>
      {/* jitni bar ye btn pe click karenge utin bar callOnes() function chal rha he or isi ko rokne ke liye ham useEffect ka use krte he kyuki useEffect only one time he chalta he */}
       
      
    
    </div>


  );
}

export default UseEffectInReact;

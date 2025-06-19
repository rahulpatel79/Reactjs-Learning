import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function UseRefInReact() {const [count, setCount] = useState(0);
  const previousCount = useRef(null);

  useEffect(() => {
    previousCount.current = count; // naya value store karo
  }, [count]);

  return (
    <>
      <h1>Current: {count}</h1>
      <h2>Previous: {previousCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
  
}

export default UseRefInReact

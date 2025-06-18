import React from 'react'
import { useState } from 'react'
import UseEffectByComponent from './UseEffectByComponent';

function UseEffectInReact2() {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(0);

   return (
       <div>
        <h1>Use Effect hook with Componant</h1>
      <button onClick={()=>setCounter(counter + 1)}>Counter : {counter}</button>
      <button onClick={()=>setData(data + 1)}>Data : {data}</button>
      <UseEffectByComponent data={data} counter={counter} />
    </div>

  )
}

export default UseEffectInReact2

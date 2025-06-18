import React from 'react'
import { useState } from 'react'
import UseEffectByComponent from './UseEffectByComponent';

function UseEffectInReact2() {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(0);
    const [toggle, setToggle] = useState(true);

   return (
    <div>
        <h1>Use Effect hook with Componant</h1>
        {
            toggle ? <h1>Hello Toggle</h1> : null
        }
      <button onClick={()=>setCounter(counter + 1)}>Counter : {counter}</button>
      <button onClick={()=>setData(data + 1)}>Data : {data}</button>
      <button onClick={()=>(setToggle(!toggle))} >Toggle</button>

      <UseEffectByComponent data={data} counter={counter} toggle={toggle} />
      
    </div>

  )
}

export default UseEffectInReact2

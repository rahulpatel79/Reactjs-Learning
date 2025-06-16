import { useState } from "react"

const Counter=()=>{
    const [counter, setCounter] = useState(0);
    const [rcounter, setRCounter] = useState(10);
    return (
        <>
        <h1>Counter : {counter}</h1>
        <button onClick={()=>setCounter(counter + 1)}>Update Counter</button>
        <button onClick={()=>setCounter(counter - 1)}>Update Counter</button>
<h1>Counter : {rcounter}</h1>
        <button onClick={()=>setRCounter(rcounter - 1)}>Update R Counter</button>
        </>
    )
}

export default Counter

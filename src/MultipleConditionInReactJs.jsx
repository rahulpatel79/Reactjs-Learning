import { useState } from "react"

function MultipleConditionInReactJs(){
    const [count, setCount] = useState(0);
    return (<>
    <h1>Multiple Condition In React Js</h1>

<h2>{count}</h2>
    <button onClick={()=>setCount(count + 1)}>Counter</button>
    {
        count ==0 ? <h1>Condition 0 </h1>
        : count ==1 ? <h1>Condition 1 </h1>
        : count ==2 ? <h1>Condition 2</h1>
        : count ==3 ? <h1>Condition 3 </h1>
        : count ==4 ? <h1>Condition 4 </h1>
        : <h3>Other Condition </h3>
    }

     
    </>)
}
export default MultipleConditionInReactJs
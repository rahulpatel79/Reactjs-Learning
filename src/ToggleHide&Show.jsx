import React from "react";
import { useState } from "react";

function ToggleHideAndshow(){
    const [disply, setDisplay] = useState(true); 
return (<>
            <h1>User Name is : { 
    disply ? <span>Rahul Patel</span>:<span>User Not Found</span> // it is Conditional Rendering
    
}</h1> 

<button onClick={()=>setDisplay(!disply)}>Toogle</button>
    
</>)
}
export default ToggleHideAndshow;
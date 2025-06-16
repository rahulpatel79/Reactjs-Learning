import React from "react"
import { useState } from "react"

function UseStateComponent() {
    const [fruit, setFruit] = useState("Apple");
 
    
    const handleFruitName=()=>{
        setFruit("Banana");
    }

    return (<>
    <h1>Use State Component</h1>
    <h1>Change Fruit Name : { fruit}</h1>
    <button onClick={handleFruitName}>Change Fruit Name</button>
    
    </>)
}

export default UseStateComponent;
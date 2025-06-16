import React from "react"

function ClickEventAndFuncationCall (){

    function callFun(){
        return alert("Call Funcation");
    }

    const fruit = (name)=>{ // it is arrow funcation 
        return alert(name);
    }

    return <>
    <h1>Click Event And FuncationCall</h1>

    <button onClick={()=>callFun()}>Click Me 1 </button>
    <button onClick={()=>fruit("rahul")}>Click Me 2 </button>

    </>
}

export default ClickEventAndFuncationCall



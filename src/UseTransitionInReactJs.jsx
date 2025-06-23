import React, { useTransition } from 'react'

function UseTransitionInReactJs() {
// jab hamere pass form available no ho or hame page ko load krnwate time kuch dikhana ho to ham useTransition ka use krte he .. 
    const [pending, StartTransition] = useTransition();

    const HandleBtn = () =>{

        StartTransition(async()=>{
            await new Promise((res)=>setTimeout(res, 2000))
            console.log("Submiting")
        })
    }

  return (
    <div>
        {
            pending ? <img style={{height:"100px", width: "100px"}} src='./public/imges/loading.gif' /> : null
        }
        <button disabled={pending} onClick={HandleBtn}>Sumit</button>
    </div>
  )
}

export default UseTransitionInReactJs

import React, {  useState } from 'react'
import { Button } from 'react-bootstrap';


function InlineCssInReactJs({testData}) {

      console.log("data is " , testData);

const [flex, setFlex] = useState(true);

  const [mainDiv, setMainDiv] = useState(
{
  
    border: "1px solid #ff000047",
    width: "215px",
    boxShadow: "1px 2px 9px -2px #ff000094",
    borderRadius: "12px",
    padding: "4px",
    textAlign:"center",
    margin:"10px",
  }
  )

  const updateTheam = (bgColor ,textColor ) =>{
setMainDiv({...mainDiv, backgroundColor:bgColor,color:textColor})
  }

  return (
    <>
      <div style={{color:"blue", backgroundColor:"Orange", fontSize:"20px", fontWeight:"600",
         borderRadius:"20px", marginTop:"20px", textAlign:"center"}}>React In Inline Css</div>
         <h1>Hello</h1>
         <div style={{display : "flex", gap:"10px"}}> 
            <Button onClick={()=>updateTheam('orange', 'white')}>Theam Change</Button>
            <Button onClick={()=>updateTheam()}>Reset</Button>
            <Button onClick={()=>setFlex(!flex)}> {flex ? 'Block' : 'Flex'}</Button>
         </div>
        <div style={{display: flex ? 'flex' : 'block',flexWrap:"wrap"}}>
           {Array.isArray(testData) && testData.length > 0 ? (
  testData.map((info, index) => (
    <div key={index} style={mainDiv}>
      <img src={info.img} style={{width:"205px"}} alt={info.name} />
      <h4>{info.name}</h4>
      <h5>{info.position}</h5>
    </div>
  ))
) : (
  <p>Loading or no data available...</p>
)}
     </div>

    </>
  )
}

export default InlineCssInReactJs

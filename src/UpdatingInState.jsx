import React, { useState } from 'react'

function UpdatingInState() {

    const [data, setData] = useState({
        name : "Rahul Patel",
        address : {
            city : "Indore",
            country : "India",
        }
    })

const handleName = (val) =>{
    data.name  = val
 console.log(data);
    setData({...data})
}

const handleCity = (ci) =>{
    data.address.city = ci;
    //  console.log(data)
    setData({...data,address:{...data.address,ci}})
}


  return (
    <div>
      <input type="text"   onChange={(event)=>handleName(event.target.value)} placeholder='Enter Name' />
      <br /><br />
      <input type="text" onChange={(e) => handleCity(e.target.value)} placeholder='City Name' />

      <h2>{data.name}</h2>
      <h2>{data.address.city}</h2>
      <h2>{data.address.country}</h2>
      
    </div>
  )
}

export default UpdatingInState

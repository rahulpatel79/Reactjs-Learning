import React from 'react'

function ReuseUserComponent({data}) {
  return ( <>
      
    <div style={{ width:"400px", borderRadius:"20px", "border": "2px solid red", margin: "30px", display: "flex", alignItems: "flex-start", textAlign: "center", flexDirection: "column", padding: "25px"}} >
        <h3>Name :{data.name}</h3>
        <h3>Age :{data.age}</h3>
        <h3>Email :{data.email}</h3>
        <h3>Number :{data.number}</h3>
    </div>
    </>
  )
}

export default ReuseUserComponent

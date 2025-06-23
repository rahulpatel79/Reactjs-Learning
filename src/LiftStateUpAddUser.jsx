import React from 'react'
 
function LiftStateUpAddUser({setUser}) {
    
  return (
    <div>
      <h2>Lift State Up User </h2>
      <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder='Add User' />
        <hr />
    </div>
  )
}

export default LiftStateUpAddUser

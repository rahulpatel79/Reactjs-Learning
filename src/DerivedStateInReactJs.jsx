import React, { useState } from 'react'

function DerivedStateInReactJs() {
    const [users, setUsers] = useState([]); // yaha pe ek array liya he jisme users ki values add hogi array me 
    const [user, setUser] = useState(''); // yaha pe '' liya he jisme single user add honge 

    const handleAddUsers = () =>{ // ye handleAddUsers function he jisme Users ke ander data ko dalenge 
        setUsers([...users, user])
        setUser('');
    }

    console.log(users); // isse console karwa rhe he users ko 

    const totalUsers = users.length; // isse ham lenght nikal skte he .. ye tino ko derived state kehte he 
    const lastUser = users[users.length-1]; // isse ham last user nikal skte he array se  ye tino ko derived state kehte he 
    const unique = [...new Set(users)].length; // isse ham unique user nikal skte he array se or ye tino ko derived state kehte he 

  return (
    <div>
        <h4>Total User : {totalUsers}</h4>
        <h4>Last User : {lastUser}</h4>
        <h4>Unique User : {unique}</h4>

      <input className='ms-2 rounded-2 p-2' value={user} type="text"  onChange={(event)=>setUser(event.target.value)} placeholder='Add New User' /> 
      <button className='ms-2 rounded-2' onClick={handleAddUsers}>Add User</button>

      {
        users.map((item, index)=>(
            <h4 className='text-start ms-3 mt-3' key={index}>{item}</h4>
        ))
      }
    </div>
  )
}

export default DerivedStateInReactJs

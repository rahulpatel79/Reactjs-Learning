import React, { useState } from 'react'

function ControllerComponentForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  return (
    <div>
        <h1>Controller Components</h1>
      <form  >
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter Name' />
        <br /><br />
        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='Enter Password'/>
        <br /><br />
        <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter email' />
        <br /><br />
        <button>Submit</button>
        <br /><br />
        <button onClick={()=>{setEmail(''); setName(''); setPassword}}>Clear</button>
      </form>

      <h2>{name}</h2>
      <h2>{password}</h2>
      <h2>{email}</h2>
    </div>
  )
}

export default ControllerComponentForm

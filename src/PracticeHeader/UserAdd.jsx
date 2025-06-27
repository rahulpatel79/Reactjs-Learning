import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";

const UserAdd = () => {
const [username, setUsername] = useState(''); 
const [email, setEmail] = useState(''); 
const [phone, setPhone] = useState(''); 
const [password, setPassword] = useState(''); 


const createUser = async() =>{
    console.log(name, age, email);
    const url = "192.168.1.4:2003/api/user/register";
    let response = await fetch(url,{
        method:'Post',
        body:JSON.stringify({name,email,age})
    });
    response = await response.json();
    console.log(response)
}
 

return (
    <div>
      <div className=" gap-4 text-center ">
      <h1>Add User</h1>
        <div className=" m-4">
          <input className="p-2 border-2 border-slate-950 rounded-md" type="text" placeholder="Enter Username"
          onChange={(event)=>setName(event.target.value)} />
        </div>
        <div className=" m-4">
          <input className="p-2 border-2 border-slate-950 rounded-md" type="password" placeholder="Enter Password"
          onChange={(event)=>setPassword(event.target.value)} />
        </div>
        <div className=" m-4">
          <input className="p-2 border-2 border-slate-950 rounded-md" type="email" placeholder="Enter Email"
          onChange={(event)=>setEmail(event.target.value)} />
        </div>
        <div className=" m-4">
          <input className="p-2 border-2 border-slate-950 rounded-md" type="text" placeholder="Enter Role"
          onChange={(event)=>setRole(event.target.value)} />
        </div>
        <div className=" m-4">
          <Button className="fw-bold p-2" onClick={createUser}>Add User</Button>
        </div>
      </div>
    </div>
  );
};

export default UserAdd;

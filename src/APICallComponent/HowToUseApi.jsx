import React, { useState } from 'react'
import { useEffect } from 'react';

const HowToUseApi = () => {

    const [usersData, setUsersData] = useState([]);

    useEffect(()=>{
GetUsersData();
    },[]) // single call 

    const GetUsersData = async() =>{
        const url = "https://dummyjson.com/users";
        let response = await fetch(url); // yha pe fetch ki jagah pe put update get kuch bhi ho skta he abhi ham data get kr rhe he isiliye yhi lagaya he.. hmne
        response = await response.json();
        setUsersData(response.users) // yha pe bohot sara data tha hame only users chahiye tha .. to . lgake user data get kr liya 
    }

console.log(usersData)
  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default HowToUseApi

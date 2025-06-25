 import React from "react";
import { Link, useParams } from "react-router";
 
 const UserDetailed = () => {
 const paramData = useParams(); // it is return the id
console.log(paramData.id);
   return (
     <div>
       <h1>User Details</h1>
       <h2>User Id is: {paramData.id}</h2>
       <h3><Link to='/userlist'>Back</Link></h3>
     </div>
   );
 };
 
 export default UserDetailed;
 
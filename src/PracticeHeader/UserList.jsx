import React from "react";
import { Link } from "react-router";

const UserList = () => {
  const users = [
    { id: 1, name: "Rahul Patel" },
    { id: 2, name: "Anjali Sharma" },
    { id: 3, name: "Amit Verma" },
    { id: 4, name: "Sneha Joshi" },
    { id: 5, name: "Rohit Mehra" },
    { id: 6, name: "Priya Singh" },
    { id: 7, name: "Karan Kapoor" },
    { id: 8, name: "Neha Dubey" },
    { id: 9, name: "Vikas Rana" },
    { id: 10, name: "Pooja Saini" },
  ];

  return (
    <div>
      <h1>User Data</h1>
      {users.map((item, index) => (
        
             <h3 className="mt-2" key={index}> <Link to={"/users/" + item.id} > {item.name} </Link></h3>
           
      ))}
    </div>
  );
};

export default UserList;

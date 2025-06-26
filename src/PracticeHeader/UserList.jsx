import React, { useState } from "react";
import { Link } from "react-router";

const UserList = () => {

  const [loading, setLoading] = useState(false);

  const users = [
    { id: 1, image: "https://dummyjson.com/icon/emilys/128", name: "Rahul Patel", age:23, },
    { id: 2, image: "https://dummyjson.com/icon/emilys/128", name: "Anjali Sharma", age:23, },
    { id: 3, image: "https://dummyjson.com/icon/emilys/128", name: "Amit Verma", age:23, },
    { id: 4, image: "https://dummyjson.com/icon/emilys/128", name: "Sneha Joshi", age:23, },
    { id: 5, image: "https://dummyjson.com/icon/emilys/128", name: "Rohit Mehra", age:23, },
    { id: 6, image: "https://dummyjson.com/icon/emilys/128", name: "Priya Singh" , age:23,},
    { id: 7, image: "https://dummyjson.com/icon/emilys/128", name: "Karan Kapoor", age:23, },
    { id: 8, image: "https://dummyjson.com/icon/emilys/128", name: "Neha Dubey", age:23, },
    { id: 9, image: "https://dummyjson.com/icon/emilys/128", name: "Vikas Rana", age:23, },
    { id: 10, image : "https://dummyjson.com/icon/emilys/128", name: "Pooja Saini" , age:23,},
  ];

  return (
    <div>
      <h1>User List Data</h1>
   {/* Header Row */}
        <ul className="grid grid-cols-5 gap-2 bg-[#dea30d] p-2 font-bold text-lg text-left">
          <li>Serial No.</li>
          <li>Image</li>
          <li>Name</li>
          <li>Age</li>
          <li>email</li>
        </ul>

      {!loading ? (
          users &&
          users.map((user, index) => (
            <ul className="grid grid-cols-5 gap-2 border-b p-2 text-left" key={user.id} >
              <li>{index + 1}</li>
              <li>
                {" "}
                <img
                  className="h-[90px] w-[90px] rounded-[60px] shadow-[0px_1px_7px_4px_#c96722de] p-0 m-0"
                  src={user.image}
                  alt="img"
                />{" "}
              </li>
              <li>{user.name}</li>
              <li>{user.age}</li>
              <li>{user.email}</li>
            </ul>
          ))
        ) : (
           <img src="/./public/imges/loading.gif" alt="" />
        )}
    </div>
  );
};

export default UserList;

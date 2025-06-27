import React, { useState } from "react";
import { useEffect } from "react";

const HowToUseApi = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GetUsersData();
  }, []); // single call

  const GetUsersData = async () => {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url); // yha pe fetch ki jagah pe put update get kuch bhi ho skta he abhi ham data get kr rhe he isiliye yhi lagaya he.. hmne
    response = await response.json();
    setUsersData(response.users); // yha pe bohot sara data tha hame only users chahiye tha .. to . lgake user data get kr liya
        setLoading(false);
};

  return (
    <div>
      <div>
        <h1>How to Use API and get data fetch method</h1>

        {/* Header Row */}
        <ul className="grid grid-cols-5 gap-2 bg-[#dea30d] p-2 font-bold text-lg text-left">
          <li>Serial No.</li>
          <li>Image</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Age</li>
        </ul>

        {/* Data Rows */}

        {!loading ? (
          usersData &&
          usersData.map((user, index) => (
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
              <li>{user.firstName}</li>
              <li>{user.lastName}</li>
              <li>{user.age}</li>
            </ul>
          ))
        ) : (
           <img src="/./public/imges/loading.gif" alt="" />
        )}
      </div>
    </div>
  );
};

export default HowToUseApi;

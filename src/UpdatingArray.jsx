import React, { useState } from "react";

const UpdatingArray = () => {
    // This is for Array
    const [aruser, setArUser] = useState(["rahul", "patel", "raja"]);
    const handleUser = (name) => { // this funcation is update the last value
        aruser[aruser.length - 1] = name; // get the last value
        // console.log(aruser)
        setArUser([...aruser]); // this is set the last value
    };

    // this is Array but in Object Form
    const [data, setData] = useState([
        { name: "rahul", age: "23" },
        { name: "raja", age: "21" },
        { name: "yogesh", age: "24" },
    ]);

    const handleAge = (age) =>{ // 
         data[data.length-1].age = age; // get the last user data in age
         setData([...data]); // this is set the last value of user age 
    }

    return (
        <div>
            <input
                type="text" onChange={(event) => handleUser(event.target.value)} placeholder="Enter last User Name "  />
            <br />
            {aruser.map((item, index) => (
                <h2 key={index}>{item}</h2>
            ))
            }
            <hr />
            <input type="text" onChange={(event) => handleAge(event.target.value)} placeholder="Enter last User Age " />
            <br />
                {
                data.map((item,i)=>(
                    <h2 key={i}>{item.name}, {item.age}</h2>
                ))}
        </div>
    );
};

export default UpdatingArray;

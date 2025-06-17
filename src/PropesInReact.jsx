import React, { useState } from "react";
import PropUserComponet from "./PropUserComponet";
import PropCollage from "./PropCollage";
import PropStudent from "./PropStudent";
import PropUser from "./PropUser";

function PropesInReact() {
  let userObj = {
    name: "rahul",
    email: "rpatel43510@gmail.com",
    age: 21,
  };

  let collageNames = ["IIT", "NIT", "MIT", "DAVV"]; // using array
  // name pass using useState
  const [student, setStudent] = useState();

  return (
    <>
      <div>
        <hr />
        {/* <PropUserComponet name={"Rahul Patel"} email={"r@gmail.com"} age={23} /> */}
        {/* how to prop by object */}
        <PropUserComponet user={userObj} /> {/* by object */}
        <PropCollage name={collageNames[1]} /> {/* using array */}
        <hr />
        <button onClick={() => setStudent("Rahul Patel")}>
          Update Student Name
        </button>
        {student && <PropStudent name={student} />}
      </div>
      <hr />

      

      <PropUser > 
         <h2>Hello EveryOne! I'm Rahul Patel</h2>
      </PropUser >
      
      <PropUser color="blue" >
         <h2>Hello EveryOne! I'm Rahul Patel</h2>
      </PropUser >

      <PropUser >
         <h2>Hello EveryOne! I'm Rahul Patel</h2>
      </PropUser >
    </>
  );
}

export default PropesInReact;

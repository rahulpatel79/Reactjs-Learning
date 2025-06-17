import React from "react";

function NestedLooping() {
  const userDate = [
    {
    collageName : "ITI",
      student: [
        {
          id: 1,
          name: "Rahul Patel",
          age: 24,
          email: "rahul.patel@example.com",
          number: "59876543210",
        },
      ],
    },
    {
    collageName : "IEI",
      student: [
        {
          id: 2,
          name: "John",
          age: 24,
          email: "John.John@example.com",
          number: "349876543210",
        },
      ],
    },
    {
    collageName : "ICI",
      student: [
        {
          id: 3,
          name: "dolly",
          age: 24,
          email: "dolly.dolly@example.com",
          number: "69876543210",
        },
      ],
    },
    {
    collageName : "ITI",
      student: [
        {
          id: 4,
          name: "dummmy",
          age: 24,
          email: "dummmy.dummmy@example.com",
          number: "7987653210",
        },
      ],
    },
    {
    collageName : "IGI",
      student: [
        {
          id: 5,
          name: "puspa",
          age: 24,
          email: "puspa.puspa@example.com",
          number: "3987643210",
        },
      ],
    },
     
  ];

  return <>
<h1>Nested Loop With Component </h1>
<div>
{
    userDate.map((data,index)=> (
        
        <div key={index}>
            <h2>Collage Name : {data.collageName}</h2>
            {
                    data.student.map((students)=>(
            <ul key={students.id}>
                <li><h3>Student Name : {students.name}</h3></li>
                <li><h3>Age : {students.age}</h3></li>
                <li><h3>Email : {students.email}</h3></li>
            </ul>
                    ))
            }
            
        </div>
    ))
}
</div>

  </>;
}

export default NestedLooping;

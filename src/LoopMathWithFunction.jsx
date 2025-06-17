import React from 'react'

function LoopMathWithFunction() {

    const userDate = [
  {
    id: 1,
    name: "Rahul Patel",
    age: 24,
    email: "rahul.patel@example.com",
    number: "9876543210"
  },
  {
    id: 2,
    name: "Anjali Mehta",
    age: 22,
    email: "anjali.mehta@example.com",
    number: "8765432109"
  },
  {
    id: 3,
    name: "Rohit Sharma",
    age: 26,
    email: "rohit.sharma@example.com",
    number: "7654321098"
  },
  {
    id: 4,
    name: "Pooja Verma",
    age: 23,
    email: "pooja.verma@example.com",
    number: "6543210987"
  },
  {
    id: 5,
    name: "Amit Singh",
    age: 25,
    email: "amit.singh@example.com",
    number: "5432109876"
  }
];


  return (
    <div>
      <table border={"2"}>
        <thead>
            <tr >
                <td>ID</td>
                <td>Name</td>
                <td>Age</td>
                <td>Email</td>
                <td>Number</td>
            </tr>
        </thead>
        <tbody>
            {
                userDate.map((d)=>( // yha pe user.Date.map(d) ke bjay kuch bhi likh skte he ..
                    
            // {/* yaha pe hame ek unique key dena hota he jime ham id de sktehe ..  */}
            <tr  key={d.id}> 
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.age}</td>
                <td>{d.email}</td>
                <td>{d.number}</td>
            </tr>
                ))
            }                
        </tbody>
      </table>
    </div>
  )
}

export default LoopMathWithFunction

import React from 'react'
import ReuseUserComponent from './ReuseUserComponent';

function ReuseComponentInMap() {
    
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
      <h1>Reuse Componet With Map Function</h1>

        {
            userDate.map((user)=>(
                <div key={user.id}>
                    <ReuseUserComponent  data={user} />
                </div>
            ))
        }

      <table>
        <thead>
            <tr>
                <td></td>
            </tr>
        </thead>
      </table>
    </div>
  )
}

export default ReuseComponentInMap

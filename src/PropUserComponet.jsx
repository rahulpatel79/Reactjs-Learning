import React from 'react'

// function PropUserComponet({name,email,age} ) {
//   console.log(name)
//   return (
//     <div>
//     <h1>Hello User Component</h1>
//     <h2>Name : {name}</h2>
//     <h2>Email : {email}</h2>
//     <h2>Age : { age}</h2>
    
//     </div>
//   )
// }

function PropUserComponet({user} ) {
  console.log(user.name)
  return (
    <div>
    <h1>Hello User Component</h1>
    <h2>Name : {user.name}</h2>
    <h2>Email : {user.email}</h2>
    <h2>Age : {user.age}</h2>
    
    </div>
  )
}

export default PropUserComponet

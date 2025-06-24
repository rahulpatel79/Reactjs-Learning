import React from 'react'
import StudentContext from './StudentContext'

const ClassContextComponent = () => {
  return (
    <div className='p-4' style={{backgroundColor:"skyblue"}}>
      <h1>Class Context Component</h1>
      <StudentContext />
    </div>
  )
}

export default ClassContextComponent

import React, { useContext } from 'react'
import { SubjectContextData } from './ContextData';

const SubjectContext = () => {
    const sb = useContext(SubjectContextData);
  return (
    <div className='p-4' style={{backgroundColor:"red"}}>
      <h1>Subject is : {sb}</h1>
    </div>
  )
}

export default SubjectContext

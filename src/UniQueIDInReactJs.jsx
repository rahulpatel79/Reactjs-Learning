import React, { useId } from 'react'

const UniQueIDInReactJs = () => {
   
  return (
    <div>
        <h1 className='text-start ms-3 text-decoration-underline'>Use ID : always unique </h1>
        <UserForm /> {/* form ek hi he but dono forms ki id's alg alg hogi check inspect  */}
        <hr />
        <UserForm />

    </div>
  )
}

export default UniQueIDInReactJs
function UserForm() {
     // always return the unique id
    const name = useId();
    const pass = useId();
    return (
        <>
        <form className='d-flex gap-3 fw-bold fs-3 mt-5'  action="">
            <label htmlFor={name}>Enter Name </label>
            <input className='ms-2' type="text" id={name} />
            <br />
            <label htmlFor={pass}>Enter Password </label>
            <input type="password" id={pass} />
        </form>
        </>
    )
}
 

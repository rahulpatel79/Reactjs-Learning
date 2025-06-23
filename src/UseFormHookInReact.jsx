import React from "react";
import Button from "react-bootstrap/Button";
import {useFormStatus} from 'react-dom';

function UseFormHookInReact() {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000)); // thoda sa time dene ke liye new Promis liya he .thik he ... taki form submit hone tk wait kare 
    // console.log("Submit");
  };

  function CustomerForm() {
    const {pending} = useFormStatus(); // ye hold krke rkhta he jb tk value puri submit nhi hoti he 
  // console.log(pending);
    return (
      <div>
        <input className="m-4" type="text" placeholder="Enter First Name" />
        <input className="m-4" type="text" placeholder="Enter Last Name" />
        <button disabled={pending}> {pending ? 'Submiting...' : 'Submit'}</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Use Form Hook In React Js 19...</h1>

      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </div>
  );
}

export default UseFormHookInReact;

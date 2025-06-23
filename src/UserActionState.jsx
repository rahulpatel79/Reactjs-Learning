import React from 'react'
import { useActionState } from 'react'

const UserActionState = () => {

    const handleSubmit = async(previousData, formData) =>{ // previousData is last data and formData is get the formData ki jagah pe kuch bhi likh skte he 
        // alert("Handle Submit is working" )
        let name = formData.get('name'); // get the name 
        let pass = formData.get('password'); // get the password

        await new Promise(res=>setTimeout(res,2000))
        console.log("The Form Data is ",name, pass);

        if(name && pass){
            return {message: 'Form Submited',name,pass}
        } else{
            return { error : 'Failed To submite. Enter Proper Data',name,pass}
        }

    }

    const [data, action, pending] =useActionState(handleSubmit, undefined);
    console.log(data);
  return (
    <div>
      <form action={action}>
        <input className='p-3 rounded-2' type="text" placeholder='Enter Name ' name='name' />
        <br /><br />
        <input className='p-3 rounded-2' type="password" name="password"  placeholder='Please Enter password' />
        <br /><br />
        <button className='rounded-2' disabled ={pending} >Submit</button>
        {
            data?.error && <span style={{color:"red"}}>{data?.error}</span>
        }
        {
            data?.message && <span style={{color:"green"}}>{data?.message} 👍</span>
        }
        {/* error or message ko form se bahar bhi rakh skte he ...  */}
      </form>
        <div className='mt-3'>
 
        <h2>Name : {data.name}</h2>
        <h2>Password : {data.pass}</h2>
 
        </div>
    </div>
  )
}

export default UserActionState

import React, { useState } from 'react'

function HandleRadioAndDropDown() {
  const [gender, setGender] = useState('female');
  // console.log(gender)
  const [city, setCity] = useState('Khar');
  return (
    <div>

      <form >
      <h1>Handle Radio & Drop Down</h1>
      <h2>Select Gender</h2>
        <input onChange={(event)=>{setGender(event.target.value)}} type="radio" checked={gender =="male"} value={"male"}  name='gender' id='male' /> 
        <label htmlFor="male">Male</label>

        <input onChange={(event)=>{setGender(event.target.value)}} type="radio" checked={gender =="female"} value={"female"}  name='gender' id='female' />
        <label htmlFor="female">Female</label>
      </form>

    <h2>Selectd Gender : {gender}</h2>


    <select onChange={(event)=>{setCity(event.target.value)}} defaultValue={"Khar"}>
      <option    value="Khar">Khar Kalan</option>
      <option value="Khandwa">Khandwa</option>
      <option value="Indore">Indore</option>
    </select>

    <h2>Selected City : {city}</h2>

    </div>
  )
}

export default HandleRadioAndDropDown

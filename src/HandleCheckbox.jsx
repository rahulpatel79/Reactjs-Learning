import React, { useState } from "react";

function HandleCheckbox() {
  const [skills, setSkills] = useState(["java"]);
    const handleSkills =(event)=>{
            console.log(event.target.value, event.target.checked)

            if(event.target.checked){
                setSkills([...skills,event.target.value])
            } else {
                setSkills([...skills.filter((item)=>item!=event.target.value)])
            }
    }

  return (
    <div>
      <form>
        <h2>CheckBox Form </h2>

        <input onChange={handleSkills} type="checkbox" checked={skills.includes("php")}   id="php" value="php" />
        <label htmlFor="php">PHP</label>
        <br /><br />
        <input onChange={handleSkills} type="checkbox" checked={skills.includes("java")} id="java" value="java" />
        <label htmlFor="java">JAVA</label>
        <br /><br />
        <input onChange={handleSkills} type="checkbox" checked={skills.includes("js")}  id="js" value="js" />
        <label htmlFor="js">JS</label>
        <br /><br />
        <input onChange={handleSkills} type="checkbox" checked={skills.includes("sql")}  id="sql" value="sql" />
        <label htmlFor="sql">SQL</label>
        <br />
        <br />
      </form>

    <h2>{skills.toString()}</h2>
    </div>
  );
}

export default HandleCheckbox;

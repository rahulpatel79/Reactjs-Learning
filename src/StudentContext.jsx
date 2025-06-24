import React from "react";
import SubjectContext from "./SubjectContext";


const StudentContext = () => {
  return (
    <div className="p-4" style={{ backgroundColor: "green" }}>
      <h1>Student Context Component</h1>
      <SubjectContext />
    </div>
  );
};

export default StudentContext;

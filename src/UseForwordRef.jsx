import React, { forwardRef } from "react";

// old way to use useForword version under 19.... 😁
// const UseForwordRef = (prop, inputRef) => {
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//     </div>
//   );
// };
// export default forwardRef(UseForwordRef);
// ye purana tarika he pahle use karte the ise ab nhi karte he

const UseForwordRef = (props) => {
  return (
    // it is new modern way to use forwordRef
    <>
      <input type="text" ref={props.ref} />
    </>
  );
};

export default UseForwordRef;

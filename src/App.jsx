import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>Hello</h1>
    </>
  );
}

export default App;

// me kya krta hu ki ek funcation bnake usme changes krta hu thik he.. or ye jo funcation bnaya he ye react js ka code nhi ye pure js ka code he

// function  Apple() {
//     return (

//       <h1>Hello</h1>
//     )
// }
// export default Apple;

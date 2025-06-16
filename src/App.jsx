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
      <Apple />
      <Color /> {/* Compomets ko acces krne ka tarica hota he. 2) Componet Capital letter se start hota he.  */}

      <h1>Hello, <br /> It is Funcation : {sum()}</h1> {/* funcation ko acces krne ka tarika {sum()} hota he. 2) funcatin small letter se start hota he. */}
    </>
  );
}

 

function  Apple() {
    return (

      <h1>I'm Apple</h1>
    )
}

function  Color() {
    return (

      <h1>Red</h1>
    )
}

function sum(){
  return 10+10;
 }
export default App;

// me kya krta hu ki ek funcation bnake usme changes krta hu thik he.. or ye jo funcation bnaya he ye react js ka code nhi ye pure js ka code he

// function  Apple() {
//     return (

//       <h1>Hello</h1>
//     )
// }
// export default Apple;

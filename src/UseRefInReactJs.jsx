import { useRef } from "react";
import { Button } from "react-bootstrap";
import UseForwordRef from "./UseForwordRef";

function UseRefInReactJs() {
  const inputRef = useRef(null); // dom element ka referance bnata he
  //koi bhi value store krna re render par bhi resete na.. ho

  function handleClick() {
    inputRef.current.value = "Jay Shri Ram";
    inputRef.current.focus();
  }

  return (
    <div>
      {/* <input type="text" ref={inputRef} /> */}
      <UseForwordRef ref={inputRef} />
      <Button onClick={handleClick}>Click</Button>
      <h1>UseRef in React</h1>
    </div>
  );
}
export default UseRefInReactJs;

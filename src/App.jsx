import { Profiler, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // it is bootstrap css...
import { Login, Profile } from "./UserComponent";
import JsxWithCurrlyBraces from "./JsxWithCurrlyBraces";
import ClickEventAndFuncationCall from "./ClickEventAndFuncationCall";
import UseStateComponent from "./UseStateComponent";
import Counter from "./Counter";
import ToggleHideAndshow from "./ToggleHide&Show";
import MultipleConditionInReactJs from "./MultipleConditionInReactJs";
import PropesInReact from "./PropesInReact";
import InputField from "./InputField";
import ControllerComponentForm from "./ControllerComponentForm";
import HandleCheckbox from "./HandleCheckbox";
import HandleRadioAndDropDown from "./HandleRadioAndDropDown";
import LoopMapthWithFunction from "./LoopMapWithFunction";
import LoopMapWithFunction from "./LoopMapWithFunction";
import ReuseComponentInMap from "./ReuseComponentInMap";
import TaskClockColor from "./TaskClockColor";
import NestedLooping from "./NestedLooping";
import UseEffectInReact from "./UseEffectInReact";
import UseEffectInReact2 from "./UseEffectInReact2";
import InlineCssInReactJs from "./InlineCssInReactJs";
import TaskCard from "./TaskCardData";
import TaskCardData from "./TaskCardData";
import BootstrapUsInReactJs from "./BootstrapUsInReactJs";
import UseRefInReact from "./UseRefInReact";
import UseFormHookInReact from "./UseFormHookInReact";
import UseTransitionInReactJs from "./UseTransitionInReactJs";
import DerivedStateInReactJs from "./DerivedStateInReactJs";
import LiftStateUpAddUser from "./LiftStateUpAddUser";
import LirftDisplayUser from "./LirftDisplayUser";
import UpdatingObjInState from "./UpdatingObjInState";
import UpdatingArray from "./UpdatingArray";
import UserActionState from "./UserActionState";
import UniQueIDInReactJs from "./UniQueIDInReactJs";
import CollageContext from "./CollageContext";
import { SubjectContextData } from "./ContextData";
import RouterForBrowser from "./RouterForBrowser";
import Home from "./PracticeHeader/Home";
import MainPage from "./PracticeHeader/MainPage";
import Test1 from "./TailwindCSSCompTest/Test1";
import HowToUseApi from "./APICallComponent/HowToUseApi";

function App() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState(""); // it is Lift State Up concept code

  return (
    <>
      <div>
        {/* <Login />
    <Profile />
    <Header />
    <Apple />
    <Color /> */}
        {/* Compomets ko acces krne ka tarica hota he. 2) Componet Capital letter se start hota he.  */}
        {/* <h1>Hello, <br /> It is Funcation : {sum()}</h1> */}
        {/* funcation ko acces krne ka tarika {sum()} hota he. 2) funcatin small letter se start hota he. */}
      </div>

      {/* <div>
      <JsxWithCurrlyBraces />
    </div> */}

      {/* <div>
      <ClickEventAndFuncationCall />
    </div> */}

      {/* <div>
      <UseStateComponent />
      <Counter />
      <ToggleHideAndshow />
    </div> */}

      {/* <div>
      <MultipleConditionInReactJs />
    </div>

    <div>
        <PropesInReact /> 
    </div> */}
      {/* <div>
      <InputField />
      </div> */}

      {/* <div>
        <ControllerComponentForm />
      </div> */}

      {/* <HandleCheckbox /> */}
      {/* <HandleRadioAndDropDown /> */}
      {/* <LoopMapWithFunction /> */}
      {/* <ReuseComponentInMap /> */}
      <TaskClockColor />
      {/* <NestedLooping /> */}
      {/* <UseEffectInReact /> */}
      {/* <UseEffectInReact2 /> */}
      {/* <div style={{marginTop:"20px"}}>
     <TaskCardData />
</div> */}

      {/* <div style={{ marginTop: "20px" }}>
        <BootstrapUsInReactJs />
        <UseRefInReact />
      </div> */}

      <div style={{ marginTop: "20px" }}>
        {/* <UseFormHookInReact /> */}
        {/* <UseTransitionInReactJs /> */}
        {/* <DerivedStateInReactJs />  */}
      </div>

      {/*Lift State Up Concept Div  */}
      <div style={{ marginTop: "20px" }}>
        {/* <LiftStateUpAddUser setUser={setUser} /> */}
        {/* <LirftDisplayUser user={user}/> */}
      </div>
      <div style={{ marginTop: "20px" }}>
        {/* <UpdatingObjInState /> */}
        {/* <UpdatingArray /> */}
        {/* <UserActionState /> */}
        {/* <UniQueIDInReactJs /> */}
      </div>
      {/* <div className="p-4" style={{ backgroundColor: "yellow" }} >
        <SubjectContextData.Provider value="Maths">
        <h1>Context API</h1>
        <CollageContext />
        </SubjectContextData.Provider>
      </div>   */}

      {/* <div style={{ marginTop: "20px" }}>
        <RouterForBrowser />
      </div> */}
      <div>
        {/* <Home /> */}
        {/* <MainPage /> */}
      </div>

      {/* Use Tailwind Css  */}
      <div>
        {/* Yes It's Working */}
        <Test1 />
        <HowToUseApi />
      </div>
    </>
  );
}

function Apple() {
  return <h1>I'm Apple</h1>;
}

function Color() {
  return <h1>Red</h1>;
}

function sum() {
  return 10 + 10;
}
export default App;

// me kya krta hu ki ek funcation bnake usme changes krta hu thik he.. or ye jo funcation bnaya he ye react js ka code nhi ye pure js ka code he

// function  Apple() {
//     return (

//       <h1>Hello</h1>
//     )
// }
// export default Apple;

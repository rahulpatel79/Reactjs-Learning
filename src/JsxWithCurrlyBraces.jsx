import React from "react";
 const name = "Rahul Patel."
 const path = "https://i.pinimg.com/736x/36/b4/ef/36b4ef433ac9c2cf9d34e54aa3a38340.jpg"

 const info = {
    fname: "Pupy",
    lname: "Dog",
    age : 23,
    
 }

function MathOperation(a,b, op) {
    if(op == "+") {
        return a + b;
    } else if(op == "-"){
        return a-b;
    } else if(op == "*"){
        return a*b
    }else if (op == "/"){
        return a/b
    }else{
        return "Signature Not Valid" ;
    }
}

function JsxWithCurrlyBraces() {

   
    
    return <>
    <h1>Page: JsxWithCurrlyBraces </h1>
    <h1>Name : {name ? name : "user not found."}</h1>
    <h2>Math Operation : {MathOperation(10,20, "-")}</h2>
    <h2>Math Operation : {MathOperation(10,20, "+")}</h2>
    <h2>Math Operation  : {MathOperation(10,20, " ")}</h2>    
    <h3>Persional Information : {info.fname} , {info.lname} </h3>
    <img src={path} alt="Dog Pupy Img" />
    </>
    
}
export default JsxWithCurrlyBraces;


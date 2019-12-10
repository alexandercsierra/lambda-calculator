import React from "react";
import {operators} from "../../../data";

const Operators = (props) => {
  const {setOperatorState, setEquation, equation, setNumberState, operatorState, numberState} = props;
  const opBtn = operators.map(op => {
    return(<button key = {op.char} onClick={e => {
      
      setOperatorState(op.value);
      setEquation(oldArray => [...oldArray, numberState]);
      if (equation[equation.length-1] !== op.value){
        setEquation(oldArray => [...oldArray, op.value]);
      }
      







      setNumberState("");


      // if(op.value = "+"){
      //   console.log(equation);
      // } else {
      //   console.log("equate");
      // }

      
      
    
    
    }}>{op.char}</button>);
  });

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    padding: "0",
    width: "100%"
  };



  if (operatorState === "="){
    console.log("equate");
    console.log(equation);



    let str = equation;
    str.pop();
    

    //check if two numbers or two strings are next to each other
    //if two strings, check if same. If same, get rid of last one. If different, pop first keep second
    //if two numbers clear everything before first number


    //loop through str
    //is str[i] === str[i+1] ? When str[i+1] !== undefined
    //if yes determine if a number or a string and take appropriate action

    let jStr = str.join("");
    let ans = eval(jStr);
    let answer = ans;
    if (ans < 1){
      answer = ans.toFixed(2);
    }
      
    

    setOperatorState(answer);
    setEquation([answer]);
    console.log(str);

  }

  return (
    

    <div style={divStyle}>
    {opBtn}
    </div>
  );
};

export default Operators;
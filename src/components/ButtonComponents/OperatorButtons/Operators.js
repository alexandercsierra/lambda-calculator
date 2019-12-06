import React from "react";
import {operators} from "../../../data";

const Operators = (props) => {
  const {setOperatorState, setEquation, equation, setNumberState, operatorState, numberState} = props;
  const opBtn = operators.map(op => {
    return(<button key = {op.char} onClick={e => {
      
      setOperatorState(op.value);
      setEquation(oldArray => [...oldArray, numberState]);
      setEquation(oldArray => [...oldArray, op.value]);

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
    // console.log("equate");
    // console.log(equation);
    let str = equation;
    str.pop();
    setOperatorState(eval(str.join("")));
    console.log(str);
    // console.log());
  }

  return (
    

    <div style={divStyle}>
    {opBtn}
    </div>
  );
};

export default Operators;
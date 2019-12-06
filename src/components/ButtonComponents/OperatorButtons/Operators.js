import React from "react";
import {operators} from "../../../data";

const Operators = (props) => {
  const {setOperatorState, setEquation, equation, setNumberState, operatorState, numberState} = props;
  const opBtn = operators.map(op => {
    return(<button key = {op.char} onClick={e => {
      
      setOperatorState(op.value);
      setEquation(oldArray => [...oldArray, numberState]);
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

  if (operatorState === "/"){
    console.log("divide");

  } else if (operatorState === "*"){
    console.log("multiply");


  } else if (operatorState === "-"){
    console.log("subtract");


  } else if (operatorState === "+"){
    console.log("add");


  } else if (operatorState === "="){
    console.log("equate");
    console.log(equation);
  }

  return (
    

    <div style={divStyle}>
    {opBtn}
    </div>
  );
};

export default Operators;
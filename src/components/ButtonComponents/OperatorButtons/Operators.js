import React from "react";
import {operators} from "../../../data";

const Operators = (props) => {
  const {setOperatorState} = props;
  const opBtn = operators.map(op => {
    return(<button key = {op} onClick={e => {setOperatorState(op.value)}}>{op.char}</button>);
  });

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    padding: "0",
    width: "100%"
  };

  return (
    

    <div style={divStyle}>
    {opBtn}
    </div>
  );
};

export default Operators;
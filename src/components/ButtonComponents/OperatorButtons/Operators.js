import React from "react";
import {operators} from "../../../data";

const Operators = (props) => {
  const {setOperatorState} = props;
  const opBtn = operators.map(op => {
    return(<button key = {op} onClick={e => {setOperatorState(op.value)}}>{op.char}</button>);
  })

  return (
    

    <div>
    {opBtn}
    </div>
  );
};

export default Operators;
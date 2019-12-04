import React from "react";
import {operators} from "../../../data";

const Operators = () => {
  const opBtn = operators.map(e => {
    return(<button>{e.char}</button>);
  })

  return (
    

    <div>
    {opBtn}
    </div>
  );
};

export default Operators;
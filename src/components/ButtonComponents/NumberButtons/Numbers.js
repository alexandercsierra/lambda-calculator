import React from "react";
import {numbers} from "../../../data";

const Numbers = () => {
  const numBtn = numbers.map(e => {
    return(<button>{e}</button>);
  })

  return (
    

    <div>
    {numBtn}
    </div>
  );
};

export default Numbers;
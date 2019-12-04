import React from "react";
import {specials} from "../../../data";

const Specials = () => {
  const specBtn = specials.map(e => {
    return(<button>{e}</button>);
  })

  return (
    

    <div>
    {specBtn}
    </div>
  );
};

export default Specials;

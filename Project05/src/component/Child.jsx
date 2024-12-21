import React from "react";
import Grandchild from "./Grandchild";
const Child = () => {
  return (
    <>
      <div>Child</div>
      <Grandchild />
    </>
  );
};

export default Child;

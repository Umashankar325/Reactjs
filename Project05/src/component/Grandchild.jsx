import React, { useContext } from "react";
import { datacontaxt } from "../context/Information";


const Grandchild = () => {
  const [data, setdata] = useContext(datacontaxt);

  return (
    <>
      <div>Grandchild</div>
      <h2> {data}</h2>
    </>
  );
};

export default Grandchild;

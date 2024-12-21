import React, { createContext, useState } from "react";

// create the contaxt export it outside the function
export const datacontaxt = createContext(null);

const Information = (props) => {
  // 1. create the global data
  const [data, setdata] = useState("important data");

  return (
    <div className="w-[80%] mx-auto mt-10 p-10 bg-zinc-300">
      {/* 3. wrap the children and pass the value with context provider */}
      <datacontaxt.Provider value={[data, setdata]}>
        {props.children}
      </datacontaxt.Provider>
    </div>
  );
};

export default Information;

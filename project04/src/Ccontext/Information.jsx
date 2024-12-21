import React, { useContext, useState } from "react";
import { createContext } from "react";

export const taskdata = createContext(null);

function Information(props) {
  const [tasks, settasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  return (
    <taskdata.Provider value={[tasks, settasks]}>
      {props.children}
    </taskdata.Provider>
  );
}

export default Information;
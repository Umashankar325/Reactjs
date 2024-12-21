import { nanoid } from "nanoid/non-secure";
import React, { useContext, useState } from "react";
import css from "./Addtask.module.css";

import {taskdata} from "../Ccontext/Information" 
const Adddtask = (props) => {
  const [tasks, settasks] = useContext(taskdata)
  const [task, settask] = useState("");

  let updatetasks = () => {
    if (task.length) {
      let updatetask = {
        id: nanoid(),
        task: task,
      };
      let newdata = [...tasks, updatetask];
      localStorage.setItem("tasks", JSON.stringify(newdata));
      settasks(newdata);
      settask(" ");
      // console.log(task);
    }
  };

  return (
    <div className="input w-[100%] bg-slate-500 m-auto flex items-center justify-center gap-3 rounded-l p-2">
      <input
        className="pl-2 h-9 w-60 rounded text-black"
        type="text"
        name=""
        id=""
        placeholder="Enter Task"
        value={task}
        onChange={(e) => {
          settask(e.target.value);
        }}
      />

      <button onClick={updatetasks}>
        <i className="ri-add-large-line text-white bg-slate-600 p-2 text-xl rounded"></i>
      </button>
      {/* <h1 className={css.addheading}>Extaernal css not global</h1> */}
    </div>
  );
};

export default Adddtask;

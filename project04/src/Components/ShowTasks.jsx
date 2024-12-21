import React, { useContext } from "react";
import "./ShowTasks.css";
import {taskdata} from "../Ccontext/Information"

const ShowTasks = () => {
  const [tasks, settasks] = useContext(taskdata)
  let render =
    tasks.length > 0 ? (
      tasks.map((e, index) => (
        <li
          key={index}
          id={index}
          className="bg-slate-500   rounded px-2 py-1  mt-1 flex justify-between"
        >
          <p> {e.task}</p>

          <button onClick={() => deletehandler(index)} className="">
            <i className="ri-close-line  text-white bg-slate-600 p-2 text-xl rounded hover:text-red-500"></i>
          </button>
        </li>
      ))
    ) : (
      <li className="bg-slate-500  text-green-400 rounded px-2 py-1  mt-1">
        NO PENDING TASK
      </li>
    );

  let deletehandler = (i) => {
    let deketedtasks = [...tasks];
    deketedtasks.splice(i, 1);
    settasks(deketedtasks);
    localStorage.setItem("tasks", JSON.stringify(deketedtasks));
  };
  return (
    <>
      {/* <h1 className="head">Panding Tasks</h1> */}
      <ul className="listcontainer  w-[40%] m-auto text-left rounded text-xl pt-1">
        {render}
      </ul>
    </>
  );
};

export default ShowTasks;

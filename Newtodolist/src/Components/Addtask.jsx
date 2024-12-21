import { nanoid } from 'nanoid';
import React, { useState } from 'react'

const Addtask = (props) => {
    const [task, settask] = useState("");

    

  let inputhandler = (e) => {
    e.preventDefault();
    let newtask = { id: nanoid(), task: task, flag: false };
    let newtasks = [...props.tasks, newtask];
    localStorage.setItem("tasks",JSON.stringify(newtasks))
    props.settasks(newtasks);
    settask("");
    
  };
  return (
    <form className="w-[25%] flex justify-between px-5 my-[2%]">
        <input
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
          placeholder="write your next task..."
          className="px-5 py-3 text-yellow-100 outline-none w-[85%] rounded-xl bg-zinc-700 "
          type="text"
        />
        <button
          onClick={inputhandler}
          type="submit"
          className="outline-none text-4xl font-extrabold flex justify-center items-center w-[50px] h-[50px] rounded-full bg-orange-600"
        >
          <i className="ri-add-fill"></i>
        </button>
      </form>
  )
}

export default Addtask
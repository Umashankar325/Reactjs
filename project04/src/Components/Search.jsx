import React, { useContext, useState } from "react";
import { taskdata } from "../Ccontext/Information";
const Search = (props) => {
  const [tasks, settasks] = useContext(taskdata);
  const [filterd, setfilterd] = useState([]);

  let rendersearch = filterd.map((e, index) => (
    <li
      key={index}
      id={index}
      className="bg-slate-500   rounded px-2 py-1  mt-1 flex justify-between"
    >
      <p> {e.task}</p>
    </li>
  ));

  let Searchhandler = (query) => {
    if (query.length) {
      let filterd = tasks.filter((e, index) => {
        return e.task.toLowerCase().includes(query.toLowerCase());
      });
      setfilterd(filterd);
    } else {
      setfilterd([]);
    }
  };

  return (
    <div className="right w-[80%]  h-[100%] m-auto flex-col">
      <div className="input p-2 w-[100%]  bg-slate-500 m-auto flex items-center justify-center gap-3 rounded-r">
        <input
          className="pl-2 h-9 w-60 rounded text-black"
          type="text"
          name=""
          id=""
          placeholder="Search Task"
          onChange={(e) => {
            Searchhandler(e.target.value);
          }}
        />
        <button>
          <i className="ri-search-line  text-white bg-slate-600 p-2 text-xl rounded"></i>
        </button>
      </div>

      <ul className="listcontainer   w-[40%]  m-auto text-left rounded text-xl pt-1">
        {rendersearch}
      </ul>
    </div>
  );
};

export default Search;

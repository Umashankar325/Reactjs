import React from "react";

const Showtask = (props) => {
  let render = props.tasks.length ? (
    props.tasks.map((e, index) => (
      <li
        key={index}
        className="mb-5 flex justify-between items-center border rounded-xl p-5"
      >
        <div className="flex items-center">
          <div
            onClick={() => {
              let updatedtasks = props.tasks.map((task, id) =>
                index === id ? { ...task, flag: !task.flag } : task
              );
              localStorage.setItem("tasks", JSON.stringify(updatedtasks));
              props.settasks(updatedtasks);
            }}
            className={`mr-4 rounded-full w-[30px] h-[30px] border ${
              e.flag ? `bg-green-400 ` : `border-orange-600  `
            } 
          
            `}
          ></div>
          <h1
            className={`text-2xl font-extrabold text-yellow-100  ${
              e.flag && `line-through`
            }  `}
          >
            {e.task}
          </h1>
        </div>
        <div className="flex gap-3 text-2xl text-yellow-100">
          <i
            onClick={() => deletehandler(index)}
            className="ri-delete-bin-3-line"
          ></i>
        </div>
      </li>
    ))
  ) : (
    <li className="mb-5 flex justify-between items-center border rounded-xl p-5">
      <div className="flex items-center">
        <h1 className="text-2xl font-extrabold text-yellow-100">
          No Task Pending
        </h1>
      </div>
    </li>
  );

  let deletehandler = (i) => {
    let newtasks = [...props.tasks];
    newtasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(newtasks));
    props.settasks(newtasks);
  };

  return <ul className="list-none w-[25%] ">{render}</ul>;
};

export default Showtask;

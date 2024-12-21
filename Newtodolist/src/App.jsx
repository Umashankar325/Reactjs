import { nanoid } from "nanoid";
import React, { useState } from "react";
import Addtask from "./Components/Addtask";
import Showtask from "./Components/Showtask";

const App = () => {

  const [tasks, settasks] = useState(JSON.parse(localStorage.getItem("tasks"))||[]);



  return (
    <div className=" border-t-2 w-screen min-h-screen bg-zinc-800 flex  items-center flex-col">
      <div className="mt-[7%] w-[25%] h-[20%] border rounded-3xl flex justify-around items-center">
        <div className="text-yellow-100">
          <h1 className="text-3xl font-bold">LETS TODO</h1>
          <p>Keeps doing things</p>
        </div>
        <div className="text-4xl font-extrabold flex justify-center items-center w-[120px] h-[120px] rounded-full bg-orange-600">
          {
            tasks.filter((e) => {
              return e.flag == true;
            }).length
          }
          /{tasks.length}
        </div>
      </div>

    <Addtask tasks={tasks} settasks={settasks}/>
    <Showtask tasks={tasks} settasks={settasks}/>
      
    </div>
  );
};

export default App;

import React, { useContext, useState } from "react";
import Adddtask from "./Components/Adddtask";
import ShowTasks from "./Components/ShowTasks";
import Search from "./Components/Search";


const App = () => {

  // internal css
  let headrcss = { fontSize: "30px", color: "green" };
  return (
    <div className="h-screen w-screen p-10 bg-slate-400 text-white ">
      {/* inline  css */}
      {/* <h1 style={{ fontSize: "30px", color: "red" }}>TO DO App</h1> */}
      {/* internal css */}
      {/* <h1 style={headrcss}>TO DO App</h1> */}
      {/* External css
      <h1 className="head" >TO DO App</h1> */}

      <div className="main flex w-[100%] h-[80%] items-start bg-slate-300 rounded">
        <div className="left w-[80%] h-[100%] m-auto flex-col items-center justify-center gap-2 rounded ">
          {<Adddtask />}
          {<ShowTasks />}
        </div>
        {<Search   />}
      </div>
    </div>
  );
};

export default App;

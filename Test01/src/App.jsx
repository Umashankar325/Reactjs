import { nanoid } from "nanoid";
import { comment, Result } from "postcss";
import React from "react";
import { useState } from "react";

const App = () => {
  const [service, setservice] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [rating, setrating] = useState("");
  const [Comment, setComment] = useState("");
  const [data, setdata] = useState([]);

  const Submithandler = (e) => {
    e.preventDefault();

    let newdata = {
      id: nanoid(),
      name: name, 
      email: email,
      rating: rating,
      comment: Comment,
      service: service,
    };
    setdata([...data, newdata]);
  };

  let avrage = (ser) => {
    let filterdata = data.filter((e) => e.service == ser);
    if (filterdata.length == 0) {
      return 0;
    } else {
      let sum = parseInt(0);
      filterdata.map((e) => (sum += parseInt(e.rating)));
      let Result = sum / filterdata.length;
      return Result.toFixed(2);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-500  flex content-center justify-center">
      <div className="container h-[50vh] w-[40%] bg-slate-200  ">
        <h1 className="text-2xl text-center">Feedback collection System</h1>
        <form className="p-10" onSubmit={Submithandler}>
          {" "}
          <label htmlFor="Service">Service :</label>
          <select
            className="w-[40%] m-3"
            name="Service"
            id=""
            value={service}
            onChange={(e) => setservice(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Customer Support">Customer Support</option>
            <option value="Delivery">Delivery</option>
            <option value="Product Quality">Product Quality</option>
          </select>
          <br />
          <label htmlFor="name">Enter name</label>
          <input
            className="m-3"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <br />
          <label htmlFor="Email">Email :</label>
          <input
            className="m-3"
            type="email"
            name="xyz@gmail.com"
            id=""
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label htmlFor="rating">rating:</label>
          <input
            className="m-3"
            type="number"
            name=""
            id=""
            max={5}
            min={0}
            value={rating}
            onChange={(e) => setrating(e.target.value)}
          />
          <br />
          <label htmlFor="Comment">Comment:</label>
          <input
            className="m-3"
            type="text"
            name=""
            id=""
            value={Comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <button
            type="Submitt "
            className="bg-slate-500 text-white h-12 w-20 rounded"
          >
            Submitt
          </button>
        </form>

        <ul>
          <li className="text-white">Total Feedback Cout:{data.length}</li>
          <li className="text-white">
            Avrage ratting of Customer Support: {avrage("Customer Support")}
          </li>
          <li className="text-white">
            Avrage ratting of Delivery {avrage("Delivery")}
          </li>
          <li className="text-white">
            Avrage ratting of Product Quality {avrage("Product Quality")} 
          </li>
          {data.map((e) => (
            <li key={e.id} className="text-white text-xs">
              name:{e.name} , service: {e.service}, email:{e.email}, rating:{" "}
              {e.rating}, comment:
              {e.comment},
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

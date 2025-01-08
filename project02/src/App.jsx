import React, { useDeferredValue } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const App = () => {
  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");
  const [gender, setgender] = useState("male");
  const [city, setcity] = useState("City");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      City: "Jbalpur",
    },
  });

  const formhandler = (e) => {
    // e.preventDefault();
    const data = {
      fullname,
      username,
      gender,
      city,
      // Hobby,
    };
    // console.log(data);
    console.log(e);
    // console.log(errors);

    // const formhandler = (e) => {
    //   e.preventDefault();
    // const { fullname, username } = e.target;
    // const data = {
    //   fullname: fullname.value,
    //   username: username.value,
    // };
    // console.log(data);
  };
  return (
    <div className="mt-10 w-[80%] mx-auto p-10 rounded bg-zinc-300 text-center ">
      <h1 className="font-bold text-3xl mb-3">Form Handling </h1>
      <form onSubmit={handleSubmit(formhandler)}>
        {/* <input
          type="text"
          // name="fullname"
          id=""
          className="m-2 p-2 rounded"
          value={fullname}
          placeholder="Enter Full Name "
          onChange={(e) => {
            setfullname(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <input
          type="text"
          //  name="username"
          id=""
          placeholder="Enter User id"
          className="m-2 p-2 rounded"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <div className="my-3">
          <input
            type="radio"
            name="gender"
            id=""
            value="male"
            onChange={(e) => {
              setgender(e.target.value);
            }}
            checked={gender == "male" ? true : false}
          />
          Male
          <input
            type="radio"
            name="gender"
            id=""
            value="female"
            onChange={(e) => {
              setgender(e.target.value);
            }}
            checked={gender == "female" ? true : false}
          />
          female
        </div>

        <select
          name=""
          id=""
          value={city}
          onChange={(e) => {
            setcity(e.target.value);
          }}
          className="block my-3 m-auto"
        >
          <option value="City">City</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Indore">Indore</option>
          <option value="Gwaliar">Gwaliar</option>
        </select> */}
        <hr />
        {/* <input
          type="text"
          placeholder="Enter your hobby"
          {...register("Hobby",)}
          className="m-2 p-2 rounded"
        /> */}
        <input
          type="Email"
          placeholder="Enter your Email"
          {...register("Email", { required: "* Email is requare " })}
          className="m-2 p-2 rounded"
        />
        {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}
        <hr />
        <select name="" id="" {...register("City")}>
          <option value="Bhopal">Bhopal</option>
          <option value="Indore">Indore</option>
          <option value="Jbalpur">Jbalpur</option>
        </select>
        <hr />
        <button className="p-2 rounded bg-slate-700 text-white block m-auto mt-2 ">
          Submitt
        </button>
      </form>
    </div>
  );
};

export default App;

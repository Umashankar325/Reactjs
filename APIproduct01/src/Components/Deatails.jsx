import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";

const Deatails = () => {
  const { id } = useParams();
  const [data, setdata] = useState({});

  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setdata(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getsingleproduct();
  }, []);
  return (
    <div className="w-[70%] h-full  m-auto p-[10%] flex justify-between items-center">
      <img
        className=" object-contain h-[80%] w-[45%] "
        src={`${data.image}`}
        alt=""
      />
      <div className="contant  w-[50%]">
        <h1 className="text-4xl">{data.title}</h1>
        <h3 className="text-zinc-400 my-5"> {data.category}</h3>
        <h2 className="text-red-300 mb-3">$ {data.price}</h2>
        <p className="mb-[5%]">{data.description}</p>
        <Link className="py-3 mr-5 px-5 border rounded border-blue-200 text-blue-300">
          Edit
        </Link>
        <Link className="py-3 px-5 border rounded border-red-200 text-red-300">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Deatails;

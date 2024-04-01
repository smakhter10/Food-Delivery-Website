import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Successfully Registered!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center pt-10 ">
      <div className="flex flex-col gap-3 bg-gradient-to-r from-[#EFAB68] from-0% to-[#F48E28] to-100% items-center justify-center w-[400px] h-auto right-[50%] rounded-lg">
        <div className="text-2xl mt-4 font-extrabold">Log In</div>

        <form className="flex flex-col" onSubmit={registerUser}>
          <label className="font-semibold text-xl text-[#FFF]">Name</label>
          <input
            className="mt-1 p-2 text-lg font-medium rounded-2xl"
            type="text"
            placeholder="Enter Name Here"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <label className="mt-5 font-semibold text-xl text-[#FFF]">
            Email
          </label>
          <input
            className="mt-1 p-2 text-lg font-medium rounded-2xl"
            type="email"
            placeholder="Enter Email Here"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <label className="mt-5 font-semibold text-xl text-[#FFF]">
            Password
          </label>
          <input
            className="mt-1 p-2 text-lg font-medium rounded-2xl"
            type="password"
            placeholder="Enter Password Here"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <button
            className=" mt-4 rounded-lg w-full h-[56px] bg-black text-white font-bold hover:scale-110 transition-all duration-300"
            type="submit"
          >
            Register
          </button>
        </form>

        <h1 className="font-bold">OR</h1>
        <Link
          className="bg-black text-white font-bold h-[56px] w-[228px] rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-all duration-300"
          to="/login"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

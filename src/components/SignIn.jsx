import React from "react";
import loginpic from "../assets/imgs/loginpic.jpg";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Logo } from "../assets/icons";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (userInfo === null) {
      toast.error("Account does not exist", { autoClose: 1000 });
      return;
    }

    if (userInfo.email !== email || userInfo.password !== password) {
      toast.error("Invalid email or password", { autoClose: 1000 });
      return;
    } else {
      toast.success("Login successfully", { autoClose: 1000 });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div>
      <div className="lg:hidden fixed top-0 w-full flex items-center justify-center p-7 rounded-b-lg bg-grey-900">
        <Logo />
      </div>
      
      <div className="lg:w-full flex lg:px-4 lg:py-3 h-screen bg-beige-100 justify-center pt-20  items-center ">
      <div className="hidden p-1 lg:flex relative lg:w-[43%] h-[95vh] items-center ">
        <img src={loginpic}  className="lg:w-full h-[95vh] rounded-2xl " alt="" />
        <div className="absolute top-11 left-10 text-white font-bold text-[30px]">
              <Logo />
        </div>
        <p className="absolute bottom-[124px] text-[37px] leading-10 w-[80%] left-10 font-bold text-white">
          Keep track of your money and save for your future
        </p>
        <p className="absolute bottom-12 left-10 w-[75%] text-sm  text-white">
          Personal finance app puts you in control of your spending. Track
          transactions, set budgets, and add to savings pots easily.
        </p>
      </div>

      <div className="w-[590px] m-auto lg:w-[42%] lg:m-auto p-7 lg:mt-20 flex h-[495px]  flex-col bg-white rounded-xl">
        <h1 className="text-[35px] font-bold">Login</h1>
        <form className="flex flex-col lg:w-full mt-9 ">
          <label htmlFor="email" className="text-sm text-gray-600 mb-3">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[1px] border-gray-500 px-4 py-2 rounded-[7px] "
            placeholder="Email"
          />

          <label
            htmlFor="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-sm text-gray-600 mt-9 mb-3"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-[1px] border-gray-500 px-4 py-2 rounded-[7px] w-full"
              placeholder="Password"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-2 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-black text-center text-white rounded-[5px] mt-7 font-bold text-sm p-3"
          >
            Login
          </button>
        </form>
        <div className="w-full text-center mt-8 text-sm">
          <p className="font-medium text-gray-500">
            Need to create an account?
            <Link to={"/register"} className="text-black ml-2 underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default SignIn;

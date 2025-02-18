import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import loginpic from '../assets/imgs/loginpic.jpg'
import { Link } from 'react-router'
import { toast } from 'react-toastify'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Logo } from "../assets/icons";

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name==="" || email === "" || password ==="") {
      toast.error('Please fill in all fields', {autoClose:1000})
      return;
    } else {
      const userData = {name, email, password}

    localStorage.setItem("userInfo", JSON.stringify(userData))
    toast.success('Account created successfully', {autoClose: 1000})

    setTimeout(() => {
      navigate('/login');
    }, 2000);
    }
    
  }
const [showPassword, setShowPassword] = useState(false);

const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};

return (
        <div>
              <div className="lg:hidden fixed top-0 w-full flex items-center justify-center p-7 rounded-b-lg bg-grey-900">
                <Logo />
              </div>
              
              <div className="lg:w-full flex lg:px-4 lg:py-3 h-screen bg-beige-100 justify-center pt-[100px]  items-center ">
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
        
              <div className="w-[590px] m-auto lg:w-[42%] lg:m-auto p-7 lg:mt-10 flex h-[605px]  flex-col bg-white rounded-xl">
                <h1 className="text-[35px] font-bold">Register</h1>
                <form className="flex flex-col lg:w-full mt-9 ">

                <label htmlFor="name" className="text-sm text-gray-600 mb-3">
                    Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-[1px] border-gray-500 px-4 py-2 rounded-[7px] "
                    placeholder="Name"
                  />

                  <label htmlFor="email" className="text-sm text-gray-600 mt-7 mb-3">
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
                    className="text-sm text-gray-600 mt-7 mb-3"
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
                    onClick={handleSubmit}
                    className="w-full bg-grey-900 text-center text-white rounded-[5px] mt-7 font-bold text-sm p-3"
                  >
                    Create Account
                  </button>
                </form>
                <div className="w-full text-center mt-6 text-sm">
                  <p className="font-medium text-gray-500">
                    Already have an account?
                    <Link to={"/login"} className="text-black ml-2 underline">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
        
            </div>
)
}

export default SignUp

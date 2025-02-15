import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import loginpic from '../assets/imgs/loginpic.jpg'
import { Link } from 'react-router'
import { toast } from 'react-toastify'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
             <div className="w-full flex px-2 h-screen bg-beige-100 justify-between items-center ">
                <div className="hidden lg:block w-[51%] ml-3 relative">
                    <img src={loginpic} className='w-full h-[470px] rounded-xl' alt="" />
                    <h1 className="absolute top-6 left-10 text-white font-bold text-[30px]">finance</h1>
                    <p className='absolute bottom-[100px] text-[30px] w-[70%] left-11 font-bold text-white'>Keep track of your money and save for your future</p>
                    <p className='absolute bottom-7 left-11 w-[90%] text-sm  text-white'>Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.</p>
                </div>
                
                <div className="w-[43%] p-8 mr-7 flex h-[465px] flex-col  bg-white rounded-xl">
                    <h1 className="text-[33px] font-bold">Register</h1>
                    <form className='flex flex-col mt-4 '>

                        <label htmlFor="name" className='text-sm text-gray-600 mb-3'>Name</label>
                        <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} className='border-[1px] border-gray-500 px-4 py-1 rounded-[7px] mb-5 ' placeholder='Name' />

                        <label htmlFor="email" className='text-sm text-gray-600 mb-3'>Email</label>
                        <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border-[1px] border-gray-500 px-4 py-1 rounded-[7px] ' placeholder='Email' />
                
                        <label htmlFor="password" className='text-sm text-gray-600 mt-5 mb-3'>Password</label>
                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"} id='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border-[1px] border-gray-500 px-4 py-1 rounded-[7px] w-full' placeholder='Password' />
                            <span onClick={togglePasswordVisibility} className='absolute right-3 top-2 cursor-pointer'>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                             </span>
                        </div>
                
                        <button onClick={handleSubmit} className='w-full bg-black text-center text-white rounded-[5px] mt-7 font-bold text-sm p-3'>Create Account</button>
                    </form>
                        <div className='w-full text-center mt-3 text-sm'>
                            <p className='font-medium text-gray-500'>Already have an account?
                                <Link to={"/login"} className='text-black ml-2 underline'>Login</Link>
                            </p>
                
                        </div>
                </div>
            </div>
        </div>
)
}

export default SignUp

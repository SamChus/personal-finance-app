import React from 'react'
import SignIn from '../components/SignIn'
import { ToastContainer } from "react-toastify"

const Login = () => {
  return (
    <div>
      <ToastContainer />
      <SignIn />
    </div>
  )
}

export default Login
import { div } from 'framer-motion/client'
import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  
  return (
    <div>
      <h1>Layout</h1>
      <Outlet />
    </div>
  )
}

export default Layout
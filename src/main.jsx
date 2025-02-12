import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { RouterProvider } from 'react-router'
import router from './routes/Routes.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// import { createBrowserRouter } from "react-router";
// import { lazy, Suspense } from "react";
// import Loader from "../components/Loader";

// // Lazy-loaded components
// const Layout = lazy(() => import("../index"));
// const Register = lazy(() => import("../auth/Register"));
// const Login = lazy(() => import("../auth/Login"));

// const router = createBrowserRouter([
//   {
//     path: "/register",
//     element: (
//       <Suspense fallback={<Loader />}>
//         <Register />
//       </Suspense>
//     ),
//   },
//   {
//     path: "/login",
//     element: (
//       <Suspense fallback={<Loader />}>
//         <Login />
//       </Suspense>
//     ),
//   },
// ]);

// export default router;


import { createBrowserRouter } from "react-router";
import Login from "../auth/Login";
import Layout from "..";
import Budgets from "../features/Budgets";
import Transactions from "../features/Transactions";
import Pots from "../features/Pots";
import RecurringBills from "../features/RecurringBills";
import Register from "../auth/Register";
import Overview from "../features/Overview";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/dashboard",
        element: <Overview />,
      },
      {
        path: "/budgets",
        element: <Budgets />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/pots",
        element: <Pots />,
      },
      {
        path: "/recurring-bills",
        element: <RecurringBills />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //     path: "*",
  //     element: <div>404 Not Found</div>
  // }
]);

export default router;
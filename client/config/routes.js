import React from "react";

const Home = React.lazy(() => import("../src/pages/Home"));
const Product = React.lazy(() => import("../src/pages/Product"));
const Login = React.lazy(() => import("../src/pages/Login"));
const Register = React.lazy(() => import("../src/pages/Register"));
const Error = React.lazy(() => import("../src/pages/Error"));

export default [
  {
    path: "/",
    isExact: true,
    main: () => <Home />,
  },
  {
    path: "/:name/dp/:id",
    isExact: true,
    main: () => <Product />,
  },
  {
    path: "/login",
    isExact: true,
    main: () => <Login />,
  },
  {
    path: "/register",
    isExact: true,
    main: () => <Register />,
  },
  {
    path: "",
    isExact: true,
    main: () => <Error />,
  },
];

import React1 from "./React-1";
import login from "./log-in";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <React1/>,
    },
  ]);
ReactDOM.render(
  <RouterProvider router={router}/>
,document.getElementById('rootMain'))
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./MainApp.jsx";
import "./index.css";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainApp from "./MainApp.jsx";
import VideoDetail from "./VideoDetail.jsx"; // Import the component for video detail page

const router = createBrowserRouter([
{
    path: "/",
    element: <MainApp />,
},
{
    path: "detail/:videoId",
    element: <VideoDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
import React from "react";
import ReactDOM from "react-dom/client";
import Order from "@/pages/Order/Order.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "@/components/NotFound/NotFound.tsx";
import Layout from "./layout/Layout/Layout";
import Home from "./pages/Home/Home";
import ComingSoon from "./layout/Coming/ComingSoon";
import CurrentPlaying from "./layout/Current/CurrentPlaying";
import "./index.scss";
import Login from "./pages/Authentification/Login/Login";
import Register from "./pages/Authentification/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/current", element: <CurrentPlaying /> },
            { path: "/coming", element: <ComingSoon /> },
        ],
    },
    { path: "/order", element: <Order /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

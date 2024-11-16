import React from "react";
import Home from "./Pages/Home/Home";
import routes from "./routes";
import ReactDOM from "react-dom/client";
import {
    HashRouter,
    Route,
    RouterProvider,
    Routes,
    createHashRouter,
    useRoutes,
} from "react-router-dom";

export default function App() {
    let router = useRoutes(routes);

    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    return (
        <>
            <Routes>
                <Route path="/Programming-Learning-Site" element={ <Home/> }/>
            </Routes> 
        </>
    );
}

import React, { useEffect } from "react";
import Home from "./Pages/Home/Home";
import routes from "./routes";
import ReactDOM from "react-dom/client";
import { Switch } from "react-router";
import {
    HashRouter,
    Route,
    RouterProvider,
    Routes,
    createBrowserRouter,
    createHashRouter,
    useRoutes,
} from "react-router-dom";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

export default function App() {
    let routerData = useRoutes(routes);

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return <>{routerData}</>;
}

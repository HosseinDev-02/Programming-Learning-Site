import React from "react";
import Home from "./Pages/Home/Home";
import routes from "./routes";
import ReactDOM from "react-dom/client";
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
    let router = createHashRouter(routes);

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
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/course/:shortName" element={<CourseDetail />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </HashRouter>
    );
}

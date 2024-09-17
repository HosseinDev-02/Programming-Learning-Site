import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import CoursesPage from "./Components/CoursesPage/CoursesPage";

export default function App() {
    return (
        <Routes>
            <Route element={<Home/>} path='/'></Route>
            <Route element={<CoursesPage/>} path='/Courses'></Route>
        </Routes>
    )
}
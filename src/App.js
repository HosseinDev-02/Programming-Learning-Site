import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";


export default function App() {
    return (
        <Routes>
            <Route element={<Home/>} path='/'></Route>
        </Routes>
    )
}
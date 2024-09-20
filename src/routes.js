import Home from "./Components/Home/Home";
import CoursesPage from "./Components/CoursesPage/CoursesPage";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import LoginRegister from "./Components/Login-Register/LoginRegister";
import Basket from "./Components/Basket/Basket";

let routes = [
    {path: '/', element: <Home />},
    {path: '/courses', element: <CoursesPage />},
    {path: '/course', element: <CourseDetail />},
    {path: '/login-register', element: <LoginRegister />},
    {path: '/basket', element: <Basket />},
]

export default routes
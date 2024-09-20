import Home from "./Components/Home/Home";
import CoursesPage from "./Components/CoursesPage/CoursesPage";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import LoginRegister from "./Components/Login-Register/LoginRegister";

let routes = [
    {path: '/', element: <Home />},
    {path: '/courses', element: <CoursesPage />},
    {path: '/course', element: <CourseDetail />},
    {path: '/login-register', element: <LoginRegister />},
]

export default routes
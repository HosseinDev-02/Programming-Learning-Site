import Home from "./Components/Home/Home";
import CoursesPage from "./Components/CoursesPage/CoursesPage";
import CourseDetail from "./Components/CourseDetail/CourseDetail";

let routes = [
    {path: '/', element: <Home />},
    {path: '/courses', element: <CoursesPage />},
    {path: '/course', element: <CourseDetail />}
]

export default routes
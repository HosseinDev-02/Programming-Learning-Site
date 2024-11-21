import Home from "./Pages/Home/Home";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import Register from "./Pages/Register/Register";
import Orders from "./Pages/Orders/Orders";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Counter from "./Components/DashBoard/Counter/Counter";
import UserCourses from "./Components/DashBoard/UserCourses/UserCourses";
import Favorites from "./Components/DashBoard/Favorites/Favorites";
import Transactions from "./Components/DashBoard/Transactions/Transactions";
import Questions from "./Components/DashBoard/Questions/Questions";
import Notifications from "./Components/DashBoard/Notifications/Notifications";
import EditProfile from "./Components/DashBoard/EditProfile/EditProfile";
import ArticlesPage from "./Pages/ArticlesPage/ArticlesPage";
import ArticleDetail from "./Pages/ArticleDetail/ArticleDetail";
import Login from "./Pages/Login/Login";

let routes = [
    { path: "/", element: <Home /> },
    { path: "/courses", element: <CoursesPage /> },
    { path: "/course-detail/:shortName", element: <CourseDetail /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/orders", element: <Orders /> },
    { path: "/articles", element: <ArticlesPage></ArticlesPage> },
    { path: "/article-detail/:shortName", element: <ArticleDetail></ArticleDetail> },
    {
        path: "/dashboard/*",
        element: <DashBoard></DashBoard>,
        children: [
            { path: "counter", element: <Counter></Counter> },
            { path: "courses", element: <UserCourses></UserCourses> },
            { path: "favorites", element: <Favorites></Favorites> },
            { path: "wallet", element: <Transactions></Transactions> },
            { path: "questions", element: <Questions></Questions> },
            { path: "notifications", element: <Notifications></Notifications> },
            { path: "edit", element: <EditProfile></EditProfile> },
        ],
    }
];

export default routes;

import Home from "./Pages/Home/Home";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import Register from "./Pages/Register/Register";
import Orders from "./Pages/Orders/Orders";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Counter from "./Pages/DashBoard/Counter/Counter";
import UserCourses from "./Pages/DashBoard/UserCourses/UserCourses";
import Favorites from "./Pages/DashBoard/Favorites/Favorites";
import Transactions from "./Pages/DashBoard/Transactions/Transactions";
import Questions from "./Pages/DashBoard/Questions/Questions";
import Notifications from "./Pages/DashBoard/Notifications/Notifications";
import EditProfile from "./Pages/DashBoard/EditProfile/EditProfile";
import ArticlesPage from "./Pages/ArticlesPage/ArticlesPage";
import ArticleDetail from "./Pages/ArticleDetail/ArticleDetail";
import Login from "./Pages/Login/Login";

let routes = [
    { path: "/Programming-Learning-Site", element: <Home /> },
    { path: "/Programming-Learning-Site/courses", element: <CoursesPage /> },
    { path: "/Programming-Learning-Site/course/:shortName", element: <CourseDetail /> },
    { path: "/Programming-Learning-Site/register", element: <Register /> },
    { path: "/Programming-Learning-Site/login", element: <Login /> },
    { path: "/Programming-Learning-Site/orders", element: <Orders /> },
    { path: "/Programming-Learning-Site/articles", element: <ArticlesPage></ArticlesPage> },
    { path: "/Programming-Learning-Site/article-detail/:shortName", element: <ArticleDetail></ArticleDetail> },
    {
        path: "/Programming-Learning-Site/dashboard",
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

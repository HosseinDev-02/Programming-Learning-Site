import Home from "./Components/Home/Home";
import CoursesPage from "./Components/CoursesPage/CoursesPage";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import LoginRegister from "./Components/Login-Register/LoginRegister";
import Basket from "./Components/Basket/Basket";
import DashBoard from "./Components/DashBoard/DashBoard";
import Counter from "./Components/DashBoard/Counter/Counter";
import UserCourses from "./Components/DashBoard/UserCourses/UserCourses";
import Favorites from "./Components/DashBoard/Favorites/Favorites";
import Transactions from "./Components/DashBoard/Transactions/Transactions";
import Questions from "./Components/DashBoard/Questions/Questions";
import Notifications from "./Components/DashBoard/Notifications/Notifications";
import EditProfile from "./Components/DashBoard/EditProfile/EditProfile";
import Panel from "./Components/Panel/Panel";
import ArticlesPage from "./Components/ArticlesPage/ArticlesPage";
import ArticleDetail from "./Components/ArticleDetail/ArticleDetail";

let routes = [
    {path: '/', element: <Home />},
    {path: '/courses', element: <CoursesPage />},
    {path: '/course', element: <CourseDetail />},
    {path: '/login-register', element: <LoginRegister />},
    {path: '/basket', element: <Basket />},
    {path: '/articles', element: <ArticlesPage></ArticlesPage>},
    {path: '/article-detail', element: <ArticleDetail></ArticleDetail>},
    {path: '/dashboard', element: <DashBoard />, children: [
            {path: 'counter', element: <Counter></Counter>},
            {path: 'courses', element: <UserCourses></UserCourses>},
            {path: 'favorites', element: <Favorites></Favorites>},
            {path: 'wallet', element: <Transactions></Transactions>},
            {path: 'questions', element: <Questions></Questions>},
            {path: 'notifications', element: <Notifications></Notifications>},
            {path: 'edit', element: <EditProfile></EditProfile>},
        ]
    },
    {path: '/admin-panel', element: <Panel></Panel>}
]

export default routes
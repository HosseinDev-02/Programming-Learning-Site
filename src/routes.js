import Home from "./Components/Pages/Home/Home";
import CoursesPage from "./Components/Pages/CoursesPage/CoursesPage";
import CourseDetail from "./Components/Pages/CourseDetail/CourseDetail";
import LoginRegister from "./Components/Pages/Login-Register/LoginRegister";
import Basket from "./Components/Pages/Basket/Basket";
import DashBoard from "./Components/Pages/DashBoard/DashBoard";
import Counter from "./Components/Pages/DashBoard/Counter/Counter";
import UserCourses from "./Components/Pages/DashBoard/UserCourses/UserCourses";
import Favorites from "./Components/Pages/DashBoard/Favorites/Favorites";
import Transactions from "./Components/Pages/DashBoard/Transactions/Transactions";
import Questions from "./Components/Pages/DashBoard/Questions/Questions";
import Notifications from "./Components/Pages/DashBoard/Notifications/Notifications";
import EditProfile from "./Components/Pages/DashBoard/EditProfile/EditProfile";
import Panel from "./Components/Pages/Panel/Panel";
import ArticlesPage from "./Components/Pages/ArticlesPage/ArticlesPage";
import ArticleDetail from "./Components/Pages/ArticleDetail/ArticleDetail";
import Users from "./Components/Pages/Panel/Users/Users";
import UserForm from "./Components/Pages/Panel/Users/UserForm";

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
    {path: '/admin-panel', element: <Panel />, children: [
            {path: 'users', element: <Users></Users>},
            {path: 'user-form', element: <UserForm></UserForm>}
        ]}
]

export default routes
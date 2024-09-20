import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import routes from "./routes";
import {useRoutes} from "react-router-dom";
import Symbol from "./Components/Symbol/Symbol";


export default function App() {

    let router = useRoutes(routes)

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Symbol></Symbol>
            <Header></Header>
            {router}
            <Footer></Footer>
        </div>
    )}
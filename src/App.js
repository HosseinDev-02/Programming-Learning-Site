import routes from "./routes";
import {useRoutes} from "react-router-dom";


export default function App() {

    let router = useRoutes(routes)

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    return (
        <>
            {router}
        </>
    )
}
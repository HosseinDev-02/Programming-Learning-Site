import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Symbol from "../Symbol/Symbol";
import Courses from "./Courses/Courses";

export default function CoursesPage () {
    return (
        <div className='text-caption font-YekanBakh-Regular bg-white dark:bg-black min-h-screen'>
            <Symbol></Symbol>
            <Header></Header>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    )
}
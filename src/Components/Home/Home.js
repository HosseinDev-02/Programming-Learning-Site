import Symbol from "../Symbol/Symbol";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Introduction from "./Introduction/Introduction";
import Services from "./Services/Services";
import LatestCourses from "./Latest-Courses/LatestCourses";
import Comments from "./Comments/Comments";
import Articles from "./Articles/Articles";

export default function Home() {
    return (
        <div className='text-caption font-YekanBakh-Regular bg-white dark:bg-black min-h-screen'>
            <Symbol></Symbol>
            <Header></Header>
            <main className='space-y-14 py-5'>
                <Introduction></Introduction>
                <Services></Services>
                <LatestCourses></LatestCourses>
                <Comments></Comments>
                <Articles></Articles>
            </main>
            <Footer></Footer>
        </div>
    )
}
import Introduction from "./Introduction/Introduction";
import Services from "./Services/Services";
import LatestCourses from "./Latest-Courses/LatestCourses";
import Comments from "./Comments/Comments";
import Articles from "./Articles/Articles";

export default function Home() {
    return (
        <main className='space-y-14 py-5'>
            <Introduction></Introduction>
            <Services></Services>
            <LatestCourses></LatestCourses>
            <Comments></Comments>
            <Articles></Articles>
        </main>
    )
}
import Introduction from "./Introduction/Introduction";
import Services from "./Services/Services";
import LatestCourses from "./Latest-Courses/LatestCourses";
import Comments from "./Comments/Comments";
import Articles from "./Articles/Articles";
import SiteStructure from "../../Components/SiteStructure/SiteStructure";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";

export default function Home() {
    return (
        <SiteStructure>
            <main className='space-y-14 py-5'>
                <Introduction></Introduction>
                <Services></Services>
                <LatestCourses></LatestCourses>
                <Comments></Comments>
                <Articles></Articles>
                <PopularCourses/>
            </main>
        </SiteStructure>
    )
}
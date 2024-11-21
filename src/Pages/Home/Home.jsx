import Introduction from "../../Components/Introduction/Introduction";
import Services from "../../Components/Services/Services";
import LastCourses from "../../Components/LastCourses/LastCourses";
import Comments from "../../Components/Comments/Comments";
import LastArticles from "../../Components/LastArticles/LastArticles";
import SiteStructure from "../../Components/SiteStructure/SiteStructure";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";

export default function Home() {
    return (
        <SiteStructure>
            <main className='space-y-14 py-5'>
                <Introduction></Introduction>
                <Services></Services>
                <LastCourses></LastCourses>
                <Comments></Comments>
                <LastArticles></LastArticles>
                <PopularCourses/>
            </main>
        </SiteStructure>
    )
}
import Introduction from "../Introduction/Introduction";
import Services from "../Services/Services";
import LatestCourses from "../Latest-Courses/LatestCourses";

export default function Main () {
    return (
        <main className='space-y-14 py-5'>
            <Introduction></Introduction>
            <Services></Services>
            <LatestCourses></LatestCourses>
        </main>
    )
}
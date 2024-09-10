import SectionTitle from "../SectionTitle/SectionTitle";
import SectionLinkBtn from "../SectionLinkBtn/SectionLinkBtn";
import Course from "./Course";
export default function LatestCourses() {

    let courses = [
        {id: 1, title: 'آموزش فلاتر از صفر', price: 1_990_000, costPrice: 1_250_000, isFree: false, time: 25, sections: 12, isCompleted: true, teacher: 'حسین رستمی', img: 'images/Courses/03.jpg'},
        {id: 2, title: 'آموزش پروژه محور ری اکت و نکست', price: 1_560_000, costPrice: 0, isFree: false, time: 32, sections: 24, isCompleted: true, teacher: 'حسین رستمی', img: 'images/Courses/01.jpg'},
        {id: 3, title: 'قدم صفر برنامه نویسی', price: 0, costPrice: 0, isFree: true, time: 8, sections: 4, isCompleted: true, teacher: 'حسین رستمی', img: 'images/Courses/02.jpg'}
    ]

    return (
        <section>
            <div className="container">
                {/*  Section Header  */}
                <div className='bg-gradient-to-l from-zinc-100 dark:from-mirage to-white dark:to-black rounded-2xl flex items-center justify-between p-2.5 sm:p-5'>
                    <SectionTitle></SectionTitle>
                    <SectionLinkBtn></SectionLinkBtn>
                </div>
                {/*  Section Content  */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-5'>
                    {
                        courses.map(course => {
                            return (
                                <Course key={course.id} {...course}></Course>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
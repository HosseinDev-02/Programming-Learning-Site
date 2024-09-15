import SectionTitle from "../SectionTitle/SectionTitle";
import SectionLinkBtn from "../SectionLinkBtn/SectionLinkBtn";
import Course from "./Course";
import { useState } from "react";

export default function LatestCourses() {

    const [courses] = useState([
        {id: 1, title: 'آموزش فلاتر از صفر', price: 1_990_000, costPrice: 1_250_000, isFree: false, time: 25, sections: 12, isCompleted: true, teacher: 'حسین رستمی', img: 'Programming-Learning-Site/images/Courses/03.jpg', teacherImg: 'Programming-Learning-Site/images/profile.jpeg'},
        {id: 2, title: 'آموزش پروژه محور ری اکت و نکست', price: 1_560_000, costPrice: 0, isFree: false, time: 32, sections: 24, isCompleted: true, teacher: 'حسین رستمی', img: 'Programming-Learning-Site/images/Courses/01.jpg', teacherImg: 'Programming-Learning-Site/images/profile.jpeg'},
        {id: 3, title: 'قدم صفر برنامه نویسی', price: 0, costPrice: 0, isFree: true, time: 8, sections: 4, isCompleted: true, teacher: 'حسین رستمی', img: 'Programming-Learning-Site/images/Courses/02.jpg', teacherImg: 'Programming-Learning-Site/images/profile.jpeg'}
    ])

    return (
        <section>
            <div className="container">
                {/*  Section Header  */}
                <div className='bg-gradient-to-l from-secondary to-background rounded-2xl flex items-center justify-between p-2.5 sm:p-5'>
                    <SectionTitle title='آخرین دوره های' text='منتشر شده'></SectionTitle>
                    <SectionLinkBtn icon='#arrow-up-left' text='مشاهده همه'></SectionLinkBtn>
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
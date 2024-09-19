import SectionTitle from "../../SectionTitle/SectionTitle";
import SectionLinkBtn from "../../SectionLinkBtn/SectionLinkBtn";
import Course from "./Course";
import {useState} from "react";
import data from "../../../data";

export default function LatestCourses() {

    const [courses] = useState(data)

    return (
        <section>
            <div className="container">
                {/*  Section Header  */}
                <div
                    className='bg-gradient-to-l from-secondary to-background rounded-2xl flex items-center justify-between p-2.5 sm:p-5'>
                    <SectionTitle color='#09090B' title='آخرین دوره های' text='منتشر شده'></SectionTitle>
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
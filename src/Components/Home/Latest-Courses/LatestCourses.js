import SectionTitle from "../../Titles/SectionTitle";
import SectionLinkBtn from "../../Buttons/SectionLinkBtn";
import Course from "./Course";
import {useState} from "react";
import data from "../../../data";
import SectionHeader from "../../SectionHeader/SectionHeader";

export default function LatestCourses() {

    const [courses] = useState(data)

    return (
        <section>
            <div className="container">
                {/*  Section Header  */}
                    <SectionHeader>
                        <SectionTitle title='آخرین دوره های' text='منتشر شده'></SectionTitle>
                        <SectionLinkBtn href='/courses' icon='#arrow-up-left' text='مشاهده همه'></SectionLinkBtn>
                    </SectionHeader>
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
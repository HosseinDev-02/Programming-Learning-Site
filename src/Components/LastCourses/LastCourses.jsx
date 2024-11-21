import SectionTitle from "../Titles/SectionTitle";
import SectionLinkBtn from "../Buttons/SectionLinkBtn";
import Course from "../Course/Course";
import { useEffect, useState } from "react";
import {courses} from "../../data";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LatestCourses() {
    const [lastCourses, setLastCourses] = useState([])

    useEffect(() => {
        const mainReverseCourses = courses.slice().reverse()
        setLastCourses(mainReverseCourses)
    }, []);

    return (
        <section>
            <div className="container">
                {/*  Section Header  */}
                <SectionHeader>
                    <SectionTitle
                        title="آخرین دوره های"
                        text="منتشر شده"
                    ></SectionTitle>
                    <SectionLinkBtn
                        href="/courses"
                        icon="#arrow-up-left"
                        text="مشاهده همه"
                    ></SectionLinkBtn>
                </SectionHeader>
                {/*  Section Content  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-5">
                    {lastCourses.length &&
                        lastCourses.splice(0, 3).map((course) => {
                            return (
                                <Course key={course.id} {...course}></Course>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

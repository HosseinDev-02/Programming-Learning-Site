import SectionTitle from "../../../Components/Titles/SectionTitle";
import SectionLinkBtn from "../../../Components/Buttons/SectionLinkBtn";
import Course from "../../../Components/Course/Course";
import { useEffect, useState } from "react";
import {courses as data} from "../../../data";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

export default function LatestCourses() {
    const [courses, setCourses] = useState([]);
    // const [latestCourses, setLatestCourses] = useState([]);

    useEffect(() => {
        setCourses(data)
        // getLatestCourses();
    });

    // const getLatestCourses = async () => {
    //     let mainCourses = await getCourses();
    //     let selectedCourses = [...mainCourses].reverse().splice(0, 3);
    //     setLatestCourses(selectedCourses);
    // }

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
                    {courses.length &&
                        courses.map((course) => {
                            return (
                                <Course key={course.id} {...course}></Course>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

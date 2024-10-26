import SectionTitle from "../../../Titles/SectionTitle";
import SectionLinkBtn from "../../../Buttons/SectionLinkBtn";
import Course from "./Course";
import { useEffect, useState } from "react";
import data from "../../../../data";
import SectionHeader from "../../../SectionHeader/SectionHeader";
import { getCourses } from "../../../../Utils";

export default function LatestCourses() {
    const [courses] = useState(data);
    const [latestCourses, setLatestCourses] = useState([]);

    useEffect(() => {
        getLatestCourses();
    });

    const getLatestCourses = async () => {
        let mainCourses = await getCourses();
        let selectedCourses = [...mainCourses].reverse().splice(0, 3);
        setLatestCourses(selectedCourses);
    }

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
                    {latestCourses.length &&
                        latestCourses.map((course) => {
                            return (
                                <Course key={course.course_id} {...course}></Course>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

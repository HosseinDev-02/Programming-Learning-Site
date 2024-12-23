import SubTitle from "../../Titles/SubTitle";
import UserCourse from "../Counter/UserCourse";
import { useEffect, useState } from "react";
import { userCourses } from "../../../data";
export default function UserCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(userCourses)
    }, []);

    return (
        <>
            <div className="my-5">
                <SubTitle title="دوره های من"></SubTitle>
                <div className="overflow-x-auto">
                    <ul className="bg-secondary rounded-full inline-flex items-center gap-5 border border-border p-1 mt-5">
                        <li>
                            <button className="flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors user-courses-menu__item--active">
                                <span>
                                    <svg className="w-5 h-5">
                                        <use href="#education"></use>
                                    </svg>
                                </span>
                                <span className="text-sm font-YekanBakh-Bold text-nowrap">
                                    در حال برگزاری
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors">
                                <span>
                                    <svg className="w-5 h-5">
                                        <use href="#document-text"></use>
                                    </svg>
                                </span>
                                <span className="text-sm font-YekanBakh-Bold text-nowrap">
                                    تکمیل شده
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {courses.map((course) => (
                    <UserCourse
                        key={course.id}
                        {...course}
                    ></UserCourse>
                ))}
            </div>
        </>
    );
}

import SubTitle from "../../../Titles/SubTitle";
import UserCourse from "../Counter/UserCourse";
import { useEffect, useState } from "react";
import { getUserCourses } from "../../../../Utils";
export default function UserCourses() {
    const [courses, setCourses] = useState([]);
    const [mainCourses, setMainCourses] = useState([])
    const [activeTab, setActiveTab] = useState(false)
    const [showCompletedCourse, setShowCompletedCourse] = useState(false);

    useEffect(() => {
        getCourses();
    }, [showCompletedCourse]);

    const getCourses = async () => {
        const data = await getUserCourses();
        let coursesArray = []
        data.forEach(order => {
            if(order.courses.isCompleted === showCompletedCourse) {
                coursesArray.push(order.courses)
            }
        })
        setMainCourses(coursesArray)
        setCourses(data);
    };

    return (
        <>
            <div className="my-5">
                <SubTitle title="دوره های من"></SubTitle>
                <div className="overflow-x-auto">
                    <ul className="bg-secondary rounded-full inline-flex items-center gap-5 border border-border p-1 mt-5">
                        <li>
                            <button onClick={() => setShowCompletedCourse(false)} className="flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors user-courses-menu__item--active">
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
                            <button onClick={() => setShowCompletedCourse(true)} className="flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors">
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
                {mainCourses.map((course) => (
                    <UserCourse
                        key={course.course_id}
                        {...course}
                    ></UserCourse>
                ))}
            </div>
        </>
    );
}

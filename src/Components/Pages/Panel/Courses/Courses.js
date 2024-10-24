import SubTitle from "../../../Titles/SubTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../../../../database";
import { getCourses, MySwal } from "../../../../Utils";
import TableModalAction from "../../../Modals/TableModalAction";
import TableModalDetail from "../../../Modals/TableModalDetail";
import EmptyTableMsg from "../../../Modals/EmptyTableMsg";

export default function Courses() {
    const [courses, setCourses] = useState([]);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showActionModal, setShowActionModal] = useState(false);
    const [mainCourse, setMainCourse] = useState({});
    const [courseId, setCourseId] = useState(null);

    useEffect(() => {
        getAllCourses();
    }, []);

    async function getAllCourses() {
        const data = await getCourses();
        setCourses(data);
    }

    function removeCourseHandler(courseId) {
        MySwal.fire({
            title: "از حذف دوره اطمینان دارید ؟",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر",
        }).then(async (res) => {
            if (res.isConfirmed) {
                const response = await supabase
                    .from("courses")
                    .delete()
                    .eq("course_id", courseId);
                if (response.status === 204) {
                    MySwal.fire({
                        title: "دوره با موفقیت حذف شد",
                        icon: "success",
                        confirmButtonText: "اوکی",
                    });
                    setShowActionModal(false)
                    getAllCourses();
                }
            }
        });
    }

    const showActionModalHandler = () => {
        setShowActionModal(true);
    };

    const closeActionModalHandler = () => {
        setShowActionModal(false);
    };

    const showDetailModalHandler = () => {
        setShowDetailModal(true);
    };

    const closeDetailModalHandler = () => {
        setShowDetailModal(false);
    };

    function showCourseText(text) {
        MySwal.fire({
            text: text,
            icon: "info",
            confirmButtonText: "مطالعه شد",
        });
    }

    return (
        <div className="w-full h-full">
            <div className="h-12 md:h-20 flex items-center">
                <SubTitle
                    className="text-lg md:text-2xl"
                    title="دوره ها"
                ></SubTitle>
            </div>
            <div className="pt-8 md:pt-10 relative">
                {courses.length ? (
                    <table className="w-full z-10">
                        <thead className="text-xs h-12 font-YekanBakh-Black child:text-nowrap">
                            <tr className="border-b border-border child:px-3">
                                <th className="lg:hidden"></th>
                                <th className="hidden lg:table-cell">شناسه</th>
                                <th>عنوان</th>
                                <th>تصویر</th>
                                <th className="hidden sm:table-cell">قیمت</th>
                                <th className="hidden md:table-cell">تخفیف</th>
                                <th className="hidden md:table-cell">
                                    تایم آموزش
                                </th>
                                <th className="hidden md:table-cell">فصل ها</th>
                                <th className="hidden md:table-cell">وضعیت</th>
                                <th className="hidden sm:table-cell">
                                    توضیحات
                                </th>
                                <th className="hidden lg:table-cell">
                                    نام کوتاه
                                </th>
                                <th className="hidden lg:table-cell">عمل ها</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                <tr
                                    key={course.course_id}
                                    className="text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap"
                                >
                                    <td className="lg:hidden">
                                        <div className="flex items-center justify-center relative">
                                            <span
                                                onClick={() => {
                                                    showActionModalHandler();
                                                    setCourseId(
                                                        course.course_id
                                                    );
                                                    setMainCourse(course);
                                                }}
                                            >
                                                <svg className="w-4 h-4">
                                                    <use href="#submenu"></use>
                                                </svg>
                                            </span>
                                        </div>
                                    </td>
                                    <td className="hidden lg:table-cell">
                                        {index + 1}
                                    </td>
                                    <td>
                                        <p className="whitespace-nowrap text-ellipsis overflow-hidden max-w-36 mx-auto">
                                            {course.title}
                                        </p>
                                    </td>
                                    <td>
                                        <div className="w-16 h-12 flex items-center justify-center mx-auto">
                                            <img
                                                className="rounded object-cover"
                                                src={course.courseImg}
                                                alt={course.title}
                                            />
                                        </div>
                                    </td>
                                    <td className="hidden sm:table-cell">
                                        {course.price
                                            ? course.price.toLocaleString()
                                            : "---"}
                                    </td>
                                    <td className="hidden md:table-cell">
                                        {course.offer
                                            ? `%${course.offer}`
                                            : `---`}
                                    </td>
                                    <td className="hidden md:table-cell">
                                        {course.totalTime}
                                    </td>
                                    <td className="hidden md:table-cell">
                                        {course.sections}
                                    </td>
                                    <td className="text-xs hidden md:table-cell">
                                        {course.isCompleted ? (
                                            <span className="bg-green-500 rounded p-0.5">
                                                تکمیل شده
                                            </span>
                                        ) : (
                                            <span className="bg-yellow-500 rounded p-0.5">
                                                درحال برگزاری
                                            </span>
                                        )}
                                    </td>
                                    <td className="hidden sm:table-cell">
                                        {
                                            <span
                                                onClick={() =>
                                                    showCourseText(
                                                        course.description
                                                    )
                                                }
                                                className="flex items-center justify-center py-1 rounded bg-primary text-white cursor-pointer"
                                            >
                                                نمایش
                                            </span>
                                        }
                                    </td>
                                    <td className="hidden lg:table-cell">
                                        {course.shortName}
                                    </td>
                                    <td className="hidden lg:table-cell">
                                        <div className="flex items-center gap-2 justify-center">
                                            <Link
                                                to={`../course-form/${course.course_id}`}
                                                className="cursor-pointer text-primary"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#edit"></use>
                                                </svg>
                                            </Link>
                                            <span
                                                onClick={() =>
                                                    removeCourseHandler(
                                                        course.course_id
                                                    )
                                                }
                                                className="cursor-pointer text-red-500"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#x-mark"></use>
                                                </svg>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <EmptyTableMsg title="دوره ای یافت نشد !"></EmptyTableMsg>
                )}

                {/* Course Action Modal */}

                {showActionModal && (
                    <TableModalAction
                        id={courseId}
                        closeActionModalHandler={closeActionModalHandler}
                        removeHandler={removeCourseHandler}
                        showDetailModalHandler={showDetailModalHandler}
                        editHandler={`../course-form/${courseId}`}
                    ></TableModalAction>
                )}

                {/* User Detail Modal */}
                {showDetailModal && (
                    <TableModalDetail
                        closeDetailModalHandler={closeDetailModalHandler}
                        title="مشخصات دوره"
                    >
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                نام دوره
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainCourse.title}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                تصویر
                            </span>
                            <span className="w-16 h-16 mx-auto rounded-md overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src={mainCourse.courseImg}
                                    alt={mainCourse.title}
                                />
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                قیمت
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainCourse.price.toLocaleString()}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                تخفیف
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainCourse.offer}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                وضعیت
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainCourse.isCompleted ? (
                                    <span className="bg-green-500 rounded p-0.5">
                                        تکمیل شده
                                    </span>
                                ) : (
                                    <span className="bg-yellow-500 rounded p-0.5">
                                        درحال برگزاری
                                    </span>
                                )}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                تایم دوره
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainCourse.totalTime}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                فصل ها
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainCourse.sections}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                مدرس دوره
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {`${mainCourse.users.firstname} ${mainCourse.users.lastname}`}
                            </span>
                        </div>
                    </TableModalDetail>
                )}
            </div>
        </div>
    );
}

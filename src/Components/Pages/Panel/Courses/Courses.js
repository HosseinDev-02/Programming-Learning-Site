import SubTitle from "../../../Titles/SubTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../../../../database";
import { getCourses, MySwal } from "../../../../Utils";
import TableModalAction from "../../../Modals/TableModalAction";

export default function Courses() {
    const [courses, setCourses] = useState([]);
    const [getData, setGetData] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [showDetailModal, setShowDetailModal] = useState(false);

    useEffect(() => {
        getAllCourses();
    }, [getData]);

    async function getAllCourses() {
        const data = await getCourses();
        setCourses(data);
        console.log(data);
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
                    setGetData((prevState) => !prevState);
                }
            }
        });
    }

    function editCourseMenuHandler(elem) {
        elem.currentTarget.nextSibling.classList.toggle("!block");
    }

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
                <table className="w-full z-10">
                    <thead className="text-xs h-12 font-YekanBakh-Black child:text-nowrap">
                        <tr className="border-b border-border child:px-3">
                            <th className="lg:hidden"></th>
                            <th className="hidden lg:table-cell">شناسه</th>
                            <th>عنوان</th>
                            <th>تصویر</th>
                            <th className="hidden sm:table-cell">قیمت</th>
                            <th className="hidden md:table-cell">تخفیف</th>
                            <th className="hidden md:table-cell">تایم آموزش</th>
                            <th className="hidden md:table-cell">فصل ها</th>
                            <th className="hidden md:table-cell">وضعیت</th>
                            <th className="hidden sm:table-cell">توضیحات</th>
                            <th className="hidden lg:table-cell">نام کوتاه</th>
                            <th className="hidden lg:table-cell">عمل ها</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.length ? (
                            courses.map((course, index) => (
                                <tr
                                    key={course.course_id}
                                    className="text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap"
                                >
                                    <td className="lg:hidden">
                                        <div className="flex items-center justify-center relative">
                                            <span
                                                onClick={() =>
                                                    setSelectedCourse(
                                                        course.course_id
                                                    )
                                                }
                                            >
                                                <svg className="w-4 h-4">
                                                    <use href="#submenu"></use>
                                                </svg>
                                            </span>
                                            <TableModalAction
                                                id={course.course_id}
                                                removeHandler={
                                                    removeCourseHandler
                                                }
                                                selectedItemAction={
                                                    selectedCourse
                                                }
                                                setSelectedItemAction={
                                                    setSelectedCourse
                                                }
                                                setShowDetailModal={
                                                    setShowDetailModal
                                                }
                                                editHandler={`../course-form/${course.course_id}`}
                                            ></TableModalAction>
                                            {/* User Detail Modal */}
                                            <div
                                                className={`fixed inset-0 items-center justify-center gap-2 flex-col bg-black/30 ${
                                                    selectedCourse ===
                                                        course.course_id &&
                                                    showDetailModal
                                                        ? "flex"
                                                        : "hidden"
                                                }`}
                                            >
                                                <span
                                                    className="flex items-center justify-center bg-secondary w-10 h-10 rounded-full"
                                                    onClick={() =>
                                                        setShowDetailModal(
                                                            false
                                                        )
                                                    }
                                                >
                                                    <svg className="w-5 h-5">
                                                        <use href="#x-mark-mini"></use>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col p-2 rounded-md bg-secondary divide-y divide-border relative max-w-64 w-full overflow-y-auto overflow-x-hidden text-wrap">
                                                    <h3 className="font-YekanBakh-Black text-title text-lg pb-2">
                                                        مشخصات دوره
                                                    </h3>
                                                    <div className="flex flex-col gap-1 py-2">
                                                        <span className="text-primary font-YekanBakh-Black">
                                                            عنوان دوره
                                                        </span>
                                                        <span className="text-caption">
                                                            {course.title}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col gap-1 py-2">
                                                        <span className="text-primary font-YekanBakh-Black">
                                                            تصویر
                                                        </span>
                                                        <span className="w-24 h-12 mx-auto rounded-md overflow-hidden">
                                                            <img
                                                                className="w-full h-full object-cover"
                                                                src={
                                                                    course.courseImg
                                                                }
                                                                alt={
                                                                    course.title
                                                                }
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col gap-1 py-2">
                                                        <span className="text-primary font-YekanBakh-Black">
                                                            قیمت
                                                        </span>
                                                        <span className="text-caption">
                                                            {course.price}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col gap-1 py-2">
                                                        <span className="text-primary font-YekanBakh-Black">
                                                            تخفیف
                                                        </span>
                                                        <span className="text-caption">
                                                            {course.offer}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col gap-1 py-2">
                                                        <span className="text-primary font-YekanBakh-Black">
                                                            تایم آموزش
                                                        </span>
                                                        <span className="text-caption">
                                                            {course.totalTime}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col gap-1 py-2">
                                                        <span className="text-primary font-YekanBakh-Black">
                                                            فصل ها
                                                        </span>
                                                        <span className="text-caption">
                                                            {course.sections}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col gap-1 py-2">
                                                        <span className="text-primary font-YekanBakh-Black">
                                                            وضعیت
                                                        </span>
                                                        <span className="text-caption">
                                                            {course.isCompleted ? (
                                                                <span className="bg-green-500 rounded p-0.5">
                                                                    تکمیل شده
                                                                </span>
                                                            ) : (
                                                                <span className="bg-yellow-500 rounded p-0.5">
                                                                    درحال
                                                                    برگزاری
                                                                </span>
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col gap-1 py-2">
                                                        <span className="text-primary font-YekanBakh-Black">
                                                            توضیحات
                                                        </span>
                                                        <span className="text-caption">
                                                            {course.description}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col gap-1 py-2">
                                                        <span className="text-primary font-YekanBakh-Black">
                                                            نام کوتاه
                                                        </span>
                                                        <span className="text-caption">
                                                            {course.shortName}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
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
                            ))
                        ) : (
                            <tr className="text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-4 font-YekanBakh-SemiBold">
                                <td className="lg:hidden">---</td>
                                <td className="hidden lg:table-cell">---</td>
                                <td>---</td>
                                <td>---</td>
                                <td className="hidden sm:table-cell">---</td>
                                <td className="hidden md:table-cell">---</td>
                                <td className="hidden md:table-cell">---</td>
                                <td className="hidden md:table-cell">---</td>
                                <td className="hidden md:table-cell">---</td>
                                <td className="hidden sm:table-cell">---</td>
                                <td className="hidden lg:table-cell">---</td>
                                <td className="hidden lg:table-cell">---</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

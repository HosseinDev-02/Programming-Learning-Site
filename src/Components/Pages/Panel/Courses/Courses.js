import SubTitle from "../../../Titles/SubTitle";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import supabase from "../../../../database";
import {getCourses, MySwal} from "../../../../Utils";

export default function Courses() {

    const [courses, setCourses] = useState([])
    const [getData, setGetData] = useState(false)
    const [editMenuShow, setEditMenuShow] = useState(false)

    useEffect(() => {
        getAllCourses()
    }, [getData]);

    async function getAllCourses() {
        const data = await getCourses()
        setCourses(data)
        console.log(data)
    }

    function removeCourseHandler(courseId) {
        MySwal.fire({
            title: 'از حذف دوره اطمینان دارید ؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        })
            .then(async res => {
                if (res.isConfirmed) {
                    const response = await supabase.from('courses').delete().eq('course_id', courseId)
                    if (response.status === 204) {
                        MySwal.fire({
                            title: 'دوره با موفقیت حذف شد',
                            icon: 'success',
                            confirmButtonText: 'اوکی'
                        })
                        setGetData(prevState => !prevState)
                    }
                }
            })
    }

    function editCourseMenuHandler(elem) {
        elem.currentTarget.nextSibling.classList.toggle('!block')
    }

    function showCourseText(text) {
        MySwal.fire({
            text: text,
            icon: 'info',
            confirmButtonText: 'مطالعه شد'
        })
    }

    return (
        <div className='w-full h-full'>
            <div className='h-12 md:h-20 flex items-center'>
                <SubTitle className='text-lg md:text-2xl' title='دوره ها'></SubTitle>
            </div>
            <div className='pt-8 md:pt-10 relative'>
                <table className='w-full z-10'>
                    <thead
                        className='text-xs h-12 font-YekanBakh-Black child:text-nowrap'>
                    <tr className='border-b border-border child:px-3'>
                        <th className='lg:hidden'>

                        </th>
                        <th className='hidden lg:table-cell'>
                            شناسه
                        </th>
                        <th>
                            عنوان
                        </th>
                        <th>
                            تصویر
                        </th>
                        <th className='hidden sm:table-cell'>
                            قیمت
                        </th>
                        <th className='hidden md:table-cell'>
                            تخفیف
                        </th>
                        <th className='hidden md:table-cell'>
                            تایم آموزش
                        </th>
                        <th className='hidden md:table-cell'>
                            فصل ها
                        </th>
                        <th className='hidden md:table-cell'>
                            وضعیت
                        </th>
                        <th className='hidden sm:table-cell'>
                            توضیحات
                        </th>
                        <th className='hidden lg:table-cell'>
                            نام کوتاه
                        </th>
                        <th className='hidden lg:table-cell'>
                            عمل ها
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        courses.length ? (
                            courses.map((course, index) => (
                                <tr key={course.course_id}
                                    className='text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap'>
                                    <td className='lg:hidden'>
                                        <div className='flex items-center justify-center relative'>
                                                <span onClick={(elem) => editCourseMenuHandler(elem)}>
                                                    <svg className='w-4 h-4'>
                                                        <use href='#submenu'></use>
                                                    </svg>
                                                </span>
                                            <div
                                                className='bg-background rounded p-4 absolute bottom-full right-full shadow hidden z-10'>
                                                <ul className='flex flex-col gap-4'>
                                                    <li>
                                                        <Link to={`../course-form/${course.course_id}`}
                                                              className='cursor-pointer text-primary flex items-center gap-1'>
                                                            <svg className='w-4 h-4'>
                                                                <use href='#pencil-mini'></use>
                                                            </svg>
                                                            <span
                                                                className='text-xs font-YekanBakh-SemiBold'>ویرایش</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                            <span onClick={() => removeCourseHandler(course.course_id)}
                                                                  className='cursor-pointer text-red-500 flex items-center gap-1'>
                                                                <svg className='w-4 h-4'>
                                                                        <use href='#x-mark-mini'></use>
                                                                    </svg>
                                                                <span className='text-xs font-YekanBakh-SemiBold'>
                                                                        حذف
                                                                    </span>
                                                            </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='hidden lg:table-cell'>
                                        {
                                            index + 1
                                        }
                                    </td>
                                    <td>
                                        {
                                            course.title
                                        }
                                    </td>
                                    <td>
                                        <div className='w-16 h-12 flex items-center justify-center mx-auto'>
                                            <img className='rounded object-cover' src={course.courseImg}
                                                 alt={course.title}/>
                                        </div>
                                    </td>
                                    <td className='hidden sm:table-cell'>
                                        {
                                            course.price ? (course.price.toLocaleString()) : '---'
                                        }
                                    </td>
                                    <td className='hidden md:table-cell'>
                                        {
                                            course.offer ? `%${course.offer}` : `---`
                                        }
                                    </td>
                                    <td className='hidden md:table-cell'>
                                        {
                                            course.totalTime
                                        }
                                    </td>
                                    <td className='hidden md:table-cell'>
                                        {
                                            course.sections
                                        }
                                    </td>
                                    <td className='text-xs hidden md:table-cell'>
                                        {
                                            course.isCompleted ? (
                                                <span className='bg-green-500 rounded p-0.5'>تکمیل شده</span>
                                            ) : (
                                                <span className='bg-yellow-500 rounded p-0.5'>درحال برگزاری</span>
                                            )
                                        }
                                    </td>
                                    <td className='hidden sm:table-cell'>
                                        {
                                            <span onClick={() => showCourseText(course.description)} className='flex items-center justify-center py-1 rounded bg-primary text-white cursor-pointer'>نمایش</span>
                                        }
                                    </td>
                                    <td className='hidden lg:table-cell'>
                                        {
                                            course.shortName
                                        }
                                    </td>
                                    <td className='hidden lg:table-cell'>
                                        <div className='flex items-center gap-2 justify-center'>
                                            <Link to={`../course-form/${course.course_id}`}
                                                  className='cursor-pointer text-primary'>
                                                <svg className='w-5 h-5'>
                                                    <use href='#edit'></use>
                                                </svg>
                                            </Link>
                                            <span onClick={() => removeCourseHandler(course.course_id)}
                                                  className='cursor-pointer text-red-500'>
                                                <svg className='w-5 h-5'>
                                                    <use href='#x-mark'></use>
                                                </svg>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-4 font-YekanBakh-SemiBold'>
                                <td className='lg:hidden'>
                                    ---
                                </td>
                                <td className='hidden lg:table-cell'>
                                    ---
                                </td>
                                <td>
                                    ---
                                </td>
                                <td>
                                    ---
                                </td>
                                <td className='hidden sm:table-cell'>
                                    ---
                                </td>
                                <td className='hidden md:table-cell'>
                                    ---
                                </td>
                                <td className='hidden md:table-cell'>
                                    ---
                                </td>
                                <td className='hidden md:table-cell'>
                                    ---
                                </td>
                                <td className='hidden md:table-cell'>
                                    ---
                                </td>
                                <td className='hidden sm:table-cell'>
                                    ---
                                </td>
                                <td className='hidden lg:table-cell'>
                                    ---
                                </td>
                                <td className='hidden lg:table-cell'>
                                    ---
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
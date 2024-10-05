import SubTitle from "../../../Titles/SubTitle";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import supabase from "../../../../database";
import {getCourses, MySwal} from "../../../../Utils";

export default function Courses() {

    const [courses, setCourses] = useState([])
    const [getData, setGetData] = useState(false)

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
                        }).then(res => {
                            if (res.isConfirmed) {
                                setGetData(prevState => !prevState)
                            }
                        })
                    }
                }
            })
    }

    return (
        <div className='w-full h-full'>
            <div className='h-20 flex items-center'>
                <SubTitle fontSize='24px' title='دوره ها'></SubTitle>
            </div>
            <div>
                <div className='space-y-2 pt-10 relative'>
                    <table className='w-full'>
                        <thead
                            className='text-xs h-12 font-YekanBakh-Black child:text-nowrap'>
                        <tr className='border-b border-border child:px-3'>
                            <th>
                                شناسه
                            </th>
                            <th>
                                عنوان
                            </th>
                            <th>
                                تصویر
                            </th>
                            <th>
                                قیمت
                            </th>
                            <th>
                                تخفیف
                            </th>
                            <th>
                                تایم آموزش
                            </th>
                            <th>
                                فصل ها
                            </th>
                            <th>
                                وضعیت
                            </th>
                            <th>
                                دسته بندی
                            </th>
                            <th>
                                مدرس
                            </th>
                            <th>
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
                                        <td>
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
                                                <img className='rounded object-cover'
                                                     src={course.courseImg}
                                                     alt={course.title}/>
                                            </div>
                                        </td>
                                        <td>
                                            {
                                                course.price.toLocaleString()
                                            }
                                        </td>
                                        <td>
                                            {
                                                `%${course.offer}`
                                            }
                                        </td>
                                        <td>
                                            {
                                                course.totalTime
                                            }
                                        </td>
                                        <td>
                                            {
                                                course.sections
                                            }
                                        </td>
                                        <td className='text-xs' style={course.isCompleted ? {color: 'rgb(var(--color-success))'} : {color: 'rgb(234, 179, 8)'}}>
                                            {
                                                course.isCompleted ? 'تکمیل شده' : 'در حال برگزاری'
                                            }
                                        </td>
                                        <td>
                                            {
                                                course.categories.title
                                            }
                                        </td>
                                        <td>
                                            {
                                                course.teacherName
                                            }
                                        </td>
                                        <td>
                                            <div className='flex items-center gap-2 justify-center'>
                                                <Link to={`../course-form/${course.course_id}`}
                                                      className='cursor-pointer text-primary'>
                                                    <svg className='w-4 h-4'>
                                                        <use href='#edit'></use>
                                                    </svg>
                                                </Link>
                                                <span onClick={() => removeCourseHandler(course.course_id)}
                                                      className='cursor-pointer text-red-500'>
                                                <svg className='w-4 h-4'>
                                                    <use href='#x-mark'></use>
                                                </svg>
                                            </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-4'>
                                    <td className='text-title font-YekanBakh-Black'>
                                    ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td className='text-title font-YekanBakh-Black'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
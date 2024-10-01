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
                if(res.isConfirmed) {
                    const response = await supabase.from('courses').delete().eq('course_id', courseId)
                    if(response.status === 204) {
                        MySwal.fire({
                            title: 'دوره با موفقیت حذف شد',
                            icon: 'success',
                            confirmButtonText: 'اوکی'
                        }).then(res => {
                            if(res.isConfirmed) {
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
                <div className='space-y-2 pt-10 relative overflow-auto'>
                    <table className='w-full'>
                        <thead className='text-xs md:text-sm h-12 text-center font-YekanBakh-Black text-title child:text-nowrap'>
                        <tr className='border-b border-border child:px-4'>
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
                                قیمت نهایی
                            </th>
                            <th>
                                تایم آموزش
                            </th>
                            <th>
                                فصل ها
                            </th>
                            <th>
                                رایگان
                            </th>
                            <th>
                                وضعیت
                            </th>
                            <th>
                                مدرس
                            </th>
                            <th>
                                تصویر مدرس
                            </th>
                            <th>
                                ویرایش
                            </th>
                            <th>
                                حذف
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            courses.length ? (
                                courses.map((course, index) => (
                                    <tr key={course.course_id}
                                        className='text-center text-xs md:text-sm h-20 odd:bg-background even:bg-secondary child:px-4 child:text-nowrap'>
                                        <td className='text-title font-YekanBakh-Black'>
                                            {
                                                index + 1
                                            }
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            <div className='flex items-center justify-center line-clamp-1'>
                                                {
                                                    course.title
                                                }
                                            </div>
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            <div className='flex items-center justify-center w-20 h-16 rounded-xl overflow-hidden'>
                                                <img className='w-full h-full object-cover shrink-0' src={course.courseImg}
                                                     alt={course.title}/>
                                            </div>
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            {
                                                course.price.toLocaleString()
                                            }
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            {
                                                `%${course.offer}`
                                            }
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            {
                                                course.costPrice.toLocaleString()
                                            }
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            {
                                                course.totalTime
                                            }
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            {
                                                course.sections
                                            }
                                        </td>
                                        <td style={course.isFree ? {color: 'rgb(var(--color-success))'} : {color: 'rgb(239, 68, 68)'}} className='font-YekanBakh-SemiBold'>
                                            {
                                                course.isFree ? 'رایگان' : 'خیر'
                                            }
                                        </td>
                                        <td style={course.isCompleted ? {color: 'rgb(var(--color-success))'} : {color: 'rgb(234, 179, 8)'}} className='font-YekanBakh-SemiBold'>
                                            {
                                                course.isCompleted ? 'تکمیل شده' : 'در حال برگزاری'
                                            }
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            {
                                                course.teacherName
                                            }
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-center w-20 h-16 rounded-xl overflow-hidden'>
                                                <img className='shrink-0 w-full h-full object-cover' src={course.teacherImg}
                                                     alt={course.teacherName}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-center text-primary'>
                                                <Link to={`../course-form/${course.course_id}`}
                                                      className='cursor-pointer'>
                                                    <svg className='w-4 h-4 md:w-6 md:h-6'>
                                                        <use href='#edit'></use>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-center text-red-500'>
                                            <span onClick={() => removeCourseHandler(course.course_id)}
                                                  className='cursor-pointer'>
                                                <svg className='w-4 h-4 md:w-6 md:h-6'>
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
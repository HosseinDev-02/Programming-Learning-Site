import SubTitle from "../../../Titles/SubTitle";
import PrimaryButton from "../../../Buttons/PrimaryButton";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCourses, getSessions, MySwal} from "../../../../Utils";
import supabase from "../../../../database";

export default function SessionForm() {

    const params = useParams()
    const sessionId = params.id
    const [sessionTitle, setSessionTitle] = useState('')
    const [sessionTime, setSessionTime] = useState('')
    const [coursesMenuShow, setCoursesMenuShow] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState('')
    const [courses, setCourses] = useState([])
    const [courseId, setCourseId] = useState('')

    useEffect(() => {
        if(sessionId) {
            getMainSession()
        }
        getAllCourses()
    }, []);

    async function getAllCourses() {
        const data = await getCourses()
        setCourses(data)
    }

    async function getMainSession() {
        const data = await getSessions()
        const mainSession = data.find(session => session.session_id === sessionId)
        setSessionTime(mainSession.time)
        setSessionTitle(mainSession.title)
        setSelectedCourse(mainSession.courses.title)
        setCourseId(mainSession.courses.course_id)
    }

    async function selectCourse(elem) {
        setCourseId(elem.target.dataset.id)
        setSelectedCourse(elem.target.innerHTML)
        setCoursesMenuShow(prevState => !prevState)
    }

    async function editSession() {

        MySwal.fire({
            title: 'آیا از انجام این کار اطمینان دارید ؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        })
            .then(async res => {
                if (res.isConfirmed) {
                    const response = await supabase.from('sessions').update({
                        title: sessionTitle,
                        time: sessionTime,
                        course_id: courseId
                    }).eq('session_id', sessionId)
                    if (response.status === 204) {
                        MySwal.fire({
                            title: 'بروزرسانی انجام شد', icon: 'success', confirmButtonText: 'اوکی'
                        })
                            .then(res => {
                                if (res.isConfirmed) {
                                    window.history.back()
                                }
                            })
                    }
                }
            })
    }

    function clearStates() {
        setSessionTime('')
        setSessionTitle('')
        setSelectedCourse('')
        setCourseId('')
    }

    async function addNewSession() {
        let newSession = {
            title: sessionTitle,
            time: sessionTime,
            course_id: courseId
        }
        const response = await supabase.from('sessions').insert(newSession)
        if(response.status === 201){
            MySwal.fire({
                title: 'جلسه با موفقیت ثبت شد',
                icon: 'success',
                confirmButtonText: 'اوکی'
            })
                .then(res => {
                    if(res.isConfirmed) {
                        clearStates()
                    }
                })
        }
    }

    return (
        <div className='w-full h-full'>
            <div className='h-20 flex items-center'>
                {
                    sessionId ? (
                        <SubTitle fontSize='24px' title='ویرایش جلسه'></SubTitle>
                    ) : (
                        <SubTitle fontSize='24px' title='افزودن جلسه'></SubTitle>
                    )
                }
            </div>
            <div className='flex flex-col gap-5 pt-10'>
                <div
                    className='flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start md:items-center lg:items-start justify-between gap-5'>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            عنوان جلسه
                        </label>
                        <input value={sessionTitle} onChange={(e) => setSessionTitle(e.target.value)}
                               className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            تایم جلسه
                        </label>
                        <input value={sessionTime} onChange={(e) => setSessionTime(e.target.value)}
                               className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/4'>
                        <span className='text-xs font-YekanBakh-SemiBold'>انتخاب دوره</span>
                        <div className='w-full rounded-2xl relative space-y-2'>
                            <button onClick={() => setCoursesMenuShow(prevState => !prevState)}
                                    className='flex items-center w-full justify-between px-4 outline-none bg-background rounded-2xl h-11 text-title font-YekanBakh-SemiBold'>
                                        <span className='text-xs'>
                                            {selectedCourse ? selectedCourse : 'انتخاب کنید'}
                                        </span>
                                <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-down'></use>
                                            </svg>
                                        </span>
                            </button>
                            <div style={coursesMenuShow ? {display: 'block'} : {display: 'none'}}
                                 className='bg-background shadow rounded-2xl overflow-hidden transition-all absolute right-0 left-0 top-11 z-10'>
                                <ul onClick={(elem) => selectCourse(elem)}
                                    className='text-xs font-YekanBakh-SemiBold flex flex-col'>
                                    {courses.map(course => (
                                        <li data-id={course.course_id} key={course.course_id}
                                            className='py-3 px-4 hover:bg-background transition-colors hover:text-title cursor-pointer'>
                                            {course.title}
                                        </li>))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='inline-flex items-center gap-3 mt-5'>
                {
                    sessionId ? (
                        <>
                            <PrimaryButton clickEvent={() => editSession()} icon='#check' title='بروزرسانی'></PrimaryButton>
                            <PrimaryButton className='bg-red-500' clickEvent={() => window.history.back()}
                                           icon='#x-mark' title='بازگشت'></PrimaryButton>
                        </>
                    ) : (
                        <PrimaryButton clickEvent={() => addNewSession()} icon='#check'
                                       title='ثبت جلسه جدید'></PrimaryButton>
                    )
                }
            </div>
        </div>
    )
}
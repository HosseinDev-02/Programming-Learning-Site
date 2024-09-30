import SubTitle from "../../../Titles/SubTitle";
import PrimaryButton from "../../../Buttons/PrimaryButton";
import {useEffect, useState} from "react";
import supabase from "../../../../database";
import {MySwal} from "../../../../utils";

export default function CourseForm() {

    const [courseIsFree, setCourseIsFree] = useState(false)
    const [courseIsCompleted, setCourseIsCompleted] = useState(false)
    const [courseTitle, setCourseTitle] = useState('')
    const [coursePrice, setCoursePrice] = useState('')
    const [courseImg, setCourseImg] = useState('')
    const [courseTeacherName, setCourseTeacherName] = useState('')
    const [courseTeacherImg, setCourseTeacherImg] = useState('')
    const [courseSections, setCourseSections] = useState('')
    const [courseTotalTime, setCourseTotalTime] = useState('')
    const [courseOffer, setCourseOffer] = useState('')

    function clearStates () {
        setCourseIsFree(false)
        setCourseIsCompleted(false)
        setCourseTitle('')
        setCoursePrice('')
        setCourseImg('')
        setCourseTeacherName('')
        setCourseTeacherImg('')
        setCourseSections('')
        setCourseTotalTime('')
        setCourseOffer('')
    }

    async function addNewCourse () {
        let newCourse = {
            title: courseTitle,
            price: coursePrice,
            courseImg: courseImg,
            costPrice: coursePrice - (coursePrice * (courseOffer/100)),
            offer: +courseOffer,
            teacherName: courseTeacherName,
            teacherImg: courseTeacherImg,
            isFree: courseIsFree,
            isCompleted: courseIsCompleted,
            totalTime: courseTotalTime,
            sections: courseSections
        }
        const response = await supabase.from('courses').insert(newCourse)
        if (response.status === 201) {
            MySwal.fire({
                title: 'دوره با موفقیت ثبت شد',
                icon: 'success',
                confirmButtonText: 'اوکی'
            })
                .then(res => {
                    if (res.isConfirmed) {
                        clearStates()
                    }
                })
        }
    }

    return (
        <div className='w-full h-full'>
            <div className='h-20 flex items-center'>
                <SubTitle fontSize='24px' title='افزودن دوره'></SubTitle>
            </div>
            <div className='flex flex-col gap-5 pt-10'>
                <div
                    className='flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start flex-wrap md:items-center lg:items-start justify-between gap-5'>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/4'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            عنوان
                        </label>
                        <input onChange={(e) => setCourseTitle(e.target.value)}
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/4'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            قیمت
                        </label>
                        <input onChange={(e) => setCoursePrice(e.target.value)}
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/4'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            تخفیف
                        </label>
                        <input onChange={(e) => setCourseOffer(e.target.value)}
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/4'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            مجموع آموزش
                        </label>
                        <input onChange={(e) => setCourseTotalTime(e.target.value)}
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/4'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            تعداد فصل ها
                        </label>
                        <input onChange={(e) => setCourseSections(e.target.value)}
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/4'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            مدرس
                        </label>
                        <input onChange={(e) => setCourseTeacherName(e.target.value)}
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex gap-5 items-center w-full sm:w-1/3 md:w-full lg:w-1/4'>
                        <div
                            className="flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/4 bg-secondary rounded-xl overflow-hidden">
                                <span className="text-xs font-YekanBakh-SemiBold">
                                    رایگان
                                </span>
                            <label className='flex items-center justify-center'>
                                <input onChange={(e) => {
                                    setCourseIsFree(e.target.checked)
                                }} className='peer sr-only'
                                       type="checkbox"/>
                                <div
                                    className='inline-block shrink-0 cursor-pointer border-2 border-zinc-200 dark:border-[#1d4ed8] h-6 w-14 bg-white dark:bg-[#1d4ed8] relative rounded-xl before:w-[18px] before:h-[18px] before:bg-zinc-200 before:absolute before:left-0 before:transition-all peer-checked:border-primary before:translate-x-[2px] before:rounded-full before:top-0 before:bottom-0 before:my-auto peer-checked:bg-primary peer-checked:before:bg-background peer-checked:before:translate-x-[34px] transition-all'>

                                </div>
                            </label>
                        </div>
                        <div
                            className="flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/4 bg-secondary rounded-xl overflow-hidden">
                                <span className="text-xs font-YekanBakh-SemiBold">
                                    تکمیل شده
                                </span>
                            <label className='flex items-center justify-center relative'>
                                <input onChange={(e) => {
                                    setCourseIsCompleted(e.target.checked)
                                }} className='peer sr-only'
                                       type="checkbox"/>
                                <div
                                    className='inline-block shrink-0 cursor-pointer border-2 border-zinc-200 dark:border-[#1d4ed8] h-6 w-14 bg-white dark:bg-[#1d4ed8] relative rounded-xl before:w-[18px] before:h-[18px] before:bg-zinc-200 before:absolute before:left-0 before:transition-all peer-checked:border-primary before:translate-x-[2px] before:rounded-full before:top-0 before:bottom-0 before:my-auto peer-checked:bg-primary peer-checked:before:bg-background peer-checked:before:translate-x-[34px] transition-all'>

                                </div>
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center w-full sm:w-1/3 md:w-full lg:w-1/4'>
                        <div className='flex flex-col gap-2 items-start'>
                            <span className='text-xs font-YekanBakh-SemiBold'>تصویر دوره</span>
                            <label className='relative'>
                                <div className='flex items-center gap-5'>
                                    <span>
                                        <svg className='w-8 h-8'>
                                            <use href='#upload'></use>
                                        </svg>
                                    </span>
                                    <span className='text-xs font-YekanBakh-SemiBold'>{courseImg}</span>
                                </div>
                                <input onChange={(e) => {
                                    setCourseImg(`/images/Courses/${e.target.files[0].name}`)
                                }} className='sr-only' type="file"/>
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center w-full sm:w-1/3 md:w-full lg:w-1/4'>
                        <div className='flex flex-col gap-2 items-start'>
                            <span className='text-xs font-YekanBakh-SemiBold'>تصویر مدرس</span>
                            <label className='relative'>
                                <div className='flex items-center gap-5'>
                                    <span>
                                        <svg className='w-8 h-8'>
                                            <use href='#upload'></use>
                                        </svg>
                                    </span>
                                    <span className='text-xs font-YekanBakh-SemiBold'>{courseTeacherImg}</span>
                                </div>
                                <input onChange={(e) => {
                                    setCourseTeacherImg(`/images/${e.target.files[0].name}`)
                                }} className='sr-only' type="file"/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='inline-flex items-center gap-3 mt-5'>
                <PrimaryButton clickEvent={() => addNewCourse()} icon='#check' title='ثبت دوره جدید'></PrimaryButton>
                <PrimaryButton className='bg-red-500' clickEvent={() => window.history.back()} icon='#x-mark' title='بازگشت'></PrimaryButton>
            </div>
        </div>
    )
}
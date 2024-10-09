import SubTitle from "../../../Titles/SubTitle";
import PrimaryButton from "../../../Buttons/PrimaryButton";
import {useEffect, useState} from "react";
import supabase from "../../../../database";
import {getCategories, getCourses, MySwal} from "../../../../Utils";
import {useParams} from "react-router-dom";

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
    const [categories, setCategories] = useState([])
    const [categoryMenuShow, setCategoryMenuShow] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [shortName, setShortName] = useState('')

    const params = useParams()
    const mainCourseId = params.id

    useEffect(() => {
        const data = getCourses().then(data => console.log(data))
        getAllCategories()
        if (mainCourseId) {
            getMainUserInfo()
            console.log(categoryId)
        }
    }, []);

    function clearStates() {
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

    async function getAllCategories() {
        const data = await getCategories()
        setCategories(data)
    }

    function selectCategory(elem) {
        setSelectedCategory(elem.target.innerHTML)
        setCategoryMenuShow(prevState => !prevState)
        setCategoryId(elem.target.dataset.id)
    }

    function editCourse() {
        let courseNewInfo = {
            title: courseTitle,
            price: coursePrice,
            courseImg: courseImg,
            costPrice: coursePrice - (coursePrice * (courseOffer / 100)),
            offer: +courseOffer,
            teacherName: courseTeacherName,
            teacherImg: courseTeacherImg,
            isFree: courseIsFree,
            isCompleted: courseIsCompleted,
            totalTime: courseTotalTime,
            sections: courseSections,
            category_id: categoryId
        }
        MySwal.fire({
            title: 'آیا از انجام این کار اطمینان دارید ؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        })
            .then(async res => {
                if (res.isConfirmed) {
                    const data = await supabase.from('courses').update(courseNewInfo).eq('course_id', mainCourseId)
                    if (data.status === 204) {
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

    async function getMainUserInfo() {
        const response = await getCourses().then(data => {
            let mainCourse = data.find(data => data.course_id == mainCourseId)
            setCourseTitle(mainCourse.title)
            setCourseOffer(mainCourse.offer)
            setCourseIsFree(mainCourse.isFree)
            setCoursePrice(mainCourse.price)
            setCourseIsCompleted(mainCourse.isCompleted)
            setCourseTotalTime(mainCourse.totalTime)
            setCourseTeacherName(mainCourse.teacherName)
            setCourseSections(mainCourse.sections)
            setCourseImg(mainCourse.courseImg)
            setCourseTeacherImg(mainCourse.teacherImg)
            setCategoryId(mainCourse.category_id)
            setSelectedCategory(mainCourse.categories.title)
            setShortName(mainCourse.shortName)
        })
    }

    async function addNewCourse() {
        let newCourse = {
            title: courseTitle,
            price: coursePrice,
            courseImg: courseImg,
            costPrice: coursePrice - (coursePrice * (courseOffer / 100)),
            offer: +courseOffer,
            teacherName: courseTeacherName,
            teacherImg: courseTeacherImg,
            isFree: courseIsFree,
            isCompleted: courseIsCompleted,
            totalTime: courseTotalTime,
            sections: courseSections,
            category_id: categoryId,
            shortName: shortName
        }
        const response = await supabase.from('courses').insert(newCourse)
        console.log(response)
        if (response.status === 201) {
            MySwal.fire({
                title: 'دوره با موفقیت ثبت شد', icon: 'success', confirmButtonText: 'اوکی'
            })
                .then(res => {
                    if (res.isConfirmed) {
                        clearStates()
                    }
                })
        }
    }

    return (<div className='w-full h-full'>
        <div className='h-12 md:h-20 flex items-center'>
            {
                mainCourseId ? (
                    <SubTitle className='text-lg md:text-2xl' title='ویرایش دوره'></SubTitle>
                ) : (
                    <SubTitle className='text-lg md:text-2xl' title='افزودن دوره'></SubTitle>
                )
            }
        </div>
        <div
            className='flex flex-col sm:flex-row items-center sm:items-start flex-wrap lg:items-start justify-between gap-5 pt-8 md:pt-10'>
            <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 lg:w-1/4'>
                <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                    عنوان
                </label>
                <input value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)}
                       className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                       type="text"/>
            </div>
            <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 lg:w-1/4'>
                <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                    قیمت
                </label>
                <input value={coursePrice} onChange={(e) => setCoursePrice(e.target.value)}
                       className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                       type="text"/>
            </div>
            <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 lg:w-1/4'>
                <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                    تخفیف
                </label>
                <input value={courseOffer} onChange={(e) => setCourseOffer(e.target.value)}
                       className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                       type="text"/>
            </div>
            <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 lg:w-1/4'>
                <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                    مجموع آموزش
                </label>
                <input value={courseTotalTime} onChange={(e) => setCourseTotalTime(e.target.value)}
                       className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                       type="text"/>
            </div>
            <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 lg:w-1/4'>
                <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                    تعداد فصل ها
                </label>
                <input value={courseSections} onChange={(e) => setCourseSections(e.target.value)}
                       className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                       type="text"/>
            </div>
            <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 lg:w-1/4'>
                <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                    مدرس
                </label>
                <input value={courseTeacherName} onChange={(e) => setCourseTeacherName(e.target.value)}
                       className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                       type="text"/>
            </div>
            <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 lg:w-1/4'>
                <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                    نام کوتاه
                </label>
                <input value={shortName} onChange={(e) => setShortName(e.target.value)}
                       className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                       type="text"/>
            </div>
            <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 lg:w-1/4'>
                <span className='text-xs font-YekanBakh-SemiBold'>انتخاب دسته بندی</span>
                <div className='w-full rounded-2xl relative space-y-2'>
                    <button onClick={() => setCategoryMenuShow(prevState => !prevState)}
                            className='flex items-center w-full justify-between px-4 outline-none bg-background rounded-2xl h-11 text-title font-YekanBakh-SemiBold'>
                                        <span className='text-xs'>
                                            {selectedCategory ? selectedCategory : 'انتخاب کنید'}
                                        </span>
                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-down'></use>
                                            </svg>
                                        </span>
                    </button>
                    <div style={categoryMenuShow ? {display: 'block'} : {display: 'none'}}
                         className='bg-background shadow rounded-2xl overflow-hidden transition-all absolute right-0 left-0 top-11 z-10'>
                        <ul onClick={(elem) => selectCategory(elem)}
                            className='text-xs font-YekanBakh-SemiBold flex flex-col'>
                            {categories.map(category => (
                                <li data-id={category.category_id} key={category.category_id}
                                    className='py-3 px-4 hover:bg-background transition-colors hover:text-title cursor-pointer'>
                                    {category.title}
                                </li>))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 items-center justify-between w-full sm:w-1/3 md:w-full lg:w-1/4'>
                <div
                    className="flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-1/3 lg:w-1/4 bg-secondary rounded-xl overflow-hidden">
                                <span className="text-xs font-YekanBakh-SemiBold">
                                    رایگان
                                </span>
                    <label className='flex items-center justify-center'>
                        <input checked={courseIsFree} onChange={(e) => {
                            setCourseIsFree(e.target.checked)
                        }} className='peer sr-only'
                               type="checkbox"/>
                        <div
                            className='inline-block shrink-0 cursor-pointer border-2 border-zinc-200 dark:border-[#1d4ed8] h-6 w-14 bg-white dark:bg-[#1d4ed8] relative rounded-xl before:w-[18px] before:h-[18px] before:bg-zinc-200 before:absolute before:left-0 before:transition-all peer-checked:border-primary before:translate-x-[2px] before:rounded-full before:top-0 before:bottom-0 before:my-auto peer-checked:bg-primary peer-checked:before:bg-background peer-checked:before:translate-x-[34px] transition-all'>

                        </div>
                    </label>
                </div>
                <div
                    className="flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-1/3 lg:w-1/4 bg-secondary rounded-xl overflow-hidden">
                                <span className="text-xs font-YekanBakh-SemiBold">
                                    تکمیل شده
                                </span>
                    <label className='flex items-center justify-center relative'>
                        <input checked={courseIsCompleted} onChange={(e) => {
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
                <div className='flex flex-col gap-2 items-start w-full'>
                    <span className='text-xs font-YekanBakh-SemiBold'>تصویر دوره</span>
                    <label className='relative w-full'>
                        <div className='flex items-center gap-5'>
                                    <span>
                                        <svg className='w-8 h-8'>
                                            <use href='#upload'></use>
                                        </svg>
                                    </span>
                            <div
                                className='flex items-center justify-center bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'>
                                {courseImg}
                            </div>
                        </div>
                        <input onChange={(e) => {
                            setCourseImg(`/images/Courses/${e.target.files[0].name}`)
                        }} className='sr-only' type="file"/>
                    </label>
                </div>
            </div>
            <div className='flex gap-5 items-center w-full sm:w-1/3 md:w-full lg:w-1/4'>
                <div className='flex flex-col gap-2 items-start w-full'>
                    <span className='text-xs font-YekanBakh-SemiBold'>تصویر مدرس</span>
                    <label className='relative w-full'>
                        <div className='flex items-center gap-5'>
                                    <span>
                                        <svg className='w-8 h-8'>
                                            <use href='#upload'></use>
                                        </svg>
                                    </span>
                            <div
                                className='flex items-center justify-center bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'>
                                {courseTeacherImg}
                            </div>
                        </div>
                        <input onChange={(e) => {
                            setCourseTeacherImg(`/images/${e.target.files[0].name}`)
                        }} className='sr-only' type="file"/>
                    </label>
                </div>
            </div>
        </div>
        <div className='inline-flex items-center gap-3 mt-5'>
            {mainCourseId ? (<>
                <PrimaryButton clickEvent={() => editCourse()} icon='#check'
                               title='بروزرسانی'></PrimaryButton>
                <PrimaryButton className='bg-red-500' clickEvent={() => window.history.back()}
                               icon='#x-mark' title='بازگشت'></PrimaryButton>
            </>) : (<PrimaryButton clickEvent={() => addNewCourse()} icon='#check'
                                   title='ثبت دوره جدید'></PrimaryButton>)}
        </div>
    </div>)
}
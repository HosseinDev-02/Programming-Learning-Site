import SectionTitle from "../../Titles/SectionTitle";
import {useState} from "react";
import Course from "../Home/Latest-Courses/Course";
import data from "../../../data";
import SectionHeader from "../../SectionHeader/SectionHeader";
import SiteStructure from "../../SiteStructure/SiteStructure";

export default function CoursesPage() {

    const [showCategories, setShowCategories] = useState(false)
    const [showTypes, setShowTypes] = useState(false)
    const [started, setStarted] = useState(false)
    const [showFilteringModal, setShowFilteringModal] = useState(false)
    const [filtering, setFiltering] = useState('')
    const [filteringMenu, setFilteringMenu] = useState(false)

    const typesMenuHandler = (e) => {
        e.currentTarget.classList.toggle('text-primary')
        e.currentTarget.classList.toggle('text-title')
        setShowTypes(prevState => !prevState)
    }

    const categoriesMenuHandler = (e) => {
        e.currentTarget.classList.toggle('text-primary')
        e.currentTarget.classList.toggle('text-title')
        setShowCategories(prevState => !prevState)
    }

    const filteringModalHandler = () => {
        setShowFilteringModal(prevState => !prevState)
    }

    const filteringCoursesHandler = (e) => {
        setFiltering(e.target.innerHTML)
    }

    return (
        <SiteStructure>
            <main className='py-5'>
                <div className="container">
                    <div className='space-y-8'>
                        <SectionHeader>
                            <SectionTitle lineHeight='1rem' fontSize='12px' title='دوره های آموزشی'
                                          text='دوره ببین، تمرین کن، برنامه نویس شو'></SectionTitle>
                        </SectionHeader>
                        <div className='md:grid grid-cols-12 gap-5 items-start'>
                            {/*  Courses Side Bar  */}
                            <div className='col-span-4 lg:col-span-3 hidden md:block md:sticky md:top-24'>
                                {/*  Courses Search Box  */}
                                <div className='mb-3'>
                                    <span className='text-sm text-title font-YekanBakh-Bold inline-block mb-3'>جستجو دوره</span>
                                    <form
                                        className='flex items-center px-3 bg-secondary rounded-xl overflow-hidden h-11'
                                        action="#">
                                        <input placeholder='عنوان دوره ...'
                                               className='bg-transparent outline-none w-full h-full text-sm'
                                               type="text"/>
                                        <span className='shrink-0'>
                                        <svg className='w-5 h-5'>
                                            <use href='#search'></use>
                                        </svg>
                                    </span>
                                    </form>
                                </div>
                                {/*  Courses Begin CheckBox  */}
                                <label
                                    className="flex items-center justify-between bg-secondary rounded-xl overflow-hidden h-11 px-3 mb-3">
                                <span className="text-title font-YekanBakh-Bold text-sm">
                                    درحال برگزاری
                                </span>
                                    <input onChange={() => setStarted(prevState => !prevState)}
                                           className='peer sr-only'
                                           type="checkbox"/>
                                    <div
                                        className='inline-block cursor-pointer border-2 border-zinc-200 dark:border-[#1d4ed8] h-5 w-11 bg-white dark:bg-[#1d4ed8] relative rounded-xl before:w-3 before:h-3 before:bg-zinc-200 before:absolute before:left-0 before:transition-all peer-checked:border-primary before:translate-x-[2px] before:rounded-full before:top-0 before:bottom-0 before:my-auto peer-checked:bg-primary peer-checked:before:bg-background peer-checked:before:translate-x-[26px] transition-all'>

                                    </div>
                                </label>
                                {/*  Courses Accordion boxes  */}
                                <div className='divide-y divide-border'>
                                    {/*  Courses Accordion Free Or Not Free Filtering  */}
                                    <div className='mb-3 space-y-2'>
                                        <button onClick={typesMenuHandler} type='button'
                                                className='text-sm font-YekanBakh-SemiBold text-title flex items-center justify-between w-full h-11 bg-secondary rounded-xl overflow-hidden px-3'>
                                            <div className='flex items-center gap-2'>
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#star'></use>
                                            </svg>
                                        </span>
                                                <span>
                                            نوع دوره
                                        </span>
                                            </div>
                                            <span>
                                        <svg
                                            style={showTypes ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
                                            className='w-5 h-5 rotate-180'>
                                            <use href='#chevron-down'></use>
                                        </svg>
                                    </span>
                                        </button>
                                        <div style={showTypes ? {display: 'block'} : {display: 'none'}}
                                             className='p-3 rounded-xl overflow-hidden bg-secondary space-y-2'>
                                            <label className='flex items-center justify-between text-sm cursor-pointer'>
                                                <div className='flex items-center gap-3'>
                                                    <input
                                                        className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                        type="radio" name='type'/>
                                                    <span>
                                                    رایگان
                                                </span>
                                                </div>
                                                <span>
                                                18
                                            </span>
                                            </label>
                                            <label className='flex items-center justify-between text-sm cursor-pointer'>
                                                <div className='flex items-center gap-3'>
                                                    <input
                                                        className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                        type="radio" name='type'/>
                                                    <span>
                                                    فقط نفدی
                                                </span>
                                                </div>
                                                <span>
                                                9
                                            </span>
                                            </label>
                                            <label className='flex items-center justify-between text-sm cursor-pointer'>
                                                <div className='flex items-center gap-3'>
                                                    <input
                                                        className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                        type="radio" name='type'/>
                                                    <span>
                                                    نقدی و اعضای ویژه
                                                </span>
                                                </div>
                                                <span>
                                                48
                                            </span>
                                            </label>
                                        </div>
                                    </div>
                                    {/*  Courses Accordion Categories Filtering  */}
                                    <div className='pt-3 space-y-2'>
                                        <button onClick={categoriesMenuHandler} type='button'
                                                className='text-sm font-YekanBakh-SemiBold text-title flex items-center justify-between bg-secondary rounded-xl overflow-hidden h-11 w-full px-3'>
                                            <div className='flex items-center gap-2'>
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#grid-boxes-outline'></use>
                                            </svg>
                                        </span>
                                                <span>
                                            دسته بندی دوره
                                        </span>
                                            </div>
                                            <span>
                                        <svg
                                            style={showCategories ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
                                            className='w-5 h-5 transition-all'>
                                            <use href='#chevron-down'></use>
                                        </svg>
                                    </span>
                                        </button>
                                        <div style={showCategories ? {display: 'block'} : {display: 'none'}}
                                             className='p-3 rounded-xl overflow-hidden bg-secondary space-y-2'>
                                            <label className='flex items-center gap-3 text-sm cursor-pointer'>
                                                <input
                                                    className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                    type="radio" name='category'/>
                                                <span>
                                                فرانت اند
                                            </span>
                                            </label>
                                            <label className='flex items-center gap-3 text-sm cursor-pointer'>
                                                <input
                                                    className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                    type="radio" name='category'/>
                                                <span>
                                                بک اند
                                            </span>
                                            </label>
                                            <label className='flex items-center gap-3 text-sm cursor-pointer'>
                                                <input
                                                    className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                    type="radio" name='category'/>
                                                <span>
                                                امنیت
                                            </span>
                                            </label>
                                            <label className='flex items-center gap-3 text-sm cursor-pointer'>
                                                <input
                                                    className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                    type="radio" name='category'/>
                                                <span>
                                                شبکه
                                            </span>
                                            </label>
                                            <label className='flex items-center gap-3 text-sm cursor-pointer'>
                                                <input
                                                    className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                    type="radio" name='category'/>
                                                <span>
                                                مهارت های نرم
                                            </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  Courses Wrapper  */}
                            <div className='col-span-8 lg:col-span-9'>
                                {/*  Courses Wrapper Header  */}
                                <div className='flex gap-3 mb-3'>
                                    <div className='flex items-center gap-1 h-11'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#adjustments'></use>
                                        </svg>
                                    </span>
                                        <span
                                            className='text-xs font-YekanBakh-SemiBold hidden sm:inline'>مرتب سازی :</span>
                                    </div>
                                    <div className='w-52 bg-secondary rounded-2xl relative space-y-2'>
                                        <button onClick={filteringModalHandler}
                                                className='flex items-center w-full justify-between px-4 outline-none h-11 text-title font-YekanBakh-SemiBold'>
                                        <span className='text-xs'>
                                            {
                                                filtering ? filtering : 'انتخاب کنید'
                                            }
                                        </span>
                                            <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-down'></use>
                                            </svg>
                                        </span>
                                        </button>
                                        <div style={showFilteringModal ? {display: 'block'} : {display: 'none'}}
                                             className='bg-secondary shadow rounded-2xl overflow-hidden transition-all absolute right-0 left-0 top-11 z-10'>
                                            <ul onClick={filteringCoursesHandler}
                                                className='text-xs font-YekanBakh-SemiBold flex flex-col gap-1'>
                                                <li className='py-3 px-4 hover:bg-background transition-colors hover:text-title cursor-pointer'>
                                                    جدیدترین ها
                                                </li>
                                                <li className='py-3 px-4 hover:bg-background transition-colors hover:text-title cursor-pointer'>
                                                    پرفروش ترین ها
                                                </li>
                                                <li className='py-3 px-4 hover:bg-background transition-colors hover:text-title cursor-pointer'>
                                                    در حال برگزاری
                                                </li>
                                                <li className='py-3 px-4 hover:bg-background transition-colors hover:text-title cursor-pointer'>
                                                    تکمیل شده
                                                </li>
                                                <li className='py-3 px-4 hover:bg-background transition-colors hover:text-title cursor-pointer'>
                                                    خریداری شده
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*  Courses Filtering Buttons  */}
                                    <button onClick={() => setFilteringMenu(prevState => !prevState)}
                                            className='flex md:hidden items-center gap-1 h-11 px-4 text-title bg-secondary rounded-2xl'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#funnel'></use>
                                        </svg>
                                    </span>
                                        <span className='font-YekanBakh-SemiBold text-xs flex items-center gap-1'>
                                        فیلتر
                                        <span className='hidden sm:inline'>دوره ها</span>
                                    </span>
                                    </button>
                                    {/*  Courses Filtering Menu  */}
                                    <div style={filteringMenu ? {right: '0'} : {right: '-18rem'}}
                                         className='transition-all h-screen fixed top-0 bg-background rounded-tl-xl rounded-bl-xl w-72 z-50 p-4 md:hidden'>
                                        <div className='flex items-center justify-between mb-8 text-title'>
                                        <span className='font-YekanBakh-Bold text-sm'>
                                            فیلتر دوره ها
                                        </span>
                                            <span onClick={() => setFilteringMenu(prevState => !prevState)}>
                                        <svg className='w-6 h-6'>
                                            <use href='#x-mark'></use>
                                        </svg>
                                    </span>
                                        </div>
                                        {/*  Courses Search Box  */}
                                        <div className='mb-3'>
                                            <span className='text-sm text-title font-YekanBakh-Bold inline-block mb-3'>جستجو دوره</span>
                                            <form
                                                className='flex items-center px-3 bg-secondary rounded-xl overflow-hidden h-10'
                                                action="#">
                                                <input placeholder='عنوان دوره ...'
                                                       className='bg-transparent outline-none w-full h-full text-sm'
                                                       type="text"/>
                                                <span className='shrink-0'>
                                        <svg className='w-5 h-5'>
                                            <use href='#search'></use>
                                        </svg>
                                    </span>
                                            </form>
                                        </div>
                                        {/*  Courses Begin CheckBox  */}
                                        <label
                                            className="flex items-center justify-between bg-secondary rounded-xl overflow-hidden h-10 px-3 mb-3">
                                <span className="text-title font-YekanBakh-Bold text-sm">
                                    درحال برگزاری
                                </span>
                                            <input onChange={() => setStarted(prevState => !prevState)}
                                                   className='peer sr-only'
                                                   type="checkbox"/>
                                            <div
                                                className='inline-block cursor-pointer border-2 border-zinc-200 dark:border-[#1d4ed8] h-5 w-11 bg-white dark:bg-[#1d4ed8] relative rounded-xl before:w-3 before:h-3 before:bg-zinc-200 before:absolute before:left-0 before:transition-all peer-checked:border-primary before:translate-x-[2px] before:rounded-full before:top-0 before:bottom-0 before:my-auto peer-checked:bg-primary peer-checked:before:bg-background peer-checked:before:translate-x-[26px] transition-all'>

                                            </div>
                                        </label>
                                        {/*  Courses Accordion boxes  */}
                                        <div className='divide-y divide-border'>
                                            {/*  Courses Accordion Free Or Not Free Filtering  */}
                                            <div className='mb-3 space-y-2'>
                                                <button onClick={typesMenuHandler} type='button'
                                                        className='text-sm font-YekanBakh-SemiBold text-title flex items-center justify-between w-full h-10 bg-secondary rounded-xl overflow-hidden px-3'>
                                                    <div className='flex items-center gap-2'>
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#star'></use>
                                            </svg>
                                        </span>
                                                        <span>
                                            نوع دوره
                                        </span>
                                                    </div>
                                                    <span>
                                        <svg
                                            style={showTypes ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
                                            className='w-5 h-5 rotate-180'>
                                            <use href='#chevron-down'></use>
                                        </svg>
                                    </span>
                                                </button>
                                                <div style={showTypes ? {display: 'block'} : {display: 'none'}}
                                                     className='p-3 rounded-xl overflow-hidden bg-secondary space-y-2'>
                                                    <label
                                                        className='flex items-center justify-between text-sm cursor-pointer'>
                                                        <div className='flex items-center gap-3'>
                                                            <input
                                                                className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                                type="radio" name='type'/>
                                                            <span>
                                                    رایگان
                                                </span>
                                                        </div>
                                                        <span>
                                                18
                                            </span>
                                                    </label>
                                                    <label
                                                        className='flex items-center justify-between text-sm cursor-pointer'>
                                                        <div className='flex items-center gap-3'>
                                                            <input
                                                                className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                                type="radio" name='type'/>
                                                            <span>
                                                    فقط نفدی
                                                </span>
                                                        </div>
                                                        <span>
                                                9
                                            </span>
                                                    </label>
                                                    <label
                                                        className='flex items-center justify-between text-sm cursor-pointer'>
                                                        <div className='flex items-center gap-3'>
                                                            <input
                                                                className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                                type="radio" name='type'/>
                                                            <span>
                                                    نقدی و اعضای ویژه
                                                </span>
                                                        </div>
                                                        <span>
                                                48
                                            </span>
                                                    </label>
                                                </div>
                                            </div>
                                            {/*  Courses Accordion Categories Filtering  */}
                                            <div className='pt-3 space-y-2'>
                                                <button onClick={categoriesMenuHandler} type='button'
                                                        className='text-sm font-YekanBakh-SemiBold text-title flex items-center justify-between bg-secondary rounded-xl overflow-hidden h-10 w-full px-3'>
                                                    <div className='flex items-center gap-2'>
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#grid-boxes-outline'></use>
                                            </svg>
                                        </span>
                                                        <span>
                                            دسته بندی دوره
                                        </span>
                                                    </div>
                                                    <span>
                                        <svg
                                            style={showCategories ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
                                            className='w-5 h-5 transition-all'>
                                            <use href='#chevron-down'></use>
                                        </svg>
                                    </span>
                                                </button>
                                                <div style={showCategories ? {display: 'block'} : {display: 'none'}}
                                                     className='p-3 rounded-xl overflow-hidden bg-secondary space-y-2'>
                                                    <label className='flex items-center gap-3 text-sm cursor-pointer'>
                                                        <input
                                                            className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                            type="radio" name='category'/>
                                                        <span>
                                                فرانت اند
                                            </span>
                                                    </label>
                                                    <label className='flex items-center gap-3 text-sm cursor-pointer'>
                                                        <input
                                                            className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                            type="radio" name='category'/>
                                                        <span>
                                                بک اند
                                            </span>
                                                    </label>
                                                    <label className='flex items-center gap-3 text-sm cursor-pointer'>
                                                        <input
                                                            className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                            type="radio" name='category'/>
                                                        <span>
                                                امنیت
                                            </span>
                                                    </label>
                                                    <label className='flex items-center gap-3 text-sm cursor-pointer'>
                                                        <input
                                                            className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                            type="radio" name='category'/>
                                                        <span>
                                                شبکه
                                            </span>
                                                    </label>
                                                    <label className='flex items-center gap-3 text-sm cursor-pointer'>
                                                        <input
                                                            className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                            type="radio" name='category'/>
                                                        <span>
                                                مهارت های نرم
                                            </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  Courses Filtering Menu Cover  */}

                                    <div style={filteringMenu ? {visibility: 'visible', opacity: '1'} : {}}
                                         onClick={() => setFilteringMenu(prevState => !prevState)}
                                         className='fixed inset-0 bg-secondary/80 z-40 invisible opacity-0 transition-all'></div>
                                </div>
                                {/*  Courses wrapper Content  */}
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                                    {
                                        data.map(course => (<Course key={course.id} {...course}></Course>))
                                    }
                                </div>
                            </div>
                            {/*  Courses Wrapper  */}
                        </div>
                    </div>
                </div>
            </main>
        </SiteStructure>
    )
}
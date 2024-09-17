import SectionTitle from "../../SectionTitle/SectionTitle";
import {useState} from "react";

export default function Courses() {

    const [showCategories, setShowCategories] = useState(false)
    const [showTypes, setShowTypes] = useState(false)
    const [started, setStarted] = useState(false)

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

    return (
        <main className='py-5'>
            <div className="container">
                <div className='space-y-8'>
                    <SectionTitle lineHeight='16px' fontSize='12px' title='دوره های آموزشی' text='دوره ببین، تمرین کن، برنامه نویس شو'></SectionTitle>
                    <div className='grid grid-cols-12 gap-5'>
                        {/*  Courses Side Bar  */}
                        <div className='col-span-3'>
                            {/*  Courses Search Box  */}
                            <div className='mb-3'>
                                <span className='text-sm text-title font-YekanBakh-Bold inline-block mb-3'>جستجو دوره</span>
                                <form className='flex items-center px-3 bg-secondary rounded-xl overflow-hidden h-11' action="#">
                                    <input placeholder='عنوان دوره ...' className='bg-transparent outline-none w-full text-sm' type="text"/>
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
                                <input id='courses-filtered-started'
                                       onChange={() => setStarted(prevState => !prevState)}
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
                                        <svg style={showTypes ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}} className='w-5 h-5 rotate-180'>
                                            <use href='#chevron-down'></use>
                                        </svg>
                                    </span>
                                    </button>
                                    <div style={showTypes ? {display: 'block'} : {display: 'none'}} className='p-3 rounded-xl overflow-hidden bg-secondary space-y-2'>
                                        <label className='flex items-center justify-between text-sm'>
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
                                        <label className='flex items-center justify-between text-sm'>
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
                                        <label className='flex items-center justify-between text-sm'>
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
                                        <svg style={showCategories ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}} className='w-5 h-5 transition-all'>
                                            <use href='#chevron-down'></use>
                                        </svg>
                                    </span>
                                    </button>
                                    <div style={showCategories ? {display: 'block'} : {display: 'none'}} className='p-3 rounded-xl overflow-hidden bg-secondary space-y-2'>
                                        <label className='flex items-center gap-3 text-sm'>
                                            <input
                                                className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                type="radio" name='category'/>
                                            <span>
                                                فرانت اند
                                            </span>
                                        </label>
                                        <label className='flex items-center gap-3 text-sm'>
                                            <input
                                                className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                type="radio" name='category'/>
                                            <span>
                                                بک اند
                                            </span>
                                        </label>
                                        <label className='flex items-center gap-3 text-sm'>
                                            <input
                                                className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                type="radio" name='category'/>
                                            <span>
                                                امنیت
                                            </span>
                                        </label>
                                        <label className='flex items-center gap-3 text-sm'>
                                            <input
                                                className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                                type="radio" name='category'/>
                                            <span>
                                                شبکه
                                            </span>
                                        </label>
                                        <label className='flex items-center gap-3 text-sm'>
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
                        <div className='col-span-9'>

                        </div>
                        {/*  Courses Wrapper  */}
                    </div>
                </div>
            </div>
        </main>
    )
}
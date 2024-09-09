import SectionTitle from "../SectionTitle/SectionTitle";
import SectionLinkBtn from "../SectionLinkBtn/SectionLinkBtn";
export default function LatestCourses() {
    return (
        <section>
            <div className="container">
                {/*  Section Header  */}
                <div className='bg-gradient-to-l from-zinc-100 dark:from-mirage to-white dark:to-black rounded-2xl flex items-center justify-between p-2.5 sm:p-5'>
                    <SectionTitle></SectionTitle>
                    <SectionLinkBtn></SectionLinkBtn>
                </div>
                {/*  Section Content  */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-5'>
                    <div>
                        <a className='inline-block rounded-3xl overflow-hidden relative' href="#">
                            <img className='w-full h-full object-cover' src="images/Courses/02.jpg" alt=""/>
                            <a href='#'
                               className='absolute left-3 top-3 flex items-center gap-1 bg-black/20 rounded-full h-11 px-4 text-white hover:opacity-80 transition-all'>
                                <span>
                                    <svg className='w-6 h-6'>
                                        <use href='#grid-boxes'></use>
                                    </svg>
                                </span>
                                <span className='font-semibold text-sm tracking-wider'>
                                    برنامه نویسی
                                </span>
                            </a>
                        </a>
                        <div className='bg-gradient-to-b from-white dark:from-black to-zinc-100 dark:to-mirage mx-5 p-5 rounded-3xl'>
                            <div className='flex items-center gap-2'>
                                <span className='block bg-success dark:bg-success-dark w-1 h-1 rounded-full'></span>
                                <span className='text-xs font-black text-success dark:text-success-dark'>
                                    تکمیل شده
                                </span>
                            </div>
                            <h6 className='mt-2 text-title dark:text-white text-sm font-YekanBakh-Bold'>
                                <a className='hover:text-primary transition-colors' href="#">
                                    آموزش فلاتر از صفر
                                </a>
                            </h6>
                        </div>
                        <div className='p-5'>
                            <div className='flex items-center gap-5'>
                                <div className='flex items-center gap-1 dark:text-zinc-500'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#pepers'></use>
                                        </svg>
                                    </span>
                                    <span className='text-xs font-YekanBakh-SemiBold'>
                                        5 فصل
                                    </span>
                                </div>
                                <div className='flex items-center gap-1 dark:text-zinc-500'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#clock'></use>
                                        </svg>
                                    </span>
                                    <span className='text-xs font-YekanBakh-SemiBold'>
                                        25 ساعت
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between mt-3'>
                                <div className='flex items-center gap-2'>
                                    <span className='block overflow-hidden w-10 h-10 rounded-full'>
                                        <img className='w-full h-full object-cover' src="images/profile.jpeg" alt=""/>
                                    </span>
                                    <div className='flex flex-col gap-1 text-xs font-YekanBakh-SemiBold'>
                                        <span className='dark:text-zinc-500'>
                                            مدرس دوره :
                                        </span>
                                        <span className='text-title dark:text-white font-YekanBakh-Bold'>
                                            حسین رستمی
                                        </span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center h-14'>
                                    <span className='text-success font-YekanBakh-Black text-xl'>
                                        رایگان !
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <a className='flex items-center justify-center gap-2 bg-primary rounded-full text-white w-full h-11 transition-opacity hover:opacity-80'
                                   href="#">
                                    <span className='font-semibold text-sm'>
                                        مشاهده دوره
                                    </span>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#arrow-up-left'></use>
                                        </svg>
                                    </span>
                                </a>
                                <button
                                    className='flex items-center justify-center w-11 h-11 rounded-full bg-zinc-100 dark:bg-mirage dark:text-zinc-500 shrink-0 hover:text-red-500 dark:hover:text-red-500 transition-colors'
                                    type='button'>
                                    <svg className='w-5 h-5'>
                                        <use href='#heart'></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a className='inline-block rounded-3xl overflow-hidden relative' href="#">
                            <img className='w-full h-full object-cover' src="images/Courses/03.jpg" alt=""/>
                            <a href='#'
                               className='absolute left-3 top-3 flex items-center gap-1 bg-black/20 rounded-full h-11 px-4 text-white hover:opacity-80 transition-all'>
                                <span>
                                    <svg className='w-6 h-6'>
                                        <use href='#grid-boxes'></use>
                                    </svg>
                                </span>
                                <span className='font-semibold text-sm tracking-wider'>
                                    برنامه نویسی
                                </span>
                            </a>
                        </a>
                        <div className='bg-gradient-to-b from-white dark:from-black to-zinc-100 dark:to-mirage mx-5 p-5 rounded-3xl'>
                            <div className='flex items-center gap-2'>
                                <span className='block bg-success w-1 h-1 rounded-full'></span>
                                <span className='text-xs font-black text-success'>
                                    تکمیل شده
                                </span>
                            </div>
                            <h6 className='mt-2 text-title dark:text-white text-sm font-YekanBakh-Bold'>
                                <a className='hover:text-primary transition-colors' href="#">
                                    آموزش فلاتر از صفر
                                </a>
                            </h6>
                        </div>
                        <div className='p-5'>
                            <div className='flex items-center gap-5'>
                                <div className='flex items-center gap-1'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#pepers'></use>
                                        </svg>
                                    </span>
                                    <span className='text-xs font-YekanBakh-SemiBold'>
                                        5 فصل
                                    </span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#clock'></use>
                                        </svg>
                                    </span>
                                    <span className='text-xs font-YekanBakh-SemiBold'>
                                        25 ساعت
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between mt-3'>
                                <div className='flex items-center gap-2'>
                                    <span className='block overflow-hidden w-10 h-10 rounded-full'>
                                        <img className='w-full h-full object-cover' src="images/profile.jpeg" alt=""/>
                                    </span>
                                    <div className='flex flex-col gap-1 text-xs font-YekanBakh-SemiBold'>
                                        <span className='dark:text-zinc-500'>
                                            مدرس دوره :
                                        </span>
                                        <span className='text-title dark:text-white font-YekanBakh-Bold'>
                                            حسین رستمی
                                        </span>
                                    </div>
                                </div>
                                <div className='flex flex-col items-end h-14 justify-center'>
                                    <span
                                        className='relative block before:bg-caption before:absolute before:-top-1 before:bottom-0 before:w-full before:my-auto before:h-px before:content[" "] font-YekanBakh-SemiBold'>
                                        1,990,000
                                    </span>
                                    <div className='flex items-center gap-1'>
                                        <span className='text-title dark:text-white font-YekanBakh-Black text-xl'>
                                            870,000
                                        </span>
                                        <span className='text-xs dark:text-zinc-500'>
                                            تومان
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <a className='flex items-center justify-center gap-2 bg-primary rounded-full text-white w-full h-11 transition-opacity hover:opacity-80'
                                   href="#">
                                    <span className='font-semibold text-sm'>
                                        مشاهده دوره
                                    </span>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#arrow-up-left'></use>
                                        </svg>
                                    </span>
                                </a>
                                <button
                                    className='flex items-center justify-center w-11 h-11 rounded-full bg-zinc-100 dark:bg-mirage dark:text-zinc-500 shrink-0 hover:text-red-500 dark:hover:text-red-500 transition-colors'
                                    type='button'>
                                    <svg className='w-5 h-5'>
                                        <use href='#heart'></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a className='inline-block rounded-3xl overflow-hidden relative' href="#">
                            <img className='w-full h-full object-cover' src="images/Courses/04.jpg" alt=""/>
                            <a href='#'
                               className='absolute left-3 top-3 flex items-center gap-1 bg-black/20 rounded-full h-11 px-4 text-white hover:opacity-80 transition-all'>
                                <span>
                                    <svg className='w-6 h-6'>
                                        <use href='#grid-boxes'></use>
                                    </svg>
                                </span>
                                <span className='font-semibold text-sm tracking-wider'>
                                    برنامه نویسی
                                </span>
                            </a>
                        </a>
                        <div className='bg-gradient-to-b from-white dark:from-black to-zinc-100 dark:to-mirage mx-5 p-5 rounded-3xl'>
                            <div className='flex items-center gap-2'>
                                <span className='block bg-success w-1 h-1 rounded-full'></span>
                                <span className='text-xs font-black text-success'>
                                    تکمیل شده
                                </span>
                            </div>
                            <h6 className='mt-2 text-title dark:text-white text-sm font-YekanBakh-Bold'>
                                <a className='hover:text-primary transition-colors' href="#">
                                    آموزش فلاتر از صفر
                                </a>
                            </h6>
                        </div>
                        <div className='p-5'>
                            <div className='flex items-center gap-5'>
                                <div className='flex items-center gap-1'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#pepers'></use>
                                        </svg>
                                    </span>
                                    <span className='text-xs font-YekanBakh-SemiBold'>
                                        5 فصل
                                    </span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#clock'></use>
                                        </svg>
                                    </span>
                                    <span className='text-xs font-YekanBakh-SemiBold'>
                                        25 ساعت
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between mt-3'>
                                <div className='flex items-center gap-2'>
                                    <span className='block overflow-hidden w-10 h-10 rounded-full'>
                                        <img className='w-full h-full object-cover' src="images/profile.jpeg" alt=""/>
                                    </span>
                                    <div className='flex flex-col gap-1 text-xs font-YekanBakh-SemiBold'>
                                        <span className='dark:text-zinc-500'>
                                            مدرس دوره :
                                        </span>
                                        <span className='text-title dark:text-white font-YekanBakh-Bold'>
                                            حسین رستمی
                                        </span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1 h-14'>
                                        <span className='text-title dark:text-white font-YekanBakh-Black text-xl'>
                                            870,000
                                        </span>
                                    <span className='text-xs dark:text-zinc-500'>
                                            تومان
                                        </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <a className='flex items-center justify-center gap-2 bg-primary rounded-full text-white w-full h-11 transition-opacity hover:opacity-80'
                                   href="#">
                                    <span className='font-semibold text-sm'>
                                        مشاهده دوره
                                    </span>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#arrow-up-left'></use>
                                        </svg>
                                    </span>
                                </a>
                                <button
                                    className='flex items-center justify-center w-11 h-11 rounded-full bg-zinc-100 dark:bg-mirage dark:text-zinc-500 shrink-0 hover:text-red-500 dark:hover:text-red-500 transition-colors'
                                    type='button'>
                                    <svg className='w-5 h-5'>
                                        <use href='#heart'></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
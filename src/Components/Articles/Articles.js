import SectionTitle from "../SectionTitle/SectionTitle";

export default function Articles (){
    return (
        <section>
            <div className="container">
                <div className='bg-gradient-to-l from-zinc-100 dark:from-mirage to-white dark:to-black rounded-2xl flex flex-col lg:flex-row items-center justify-between p-5 lg:p-3 xl:p-10 gap-10'>
                    <SectionTitle
                        text='نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه به روز باشیم، ما در نابغه فضای رو به شکلی آماده کردیم تا شما  بتونید ایده‌ها و مطالب جالب حوزه برنامه‌نویسی رو در اختیار هزاران برنامه‌نویس عضو نابغه قرار بدید.'
                        title='از گوشه و اطراف دنیای برنامه نویسی'
                        alignItems='start'
                        color='#6b7280'
                    >
                    </SectionTitle>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <div className='space-y-5'>
                            <div className='bg-white dark:bg-black rounded-xl p-4'>
                                <div className='relative'>
                                    <a href="#">
                                        <img className='w-full h-full object-cover rounded-xl'
                                             src="images/courses/02.jpg"
                                             alt=""/>
                                    </a>
                                    <button type='button'
                                            className='flex items-center justify-center rounded-full w-9 h-9 bg-zinc-100 dark:bg-mirage absolute left-3 -bottom-3 hover:text-red-500 text-zinc-500 transition-colors'>
                                        <svg className='w-5 h-5'>
                                            <use href='#heart'></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className='space-y-3 mt-3'>
                                    <h6 className='mt-2 text-title dark:text-white text-sm font-YekanBakh-Bold'>
                                        <a className='hover:text-primary transition-colors' href="#">
                                            دوره پروژه محور React و Next Js
                                        </a>
                                    </h6>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-1'>
                                        <span
                                            className='flex items-center justify-center rounded-full w-[30px] h-[30px] overflow-hidden border border-white'>
                                            <img className='w-full h-full object-cover' src="images/profile.jpeg"
                                                 alt=""/>
                                        </span>
                                            <a className='hover:text-primary transition-colors text-xs font-YekanBakh-Bold text-title dark:text-white dark:hover:text-primary'
                                               href="#">
                                                حسین رستمی
                                            </a>
                                        </div>
                                        <a href='#'
                                           className='flex items-center justify-center px-4 h-8 rounded-full bg-primary/10 hover:opacity-80 transition-opacity'>
                                            <span className='text-xxs text-primary font-YekanBakh-Bold'>فرانت اند</span>
                                        </a>
                                    </div>
                                    <div
                                        className='flex items-center gap-1 text-xs justify-end font-YekanBakh-SemiBold dark:text-gray-500'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#clock-outline'></use>
                                        </svg>
                                    </span>
                                        <span>زمان مطالعه :</span>
                                        <span className='dark:text-white'>
                                        20 دقیقه
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white dark:bg-black rounded-xl p-4'>
                                <div className='relative'>
                                    <a href="#">
                                        <img className='w-full h-full object-cover rounded-xl'
                                             src="images/courses/01.jpg"
                                             alt=""/>
                                    </a>
                                    <button type='button'
                                            className='flex items-center justify-center rounded-full w-9 h-9 bg-zinc-100 dark:bg-mirage absolute left-3 -bottom-3 hover:text-red-500 text-zinc-500 transition-colors'>
                                        <svg className='w-5 h-5'>
                                            <use href='#heart'></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className='space-y-3 mt-3'>
                                    <h6 className='mt-2 text-title dark:text-white text-sm font-YekanBakh-Bold'>
                                        <a className='hover:text-primary transition-colors' href="#">
                                            دوره پروژه محور React و Next Js
                                        </a>
                                    </h6>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-1'>
                                        <span
                                            className='flex items-center justify-center rounded-full w-[30px] h-[30px] overflow-hidden border border-white'>
                                            <img className='w-full h-full object-cover' src="images/profile.jpeg"
                                                 alt=""/>
                                        </span>
                                            <a className='hover:text-primary transition-colors text-xs font-YekanBakh-Bold text-title dark:text-white dark:hover:text-primary'
                                               href="#">
                                                حسین رستمی
                                            </a>
                                        </div>
                                        <a href='#'
                                           className='flex items-center justify-center px-4 h-8 rounded-full bg-primary/10 hover:opacity-80 transition-opacity'>
                                            <span className='text-xxs text-primary font-YekanBakh-Bold'>فرانت اند</span>
                                        </a>
                                    </div>
                                    <div
                                        className='flex items-center gap-1 text-xs justify-end font-YekanBakh-SemiBold dark:text-gray-500'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#clock-outline'></use>
                                        </svg>
                                    </span>
                                        <span>زمان مطالعه :</span>
                                        <span className='dark:text-white'>
                                        20 دقیقه
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-5 sm:mt-5'>
                            <div className='bg-white dark:bg-black rounded-xl p-4'>
                                <div className='relative'>
                                    <a href="#">
                                        <img className='w-full h-full object-cover rounded-xl'
                                             src="images/courses/03.jpg"
                                             alt=""/>
                                    </a>
                                    <button type='button'
                                            className='flex items-center justify-center rounded-full w-9 h-9 bg-zinc-100 dark:bg-mirage absolute left-3 -bottom-3 hover:text-red-500 text-zinc-500 transition-colors'>
                                        <svg className='w-5 h-5'>
                                            <use href='#heart'></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className='space-y-3 mt-3'>
                                    <h6 className='mt-2 text-title dark:text-white text-sm font-YekanBakh-Bold'>
                                        <a className='hover:text-primary transition-colors' href="#">
                                            دوره پروژه محور React و Next Js
                                        </a>
                                    </h6>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-1'>
                                        <span
                                            className='flex items-center justify-center rounded-full w-[30px] h-[30px] overflow-hidden border border-white'>
                                            <img className='w-full h-full object-cover' src="images/profile.jpeg"
                                                 alt=""/>
                                        </span>
                                            <a className='hover:text-primary transition-colors text-xs font-YekanBakh-Bold text-title dark:text-white dark:hover:text-primary'
                                               href="#">
                                                حسین رستمی
                                            </a>
                                        </div>
                                        <a href='#'
                                           className='flex items-center justify-center px-4 h-8 rounded-full bg-primary/10 hover:opacity-80 transition-opacity'>
                                            <span className='text-xxs text-primary font-YekanBakh-Bold'>فرانت اند</span>
                                        </a>
                                    </div>
                                    <div
                                        className='flex items-center gap-1 text-xs justify-end font-YekanBakh-SemiBold dark:text-gray-500'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#clock-outline'></use>
                                        </svg>
                                    </span>
                                        <span>زمان مطالعه :</span>
                                        <span className='dark:text-white'>
                                        20 دقیقه
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white dark:bg-black rounded-xl p-4'>
                                <div className='relative'>
                                    <a href="#">
                                        <img className='w-full h-full object-cover rounded-xl'
                                             src="images/courses/04.jpg"
                                             alt=""/>
                                    </a>
                                    <button type='button'
                                            className='flex items-center justify-center rounded-full w-9 h-9 bg-zinc-100 dark:bg-mirage absolute left-3 -bottom-3 hover:text-red-500 text-zinc-500 transition-colors'>
                                        <svg className='w-5 h-5'>
                                            <use href='#heart'></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className='space-y-3 mt-3'>
                                    <h6 className='mt-2 text-title dark:text-white text-sm font-YekanBakh-Bold'>
                                        <a className='hover:text-primary transition-colors' href="#">
                                            دوره پروژه محور React و Next Js
                                        </a>
                                    </h6>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-1'>
                                        <span
                                            className='flex items-center justify-center rounded-full w-[30px] h-[30px] overflow-hidden border border-white'>
                                            <img className='w-full h-full object-cover' src="images/profile.jpeg"
                                                 alt=""/>
                                        </span>
                                            <a className='hover:text-primary transition-colors text-xs font-YekanBakh-Bold text-title dark:text-white dark:hover:text-primary'
                                               href="#">
                                                حسین رستمی
                                            </a>
                                        </div>
                                        <a href='#'
                                           className='flex items-center justify-center px-4 h-8 rounded-full bg-primary/10 hover:opacity-80 transition-opacity'>
                                            <span className='text-xxs text-primary font-YekanBakh-Bold'>فرانت اند</span>
                                        </a>
                                    </div>
                                    <div
                                        className='flex items-center gap-1 text-xs justify-end font-YekanBakh-SemiBold dark:text-gray-500'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#clock-outline'></use>
                                        </svg>
                                    </span>
                                        <span>زمان مطالعه :</span>
                                        <span className='dark:text-white'>
                                        20 دقیقه
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
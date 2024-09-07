
export default function Introduction () {
    return (
        <section className='py-5'>
            <div className='container'>
                <div className='bg-gradient-to-l from-zinc-100 dark:from-mirage to-white dark:to-black rounded-2xl flex flex-col-reverse xl:flex-row items-center justify-center py-16 gap-10'>
                    {/*  introduction right side  */}
                    <div className='max-w-[620px] space-y-5'>
                        {/*  Introduction right side offer  */}
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-1 bg-primary py-1 px-2 rounded-xl text-white animate-pulse transition-all'>
                                <span>
                                    <svg className='w-4 h-4'>
                                        <use href='#receipt-percent'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-semibold'>جشنــــواره تخفیف !</span>
                            </div>
                            <span className='text-xs text-primary font-semibold'>
                                به زودی :)
                            </span>
                        </div>
                        <h1 className='font-black text-4xl md:text-5xl text-title dark:text-white font-YekanBakh-ExtraBold'>
                            داستان برنامه نویس شدنت
                            <br/>
                             از اینجا شروع میشه !
                        </h1>
                        <p className='tracking-wider font-YekanBakh-Medium max-w-80 xl:max-w-none'>
                            یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست که تلاش و تمرین داشته
                            باشید، بقیه‌اش با نابغه
                        </p>
                        <a className='inline-flex rounded-3xl h-11 px-4 items-center gap-1 bg-primary text-white font-semibold transition-opacity hover:opacity-80' href="#">
                            شروع یادگیری برنامه نویسی
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-up-left'></use>
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div className='max-w-72'>
                        <img className='w-full h-full object-cover' src="./images/Introduction/header-man.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
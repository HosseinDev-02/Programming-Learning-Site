
export default function Introduction () {
    return (
        <section className='py-5'>
            <div className='container'>
                <div className='bg-gradient-to-l from-zinc-100 to-white rounded-2xl flex items-center justify-center py-16 gap-10'>
                    {/*  introduction right side  */}
                    <div className='max-w-[620px] space-y-5'>
                        {/*  Introduction right side offer  */}
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-1 bg-primary py-1 px-2 rounded-xl text-white'>
                                <span>
                                    <svg className='w-4 h-4'>
                                        <use href='#receipt-percent'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-semibold'>جشنواره تخفیف !</span>
                            </div>
                            <span className='text-xs text-primary font-semibold'>
                                به زودی :)
                            </span>
                        </div>
                        <h1 className='font-black text-5xl text-title font-YekanBakh-ExtraBold max-w-[485px]'>
                            داستان برنامه نویس شدنت از اینجا شروع میشه !
                        </h1>
                        <p className='tracking-wider font-YekanBakh-Medium'>
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
                    <div className='w-72'>
                        <img className='w-full h-full object-cover' src="./images/Introduction/header-man.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
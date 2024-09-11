import SectionTitle from "../SectionTitle/SectionTitle";

export default function Comments () {
    return (
        <section>
            <div className="container">
                <div className='lg:grid lg:grid-cols-12 items-center space-y-5 lg:space-y-0 lg:gap-10'>
                    <div className='lg:col-span-4'>
                        <SectionTitle title='در مورد نابغه چه میشنویم؟' text='این‌ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد نابغه دارند.'></SectionTitle>
                    </div>
                    <div className='lg:col-span-8 max-w-xl mx-auto relative'>
                        <div className='inline-flex flex-col items-center gap-8 border border-zinc-200 dark:border-zinc-800 z-20 rounded-2xl p-8 relative bg-white dark:bg-black shadow-xl shadow-black/5'>
                            <p className='text-center text-sm font-YekanBakh-SemiBold dark:text-zinc-500'>
                                من به تیم شما بابت پشتیبانی عالیتان از وبسایتتان تشکر می‌کنم. سوالات
                                و
                                مشکلات من به سرعت پاسخ داده می‌شوند و همیشه یک راه حل مناسب برای هر
                                مشکل
                                پیدا می‌کنید. این امر بسیار قابل ارزش است.
                            </p>
                            <div className='flex items-center gap-2'>
                                    <span className='block overflow-hidden w-10 h-10 rounded-full'>
                                        <img className='w-full h-full object-cover' src="images/profile.jpeg" alt=""/>
                                    </span>
                                <div className='flex flex-col gap-1 text-xs font-YekanBakh-Bold'>
                                        <span className='dark:text-white text-title'>
                                            حسین رستمی
                                        </span>
                                    <span className='font-YekanBakh-SemiBold dark:text-zinc-500'>
                                            دوره پروژه محور React , Next
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div className='sm:inline-flex flex-col items-center sm:transform scale-[0.9] sm:translate-x-[625px] sm:translate-y-0.5 rotate-2 gap-8 border border-zinc-200 dark:border-zinc-800 z-10 rounded-2xl p-8 hidden sm:absolute bg-white dark:bg-black w-full h-full shadow-xl shadow-black/5'>
                            <p className='text-center dark:text-zinc-500 text-sm font-YekanBakh-SemiBold'>
                                من به تیم شما بابت پشتیبانی عالیتان از وبسایتتان تشکر می‌کنم. سوالات
                                و
                                مشکلات من به سرعت پاسخ داده می‌شوند و همیشه یک راه حل مناسب برای هر
                                مشکل
                                پیدا می‌کنید. این امر بسیار قابل ارزش است.
                            </p>
                            <div className='flex items-center gap-2'>
                                    <span className='block overflow-hidden w-10 h-10 rounded-full'>
                                        <img className='w-full h-full object-cover' src="images/profile.jpeg" alt=""/>
                                    </span>
                                <div className='flex flex-col gap-1 text-xs font-YekanBakh-Bold'>
                                        <span className='dark:text-white text-title'>
                                            حسین رستمی
                                        </span>
                                    <span className='font-YekanBakh-SemiBold dark:text-zinc-500'>
                                            دوره پروژه محور React , Next
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    // {{transform: 'translate3d(625px, 2px, 0) rotateZ(2deg) scale(0.9)'}}
    )
}
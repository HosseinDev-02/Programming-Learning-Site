import SectionTitle from "../SectionTitle/SectionTitle";

export default function Comments () {
    return (
        <section>
            <div className="container">
                <div className='grid grid-cols-12 items-center gap-10'>
                    <div className='col-span-4'>
                        <SectionTitle title='در مورد نابغه چه میشنویم؟' text='این‌ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد نابغه دارند.'></SectionTitle>
                    </div>
                    <div className='col-span-8 max-w-xl mx-auto relative'>
                        <div className='inline-flex flex-col items-center gap-8 border border-zinc-200 z-20 rounded-2xl p-8 relative bg-white'>
                            <p className='text-center text-sm font-YekanBakh-SemiBold'>
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
                                        <span className='dark:text-zinc-500 text-title'>
                                            حسین رستمی
                                        </span>
                                    <span className='font-YekanBakh-SemiBold'>
                                            دوره پروژه محور React , Next
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div style={{transform: 'translate3d(625px, 2px, 0) rotateZ(2deg) scale(0.9)'}} className='inline-flex flex-col items-center gap-8 border border-zinc-200 z-10 rounded-2xl p-8 absolute bg-white w-full h-full'>
                            <p className='text-center text-red-500 text-sm font-YekanBakh-SemiBold'>
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
                                        <span className='dark:text-zinc-500 text-title'>
                                            حسین رستمی
                                        </span>
                                    <span className='font-YekanBakh-SemiBold'>
                                            دوره پروژه محور React , Next
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
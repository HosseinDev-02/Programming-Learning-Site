import FooterTitle from "../Footer/FooterTitle";
import LikeButton from "../Buttons/LikeButton";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function CourseDetail() {
    return (
        <section className='py-5'>
            <div className="container">
                <div className='flex items-start gap-5'>
                    {/*  course detail right side  */}
                    <div className='w-8/12'>
                        {/*  course image  */}
                        <div>
                            <img className='w-full rounded-3xl' src="images/Courses/01.jpg" alt=""/>
                        </div>
                        {/*  course infos  */}
                        <div className='bg-gradient-to-b from-background to-secondary mx-5 p-5 rounded-3xl space-y-2'>
                            <span className='text-success text-xs font-YekanBakh-Bold'>
                                تکمیل شده
                            </span>
                            <h1 className='text-title text-xl font-YekanBakh-Bold'>
                                دوره پروژه محور React و Next
                            </h1>
                            <p className='text-sm'>
                                ساخت وبسایت فروشگاهی با React عنوان دوره پروژه محور react در نابغه است که قصد داریم در قالب این دوره react را در قالب پروژه به شما آموزش دهیم.
                            </p>
                        </div>
                    {/*  course detail boxes  */}
                        <div className='grid grid-cols-4 mt-5 gap-5'>
                            <div
                                className='bg-secondary rounded-2xl flex flex-col items-center justify-center gap-3 border border-border p-3'>
                                <div className='w-12 h-12 rounded-full bg-background flex items-center justify-center'>
                                    <span className='text-primary'>
                                        <svg className='w-5 h-5'>
                                            <use href='#clock'></use>
                                        </svg>
                                    </span>
                                </div>
                                <div className='flex flex-col items-center gap-1 font-YekanBakh-Bold'>
                                    <span className='text-xs'>مدت دوره</span>
                                    <span className='text-sm text-title'>14:53:45</span>
                                </div>
                            </div>
                            <div
                                className='bg-secondary rounded-2xl flex flex-col items-center justify-center gap-3 border border-border p-3'>
                                <div className='w-12 h-12 rounded-full bg-background flex items-center justify-center'>
                                    <span className='text-primary'>
                                        <svg className='w-5 h-5'>
                                            <use href='#grid-boxes'></use>
                                        </svg>
                                    </span>
                                </div>
                                <div className='flex flex-col items-center gap-1 font-YekanBakh-Bold'>
                                    <span className='text-xs'>تعداد جلسات</span>
                                    <span className='text-sm text-title'>99</span>
                                </div>
                            </div>
                            <div
                                className='bg-secondary rounded-2xl flex flex-col items-center justify-center gap-3 border border-border p-3'>
                                <div className='w-12 h-12 rounded-full bg-background flex items-center justify-center'>
                                    <span className='text-primary'>
                                        <svg className='w-5 h-5'>
                                            <use href='#info'></use>
                                        </svg>
                                    </span>
                                </div>
                                <div className='flex flex-col items-center gap-1 font-YekanBakh-Bold'>
                                    <span className='text-xs'>نوع دوره</span>
                                    <span className='text-sm text-title'>ویژه / نقدی</span>
                                </div>
                            </div>
                            <div
                                className='bg-secondary rounded-2xl flex flex-col items-center justify-center gap-3 border border-border p-3'>
                                <div className='w-12 h-12 rounded-full bg-background flex items-center justify-center'>
                                    <span className='text-primary'>
                                        <svg className='w-5 h-5'>
                                            <use href='#users'></use>
                                        </svg>
                                    </span>
                                </div>
                                <div className='flex flex-col items-center gap-1 font-YekanBakh-Bold'>
                                    <span className='text-xs'>شرکت کنندگان</span>
                                    <span className='text-sm text-title'>132 دانشجو</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  course detail left side  */}
                    <div className='w-4/12 space-y-8'>
                        <div className='bg-gradient-to-b from-secondary to-background rounded-2xl px-5 pb-5'>
                            <div className='bg-background rounded-bl-2xl rounded-br-2xl p-5 mb-5'>
                                <FooterTitle title='نام نویسی در دوره'></FooterTitle>
                            </div>
                            <div className='flex items-center justify-between'>
                            <span className='font-YekanBakh-Bold'>
                                هزینه ثبت نام :
                            </span>
                                <div className='flex flex-col items-end'>
                                <span className='line-through'>
                                    1,990,000
                                </span>
                                    <div className='flex items-center gap-1'>
                                        <span className='text-xl text-title font-YekanBakh-Black'>1,070,000</span>
                                        <span className='text-xs'>تومان</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <PrimaryButton href='#' title='اضافه به سبد'></PrimaryButton>
                                <LikeButton></LikeButton>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <FooterTitle fontSize='14px' title='مدرس دوره'></FooterTitle>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <span className='block overflow-hidden w-10 h-10 rounded-full shrink-0'>
                                        <img className='w-full h-full object-cover' src='images/profile.jpeg' alt=""/>
                                    </span>
                                    <div className='flex flex-col gap-1 text-xs font-YekanBakh-SemiBold'>
                                        <a href='#' className='text-title line-clamp-1 font-YekanBakh-Bold text-sm'>
                                            حسین رستمی
                                        </a>
                                        <a href='#' className='line-clamp-1 text-xs text-primary'>
                                            دیدن رزومه
                                        </a>
                                    </div>
                                </div>
                                <div className='p-5 bg-secondary rounded-tl-2xl rounded-bl-2xl rounded-br-2xl mt-3'>
                                    <p className='text-sm'>
                                        اول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول بودم، بعد به
                                        برنامه‌نویسی علاقمند شدم و الان بیشتر از ۱۰ ساله که عاشق کدزنی و چالش‌های
                                        پروژه‌های مختلفم. به تدریس علاقه خاصی دارم و دوست دارم دانشی که در این راه بدست
                                        آوردم را در اختیار دیگران قرار بدم :)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
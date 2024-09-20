import FooterTitle from "../Footer/FooterTitle";

export default function CourseDetail() {
    return (
        <section className='py-5'>
            <div className="container">
                <div className='grid grid-cols-12'>
                    {/*  course detail right side  */}
                    <div className='col-span-8'>

                    </div>
                    {/*  course detail left side  */}
                    <div className='col-span-4 space-y-8'>
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
                                <a className='flex items-center justify-center gap-2 bg-primary rounded-full text-white w-full h-11 transition-opacity hover:opacity-80'
                                   href="#">
                                    <span className='font-YekanBakh-SemiBold text-sm'>
                                        اضافه به سبد
                                    </span>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#arrow-up-left'></use>
                                        </svg>
                                    </span>
                                </a>
                                <button
                                    className='flex items-center justify-center w-11 h-11 rounded-full bg-secondary shrink-0 hover:text-red-500 transition-colors'
                                    type='button'>
                                    <svg className='w-5 h-5'>
                                        <use href='#heart'></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <FooterTitle fontSize='14px' title='مدرس دوره'></FooterTitle>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <span className='block overflow-hidden w-10 h-10 rounded-full shrink-0'>
                                        <img className='w-full h-full object-cover' src='images/profile.jpeg' alt=""/>
                                    </span>
                                    <div className='flex flex-col gap-1 text-xs font-YekanBakh-SemiBold'>
                                        <span className='line-clamp-1'>
                                            مدرس دوره :
                                        </span>
                                        <span className='text-title font-YekanBakh-Bold line-clamp-1'>
                                            حسین رستمی
                                        </span>
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
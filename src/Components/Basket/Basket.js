import SubTitle from "../Titles/SubTitle";
import PrimaryButton from "../Buttons/PrimaryButton";
import SectionTitle from "../Titles/SectionTitle";
import LikeButton from "../Buttons/LikeButton";
import LatestCourses from "../Home/Latest-Courses/LatestCourses";
import SectionHeader from "../SectionHeader/SectionHeader";
import RoundButton from "../Buttons/RoundButton";
import SiteStructure from "../SiteStructure/SiteStructure";

export default function Basket () {
    return (
        <SiteStructure>
            <main className='pt-5'>
                <div className="container space-y-14">
                    <div className='flex flex-col md:flex-row items-center md:items-start gap-5'>
                        <div className='md:w-7/12 lg:w-8/12'>
                            <SectionHeader>
                                <SectionTitle textColor='#6b7280' fontSize='12px' lineHeight='1rem' title='سبد خرید شما'
                                              text='2 دوره به سبد اضافه کرده اید'></SectionTitle>
                            </SectionHeader>
                            {/*  basket content  */}
                            <div className='divide-y divide-border divide-dashed'>
                                <div
                                    className='flex sm:flex-row lg:flex-row flex-col md:flex-col items-center sm:items-start md:items-center lg:items-start gap-5 lg:gap-8 py-6'>
                                    <div className='w-full sm:w-4/12 lg:w-4/12 md:w-full'>
                                        <a className='flex items-center justify-center rounded-3xl overflow-hidden'
                                           href="#">
                                            <img className='w-full h-full object-cover' src="images/Courses/01.jpg"
                                                 alt=""/>
                                        </a>
                                        <RoundButton icon='#x-mark'
                                                     className={'-translate-y-1/2 mx-auto w-11 h-11 !bg-red-500 text-white'}></RoundButton>
                                    </div>
                                    <div
                                        className='w-full sm:w-8/12 lg:w-8/12 md:w-full bg-gradient-to-b from-secondary to-background px-5 pb-5 rounded-3xl'>
                                        <div className='bg-background p-5 rounded-b-3xl'>
                                            <div className='flex items-center gap-2'>
                                                <span className='block bg-success w-1 h-1 rounded-full'></span>
                                                <span className='text-xs font-YekanBakh-Black text-success'>
                          تکمیل شده
                    </span>
                                            </div>
                                            <h6 className='mt-2 text-title text-sm font-YekanBakh-Bold'>
                                                <a className='hover:text-primary transition-colors line-clamp-1'
                                                   href="#">
                                                    دوره پروژه محور React و Next
                                                </a>
                                            </h6>
                                        </div>
                                        <div className='pt-5'>
                                            <div className='flex items-center gap-5'>
                                                <div className='flex items-center gap-1'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#pepers'></use>
                                        </svg>
                                    </span>
                                                    <span className='text-xs font-YekanBakh-SemiBold'>
                                        25 فصل
                                    </span>
                                                </div>
                                                <div className='flex items-center gap-1'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#clock'></use>
                                        </svg>
                                    </span>
                                                    <span className='text-xs font-YekanBakh-SemiBold'>
                                        32 ساعت
                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between gap-5 mt-3'>
                                                <div className='flex items-center gap-2'>
                                    <span className='block overflow-hidden w-10 h-10 rounded-full shrink-0'>
                                        <img className='w-full h-full object-cover' src='images/profile.jpeg' alt=""/>
                                    </span>
                                                    <div
                                                        className='flex flex-col gap-1 text-xs font-YekanBakh-SemiBold'>
                                        <span className='line-clamp-1'>
                                            مدرس دوره :
                                        </span>
                                                        <span className='text-title font-YekanBakh-Bold line-clamp-1'>
                                            حسین رستمی
                                        </span>
                                                    </div>
                                                </div>
                                                <div className='flex items-end h-14 flex-col justify-center'>
                                                    <div className='flex items-center gap-1'>
                                                    <span className='line-through'>
                                                        1,990,000
                                                    </span>
                                                    </div>
                                                    <div className='flex items-center gap-1'>
                                                <span className='text-title font-YekanBakh-Black text-xl'>
                                                    1,560,000
                                                </span>
                                                        <span className='text-xs'>
                                                        تومان
                                                    </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='flex items-center gap-3 mt-3'>
                                                <PrimaryButton icon='#arrow-up-left' href='/course'
                                                               title='مشاهده دوره'></PrimaryButton>
                                                <LikeButton></LikeButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='flex sm:flex-row lg:flex-row flex-col md:flex-col items-center sm:items-start md:items-center lg:items-start gap-5 lg:gap-8 py-6'>
                                    <div className='w-full sm:w-4/12 lg:w-4/12 md:w-full'>
                                        <a className='flex items-center justify-center rounded-3xl overflow-hidden'
                                           href="#">
                                            <img className='w-full h-full object-cover' src="images/Courses/01.jpg"
                                                 alt=""/>
                                        </a>
                                        <RoundButton icon='#x-mark'
                                                     className={'-translate-y-1/2 mx-auto w-11 h-11 !bg-red-500 text-white'}></RoundButton>
                                    </div>
                                    <div
                                        className='w-full sm:w-8/12 lg:w-8/12 md:w-full bg-gradient-to-b from-secondary to-background px-5 pb-5 rounded-3xl'>
                                        <div className='bg-background p-5 rounded-b-3xl'>
                                            <div className='flex items-center gap-2'>
                                                <span className='block bg-success w-1 h-1 rounded-full'></span>
                                                <span className='text-xs font-YekanBakh-Black text-success'>
                          تکمیل شده
                    </span>
                                            </div>
                                            <h6 className='mt-2 text-title text-sm font-YekanBakh-Bold'>
                                                <a className='hover:text-primary transition-colors line-clamp-1'
                                                   href="#">
                                                    دوره پروژه محور React و Next
                                                </a>
                                            </h6>
                                        </div>
                                        <div className='pt-5'>
                                            <div className='flex items-center gap-5'>
                                                <div className='flex items-center gap-1'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#pepers'></use>
                                        </svg>
                                    </span>
                                                    <span className='text-xs font-YekanBakh-SemiBold'>
                                        25 فصل
                                    </span>
                                                </div>
                                                <div className='flex items-center gap-1'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#clock'></use>
                                        </svg>
                                    </span>
                                                    <span className='text-xs font-YekanBakh-SemiBold'>
                                        32 ساعت
                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between gap-5 mt-3'>
                                                <div className='flex items-center gap-2'>
                                    <span className='block overflow-hidden w-10 h-10 rounded-full shrink-0'>
                                        <img className='w-full h-full object-cover' src='images/profile.jpeg' alt=""/>
                                    </span>
                                                    <div
                                                        className='flex flex-col gap-1 text-xs font-YekanBakh-SemiBold'>
                                        <span className='line-clamp-1'>
                                            مدرس دوره :
                                        </span>
                                                        <span className='text-title font-YekanBakh-Bold line-clamp-1'>
                                            حسین رستمی
                                        </span>
                                                    </div>
                                                </div>
                                                <div className='flex items-end h-14 flex-col justify-center'>
                                                    <div className='flex items-center gap-1'>
                                                    <span className='line-through'>
                                                        1,990,000
                                                    </span>
                                                    </div>
                                                    <div className='flex items-center gap-1'>
                                                <span className='text-title font-YekanBakh-Black text-xl'>
                                                    1,560,000
                                                </span>
                                                        <span className='text-xs'>
                                                        تومان
                                                    </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='flex items-center gap-3 mt-3'>
                                                <PrimaryButton icon='#arrow-up-left' href='/course'
                                                               title='مشاهده دوره'></PrimaryButton>
                                                <LikeButton></LikeButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  user basket left side  */}
                        <div className='w-full md:w-5/12 lg:w-4/12 md:sticky md:top-24'>
                            <div className='bg-gradient-to-b from-secondary to-background rounded-2xl pb-5 px-5'>
                                <div className='bg-background flex items-center rounded-b-3xl p-5 mb-5'>
                                    <SubTitle title='اطلاعات پرداخت'></SubTitle>
                                </div>
                                <form className='flex items-center gap-3 mb-5' action="#">
                                    <div className='flex items-center bg-background rounded-xl px-3 flex-grow'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#tag'></use>
                                    </svg>
                                </span>
                                        <input placeholder='کد تخفیف ...'
                                               className='text-sm bg-transparent text-title outline-none px-2 h-11 w-full'
                                               type="text"/>
                                    </div>
                                    <button
                                        className='flex items-center justify-center rounded-xl bg-primary hover:opacity-80 transition-opacity text-white px-4 h-11'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#arrow-path'></use>
                                    </svg>
                                </span>
                                    </button>
                                </form>
                                <div className='space-y-2 mb-5'>
                                    <div className='flex items-center justify-between'>
                                <span className='font-YekanBakh-Bold text-title text-xs'>
                                جمع کل :
                                </span>
                                        <div className='flex items-center gap-1'>
                                            <span className='font-YekanBakh-Black text-title'>1,790,000</span>
                                            <span className='text-xs'>تومان</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                <span className='font-YekanBakh-Bold text-title text-xs'>
                                    موجودی کیف پول :
                                </span>
                                        <div className='flex items-center gap-1'>
                                            <span className='font-YekanBakh-Black text-title'>520,000</span>
                                            <span className='text-xs'>تومان</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                <span className='font-YekanBakh-Bold text-title text-xs'>
                                    تخفیف :
                                </span>
                                        <div className='flex items-center gap-1'>
                                            <span className='font-YekanBakh-Black text-title'>185,000</span>
                                            <span className='text-xs'>تومان</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between py-5 border-t border-border'>
                            <span className='font-YekanBakh-Bold text-title text-sm'>
                                مبلغ قابل پرداخت :
                            </span>
                                    <div className='flex items-center gap-1'>
                                        <span className='text-title font-YekanBakh-Black text-xl'>1,100,000</span>
                                        <span className='text-xs'>تومان</span>
                                    </div>
                                </div>
                            </div>
                            <PrimaryButton icon='#arrow-up-left' href='#' title='تکمیل فرایند خرید'></PrimaryButton>
                        </div>
                    </div>
                    <LatestCourses></LatestCourses>
                </div>
            </main>
        </SiteStructure>
    )
}
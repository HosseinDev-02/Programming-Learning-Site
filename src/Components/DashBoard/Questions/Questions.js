import SubTitle from "../../Titles/SubTitle";
import PrimaryButton from "../../Buttons/PrimaryButton";

export default function Questions() {
    return (
        <div>
            <div className='my-5'>
                <SubTitle title='دیدگاه و پرسشهای شما'></SubTitle>
                <div className='overflow-x-auto'>
                    <ul className='bg-secondary rounded-full inline-flex items-center gap-5 border border-border p-1 mt-5'>
                        <li>
                            <button
                                className='flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors user-courses-menu__item--active'>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#education'></use>
                                </svg>
                            </span>
                                <span className='text-sm font-YekanBakh-Bold text-nowrap'>
                                دوره های آموزشی
                            </span>
                            </button>
                        </li>
                        <li>
                            <button
                                className='flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors'>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#document-text'></use>
                                </svg>
                            </span>
                                <span className='text-sm font-YekanBakh-Bold text-nowrap'>
                                مقالات آموزشی
                            </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='divide-y divide-border'>
                <div className='flex md:flex-row flex-col md:items-start gap-5 py-8'>
                    <a className='md:w-4/12 flex items-center justify-center rounded-3xl overflow-hidden' href="#">
                        <img className='w-full h-full object-cover' src="images/Courses/02.jpg" alt=""/>
                    </a>
                    <div className='md:w-8/12 px-5 rounded-3xl bg-gradient-to-b from-secondary to-background'>
                        <div className='bg-background rounded-b-3xl p-5'>
                            <h3 className='line-clamp-1'>
                                <a className='font-YekanBakh-Black text-title transition-colors hover:text-primary'
                                   href="#">دوره پروژه محور React و Next</a>
                            </h3>
                        </div>
                        <div className='mt-5'>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center justify-center rounded-full bg-border w-3.5 h-3.5'>
                                    <span className='bg-success w-1.5 h-1.5 rounded-full'></span>
                                </div>
                                <span className='text-success font-YekanBakh-Bold text-sm'>تایید شده</span>
                            </div>
                            <p className='line-clamp-2 my-3 text-sm font-YekanBakh-SemiBold'>
                            من این دوره رو خریدم و میخوام نکست هم بعدا یادبگیرم چون نیاز بیشتری دارم به آموزش های
                                این دوره میشه بدون اینکه نکست رو ببینم این دوره رو ببینم ؟
                            </p>
                            <PrimaryButton style={{width: 'auto', padding: '0 16px'}}
                                           title='مشاهده در صفحه دوره'></PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col md:items-start gap-5 py-8'>
                    <a className='md:w-4/12 flex items-center justify-center rounded-3xl overflow-hidden' href="#">
                        <img className='w-full h-full object-cover' src="images/Courses/01.jpg" alt=""/>
                    </a>
                    <div className='md:w-8/12 px-5 rounded-3xl bg-gradient-to-b from-secondary to-background'>
                        <div className='bg-background rounded-b-3xl p-5'>
                            <h3 className='line-clamp-1'>
                                <a className='font-YekanBakh-Black text-title transition-colors hover:text-primary' href="#">دوره پروژه محور React و Next</a>
                            </h3>
                        </div>
                        <div className='mt-5'>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center justify-center rounded-full bg-border w-3.5 h-3.5'>
                                    <span className='bg-success w-1.5 h-1.5 rounded-full'></span>
                                </div>
                                <span className='text-success font-YekanBakh-Bold text-sm'>تایید شده</span>
                            </div>
                            <p className='line-clamp-2 my-3 text-sm font-YekanBakh-SemiBold'>
                                من این دوره رو خریدم و میخوام نکست هم بعدا یادبگیرم چون نیاز بیشتری دارم به آموزش های
                                این دوره میشه بدون اینکه نکست رو ببینم این دوره رو ببینم ؟
                            </p>
                            <PrimaryButton style={{width: 'auto', padding: '0 16px'}}
                                           title='مشاهده در صفحه دوره'></PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import FooterTitle from "../Footer/FooterTitle";
import LikeButton from "../Buttons/LikeButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import Box from "./Box";
import {useState} from "react";
import Footer from "../Footer/Footer";
import SectionLinkBtn from "../SectionLinkBtn/SectionLinkBtn";


export default function CourseDetail() {

    const [boxes, setBoxes] = useState([
        {id: 1, icon: '#clock', title: 'مدت دوره', text: '14:53:42'},
        {id: 2, icon: '#grid-boxes', title: 'تعداد جلسات', text: '99'},
        {id: 3, icon: '#info', title: 'نوع دوره', text: 'ویژه / نقدی'},
        {id: 4, icon: '#users', title: 'شرکت کنندگان', text: '132 دانشجو'},
    ])

    const sessionsMenuHandler = e => {
        e.currentTarget.classList.toggle('session--open')
        e.currentTarget.nextElementSibling.classList.toggle('hidden')
    }

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
                                ساخت وبسایت فروشگاهی با React عنوان دوره پروژه محور react در نابغه است که قصد داریم در
                                قالب این دوره react را در قالب پروژه به شما آموزش دهیم.
                            </p>
                        </div>
                        {/*  course detail boxes  */}
                        <div className='grid grid-cols-4 mt-5 gap-5'>
                            {
                                boxes.map(box => (
                                    <Box key={box.id} {...box}></Box>
                                ))
                            }
                        </div>
                        {/*  course detail menu  */}
                        <div className='inline-block bg-secondary border border-border rounded-3xl mt-10 p-1'>
                            <ul className='inline-flex items-center gap-2'>
                                <li>
                                    <button className='flex items-center gap-2 text-sm font-YekanBakh-SemiBold px-4 py-2 rounded-3xl bg-background'>
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#edit'></use>
                                            </svg>
                                        </span>
                                        معرفی
                                    </button>
                                </li>
                                <li>
                                    <button className='flex items-center gap-2 text-sm font-YekanBakh-SemiBold px-4 py-2 rounded-3xl'>
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#list'></use>
                                            </svg>
                                        </span>
                                        سرفصل ها
                                    </button>
                                </li>
                                <li>
                                    <button className='flex items-center gap-2 text-sm font-YekanBakh-SemiBold px-4 py-2 rounded-3xl'>
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#comments'></use>
                                            </svg>
                                        </span>
                                        دیدگاه و پرسش
                                    </button>
                                </li>
                            </ul>
                        </div>
                        {/*  course detail description  */}
                        <div className='space-y-5 p-5 mt-5'>
                            <FooterTitle title='معرفی دوره'></FooterTitle>
                            <p className='text-sm'>
                                بدون شک در حال حاضر یکی از پرکاربردترین فریمورک‌های جاوا اسکریپتی که می‌توانید در دنیای
                                وب پیدا بکنید React است. زمانی که یک فریمورک در زمینه‌های مختلف کاربرد داشته باشد نیز در
                                نهایت باعث خواهد شد که فرصت‌های شغلی بسیار زیادی داشته باشد. اما آیا فکر می‌کنید برای
                                قبول شدن در یک فرصت شغلی مناسب، تمام موارد لازم را در اختیار دارید؟ اگر حس می‌کنید در
                                رابطه با این قضیه مطمئن نیستید و شک دارید، بهتر است با این دوره آموزشی همراه باشید.
                            </p>
                            <div>
                                <h2 className='font-YekanBakh-Black mb-3 text-xl text-title'>
                                    دوره آموزشی پروژه محور react و next
                                </h2>
                                <div>
                                    <img className='w-full rounded-3xl' src="images/Courses/01.jpg" alt=""/>
                                </div>
                            </div>
                            <p className='text-sm'>
                                زمانی که شما با موضوعات مختلف یک ابزار آشنایی پیدا کردید، یک نکته مهم که باید در نظر
                                داشته باشید این است که چگونه با کنار هم قرار دادن ویژگی‌های مختلف خواهید توانست یک پروژه
                                واقعی را ایجاد کنید. این موضوع دقیقا هدفی است که یک آموزش پروژه محور دنبال می‌کند. در یک آموزش پروژه محور در ابتدا شما به صورت مستقیم یا غیر مستقیم با مفاهیم اولیه آشنا شده و سپس فرایند یادگیری موضوعات جدید را در خلال ایجاد پروژه شروع خواهید کرد.
                            </p>
                            <p className='text-sm'>
                                منظور از غیر مستقیم بودن یادگیری مفاهیم اولیه این است که در برخی از وبسایت‌های آموزشی از جمله وبسایت آموزشی نابغه ما دوره‌های مقدماتی را پیشتر ضبط کرده و از شما انتظار داریم که ابتدا آن‌ها را به خوبی نگاه کرده و یاد گرفته باشید. به همین دلیل است که ما در پایان نوشته‌های مربوط به هر دوره یک قسمت اختصاصی به نام «پیش‌نیازها» را ایجاد کرده و در آنجا خواهیم گفت که برای یادگیری این دوره آموزشی نیاز خواهید داشت چه پیش‌نیازهایی را در ابتدا طی کنید.
                            </p>
                            {/*  course structure  */}
                            <div>
                                <h3 className='text-lg text-title font-YekanBakh-Black mb-3'>
                                    ساختار دوره آموزشی پروژه محور React
                                </h3>
                                <p className='text-sm'>
                                    در ساختار این دوره مانند دوره‌های آموزشی دیگر، ما از یک سرفصل‌بندی جامع و دقیق
                                    استفاده خواهیم کرد. در ادامه ما سعی می‌کنیم این ساختار را به صورت تمام و کمال به شما
                                    معرفی کنیم. هدف از انجام این کار نیز آشنایی هر چه بیشتر شما با این دوره آموزشی است.
                                    در اولین دوره این دوره نیز از ساختار دوره صحبت‌های بسیاری شده و می‌توانید از آن نیز
                                    استفاده کنید.
                                </p>
                            </div>
                        </div>
                        {/*  course detail sessions  */}
                        <div>
                            <FooterTitle title='سرفصل ها'></FooterTitle>
                            <div className='mt-5 space-y-3'>
                                <div>
                                    <button onClick={sessionsMenuHandler}
                                        className='flex items-center justify-between w-full px-5 h-14 rounded-3xl bg-secondary text-xs font-YekanBakh-SemiBold hover:text-title transition-colors'>
                                        <div className='flex items-center gap-6'>
                                            <span className='text-title'>فصل اول</span>
                                            <span>معرفی</span>
                                        </div>
                                        <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#chevron-down'></use>
                                        </svg>
                                    </span>
                                    </button>
                                    <div className='py-3 mx-8 hidden'>
                                        <ul className='flex flex-col gap-1'>
                                            <li className='flex items-center justify-between border border-border px-3 py-1 rounded-xl text-xs'>
                                                <div className='flex items-center gap-5'>
                                                    <span>1</span>
                                                    <a href='#'
                                                       className='text-title font-YekanBakh-SemiBold transition-colors hover:text-primary'>معرفی
                                                        دوره</a>
                                                </div>
                                                <div className='flex items-center gap-5'>
                                                    <div className='flex items-center gap-1'>
                                                        <span>03:54</span>
                                                        <span>
                                                        <svg className='w-4 h-4'>
                                                            <use href='#clock-outline'></use>
                                                        </svg>
                                                    </span>
                                                    </div>
                                                    <SectionLinkBtn style={{fontSize: '12px', height: '36px', color: 'rgb(var(--color-caption))'}}
                                                                    text='مشاهده'
                                                                    icon='#arrow-up-left'></SectionLinkBtn>
                                                </div>
                                            </li>
                                            <li className='flex items-center justify-between border border-border px-3 py-1 rounded-xl text-xs'>
                                                <div className='flex items-center gap-5'>
                                                    <span>1</span>
                                                    <a href='#'
                                                       className='text-title font-YekanBakh-SemiBold transition-colors hover:text-primary'>
                                                        پیش نیاز مشاهده این دوره
                                                    </a>
                                                </div>
                                                <div className='flex items-center gap-5'>
                                                    <div className='flex items-center gap-1'>
                                                        <span>03:54</span>
                                                        <span>
                                                        <svg className='w-4 h-4'>
                                                            <use href='#clock-outline'></use>
                                                        </svg>
                                                    </span>
                                                    </div>
                                                    <SectionLinkBtn style={{fontSize: '12px', height: '36px', color: 'rgb(var(--color-caption))'}}
                                                                    text='مشاهده'
                                                                    icon='#arrow-up-left'></SectionLinkBtn>
                                                </div>
                                            </li>
                                            <li className='flex items-center justify-between border border-border px-3 py-1 rounded-xl text-xs'>
                                                <div className='flex items-center gap-5'>
                                                    <span>1</span>
                                                    <a href='#'
                                                       className='text-title font-YekanBakh-SemiBold transition-colors hover:text-primary'>
                                                        چرا باید این دوره را مشاهده کنیم؟
                                                    </a>
                                                </div>
                                                <div className='flex items-center gap-5'>
                                                    <div className='flex items-center gap-1'>
                                                        <span>03:54</span>
                                                        <span>
                                                        <svg className='w-4 h-4'>
                                                            <use href='#clock-outline'></use>
                                                        </svg>
                                                    </span>
                                                    </div>
                                                    <SectionLinkBtn style={{fontSize: '12px', height: '36px', color: 'rgb(var(--color-caption))'}}
                                                                    text='مشاهده'
                                                                    icon='#arrow-up-left'></SectionLinkBtn>
                                                </div>
                                            </li>
                                            <li className='flex items-center justify-between border border-border px-3 py-1 rounded-xl text-xs'>
                                                <div className='flex items-center gap-5'>
                                                    <span>1</span>
                                                    <a href='#'
                                                       className='text-title font-YekanBakh-SemiBold transition-colors hover:text-primary'>
                                                        در این پروژه از typescript هم استفاده می‌شود
                                                    </a>
                                                </div>
                                                <div className='flex items-center gap-5'>
                                                    <div className='flex items-center gap-1'>
                                                        <span>03:54</span>
                                                        <span>
                                                        <svg className='w-4 h-4'>
                                                            <use href='#clock-outline'></use>
                                                        </svg>
                                                    </span>
                                                    </div>
                                                    <SectionLinkBtn style={{fontSize: '12px', height: '36px', color: 'rgb(var(--color-caption))'}}
                                                                    text='مشاهده'
                                                                    icon='#arrow-up-left'></SectionLinkBtn>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={sessionsMenuHandler}
                                        className='flex items-center justify-between w-full px-5 h-14 rounded-3xl bg-secondary text-xs font-YekanBakh-SemiBold hover:text-title transition-colors'>
                                        <div className='flex items-center gap-6'>
                                            <span className='text-title'>فصل دوم</span>
                                            <span>پیاده سازی ساختار پروژه</span>
                                        </div>
                                        <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#chevron-down'></use>
                                        </svg>
                                    </span>
                                    </button>
                                    <div className='py-3 mx-8 hidden'>
                                        <ul className='flex flex-col gap-1'>
                                            <li className='flex items-center justify-between border border-border px-3 py-1 rounded-xl text-xs'>
                                                <div className='flex items-center gap-5'>
                                                    <span>1</span>
                                                    <a href='#'
                                                       className='text-title font-YekanBakh-SemiBold transition-colors hover:text-primary'>معرفی
                                                        دوره</a>
                                                </div>
                                                <div className='flex items-center gap-5'>
                                                    <div className='flex items-center gap-1'>
                                                        <span>03:54</span>
                                                        <span>
                                                        <svg className='w-4 h-4'>
                                                            <use href='#clock-outline'></use>
                                                        </svg>
                                                    </span>
                                                    </div>
                                                    <SectionLinkBtn style={{fontSize: '12px', height: '36px', color: 'rgb(var(--color-caption))'}}
                                                                    text='مشاهده'
                                                                    icon='#arrow-up-left'></SectionLinkBtn>
                                                </div>
                                            </li>
                                            <li className='flex items-center justify-between border border-border px-3 py-1 rounded-xl text-xs'>
                                                <div className='flex items-center gap-5'>
                                                    <span>1</span>
                                                    <a href='#'
                                                       className='text-title font-YekanBakh-SemiBold transition-colors hover:text-primary'>
                                                        پیش نیاز مشاهده این دوره
                                                    </a>
                                                </div>
                                                <div className='flex items-center gap-5'>
                                                    <div className='flex items-center gap-1'>
                                                        <span>03:54</span>
                                                        <span>
                                                        <svg className='w-4 h-4'>
                                                            <use href='#clock-outline'></use>
                                                        </svg>
                                                    </span>
                                                    </div>
                                                    <SectionLinkBtn style={{fontSize: '12px', height: '36px', color: 'rgb(var(--color-caption))'}}
                                                                    text='مشاهده'
                                                                    icon='#arrow-up-left'></SectionLinkBtn>
                                                </div>
                                            </li>
                                            <li className='flex items-center justify-between border border-border px-3 py-1 rounded-xl text-xs'>
                                                <div className='flex items-center gap-5'>
                                                    <span>1</span>
                                                    <a href='#'
                                                       className='text-title font-YekanBakh-SemiBold transition-colors hover:text-primary'>
                                                        چرا باید این دوره را مشاهده کنیم؟
                                                    </a>
                                                </div>
                                                <div className='flex items-center gap-5'>
                                                    <div className='flex items-center gap-1'>
                                                        <span>03:54</span>
                                                        <span>
                                                        <svg className='w-4 h-4'>
                                                            <use href='#clock-outline'></use>
                                                        </svg>
                                                    </span>
                                                    </div>
                                                    <SectionLinkBtn style={{fontSize: '12px', height: '36px', color: 'rgb(var(--color-caption))'}}
                                                                    text='مشاهده'
                                                                    icon='#arrow-up-left'></SectionLinkBtn>
                                                </div>
                                            </li>
                                            <li className='flex items-center justify-between border border-border px-3 py-1 rounded-xl text-xs'>
                                                <div className='flex items-center gap-5'>
                                                    <span>1</span>
                                                    <a href='#'
                                                       className='text-title font-YekanBakh-SemiBold transition-colors hover:text-primary'>
                                                        در این پروژه از typescript هم استفاده می‌شود
                                                    </a>
                                                </div>
                                                <div className='flex items-center gap-5'>
                                                    <div className='flex items-center gap-1'>
                                                        <span>03:54</span>
                                                        <span>
                                                        <svg className='w-4 h-4'>
                                                            <use href='#clock-outline'></use>
                                                        </svg>
                                                    </span>
                                                    </div>
                                                    <SectionLinkBtn style={{fontSize: '12px', height: '36px', color: 'rgb(var(--color-caption))'}}
                                                                    text='مشاهده'
                                                                    icon='#arrow-up-left'></SectionLinkBtn>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
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
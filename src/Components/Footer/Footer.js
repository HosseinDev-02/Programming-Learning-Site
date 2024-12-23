import Logo from "../Logo/Logo";
import SectionLinkBtn from "../Buttons/SectionLinkBtn";
import SubTitle from "../Titles/SubTitle";
import RoundButton from "../Buttons/RoundButton";
import Input from "../Input/Input";

export default function Footer() {

    const topScrollHandler = (e) => {
        e.preventDefault()
        window.scrollTo({top: 0, behavior: 'smooth'})
    }


    return (
        <footer className="pt-10 md:pt-20">
            <div className="container">
                <div>
                    {/*  footer top link  */}
                    <div className="flex items-center gap-3">
                        <div className="h-px w-full border-t border-dashed border-border"></div>
                        <SectionLinkBtn
                            text="برگشت به بالا"
                            icon="#chevron-up"
                            clickEvent={topScrollHandler}
                        ></SectionLinkBtn>
                    </div>
                    {/*  footer content  */}
                    <div>
                        {/*  footer content top  */}
                        <div className="flex items-center justify-between lg:justify-start gap-10 py-10 flex-wrap">
                            <div className="lg:w-5/12">
                                <Logo className='inline-flex'></Logo>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="flex items-center gap-5">
                                    <RoundButton
                                        className="w-12 h-12"
                                        icon="#phone"
                                    ></RoundButton>
                                    <div className="flex flex-col gap-2 font-YekanBakh-Black">
                                        <span className="text-primary text-sm">
                                            شماره تلفن
                                        </span>
                                        <span className="text-title">
                                            021-1234567
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <RoundButton
                                        className="w-12 h-12"
                                        icon="#clock"
                                    ></RoundButton>
                                    <div className="flex flex-col gap-2 font-YekanBakh-Black">
                                        <span className="text-primary text-sm">
                                            ساعت کاری
                                        </span>
                                        <span className="text-title">
                                            09:00 - 17:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  footer content body  */}
                        <div className="flex items-start flex-wrap lg:flex-nowrap gap-10">
                            {/*  footer content body right side  */}
                            <div className="bg-secondary rounded-3xl p-4 md:p-8 space-y-5 lg:w-5/12 w-full shrink-0">
                                <SubTitle title="دربــــاره"></SubTitle>
                                <p className="font-YekanBakh-SemiBold text-sm">
                                    نابغه یکی از پرتلاش‌ترین و بروزترین وبسایت
                                    های آموزشی در سطح ایران است که همیشه تلاش
                                    کرده تا بتواند جدیدترین و بروزترین مقالات و
                                    دوره‌های آموزشی را در اختیار علاقه‌مندان
                                    ایرانی قرار دهد. تبدیل کردن برنامه نویسان
                                    ایرانی به بهترین برنامه نویسان جهان هدف
                                    ماست.
                                </p>
                            </div>
                            {/*  footer content body main side  */}
                            <div className="lg:w-7/12 w-full flex flex-wrap gap-10 justify-between lg:grid lg:grid-cols-5">
                                <div className="space-y-5 shrink-0 lg:col-span-2">
                                    <SubTitle title="لینک های مفید"></SubTitle>
                                    <ul className="flex flex-col gap-1">
                                        <li>
                                            <a
                                                className="font-YekanBakh-SemiBold text-sm transition-colors hover:text-primary"
                                                href="#"
                                            >
                                                قوانین و مقررات
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="font-YekanBakh-SemiBold text-sm transition-colors hover:text-primary"
                                                href="#"
                                            >
                                                مدرسان
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="font-YekanBakh-SemiBold text-sm transition-colors hover:text-primary"
                                                href="#"
                                            >
                                                درباره نابغه
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="font-YekanBakh-SemiBold text-sm transition-colors hover:text-primary"
                                                href="#"
                                            >
                                                ارتباط با ما
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/*  footer content body left side  */}
                                <div className="lg:col-span-3 space-y-5">
                                    <SubTitle title="خبرنامه"></SubTitle>
                                    <p className="text-sm">
                                        برای اطلاع از جدیدترین اخبار و
                                        جشنوراه‌های تخفیفی نابغه ایمیل خود را
                                        وارد کنید.
                                    </p>
                                    <form
                                        className="flex items-center gap-3"
                                        action="#"
                                    >
                                        <div className="bg-secondary rounded-xl h-11 flex items-center px-4 w-full">
                                            <span>
                                                <svg className="w-5 h-5">
                                                    <use href="#envelope"></use>
                                                </svg>
                                            </span>
                                            <Input
                                                element="input"
                                                className="text-sm text-title placeholder:text-caption pr-2 w-full h-full bg-transparent outline-none"
                                                type="text"
                                                placeholder="آدرس ایمیل"
                                            />
                                        </div>
                                        <button
                                            className="bg-primary text-white rounded-xl px-4 h-11 text-xs shrink-0 hover:opacity-80 transition-opacity"
                                            type="submit"
                                        >
                                            ثبت ایمیل
                                        </button>
                                    </form>
                                    <SubTitle title="شبکه های اجتماعی"></SubTitle>
                                    <div className="flex items-center gap-5">
                                        <RoundButton
                                            className="w-12 h-12 hover:text-primary transition-colors"
                                            link={true}
                                            href="#instagram"
                                            icon="#instagram"
                                        ></RoundButton>
                                        <RoundButton
                                            className="w-12 h-12 hover:text-primary transition-colors"
                                            link={true}
                                            href="#telegram"
                                            icon="#telegram"
                                        ></RoundButton>
                                        <RoundButton
                                            className="w-12 h-12 hover:text-primary transition-colors"
                                            link={true}
                                            href="#youtube"
                                            icon="#youtube"
                                        ></RoundButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  footer content bottom  */}
                        <div className="flex items-center gap-3 py-5">
                            <p className="text-xs shrink-0">
                                © کليه حقوق محفوظ است
                            </p>
                            <div className="h-px w-full border-t border-dashed border-border"></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

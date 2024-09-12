import Logo from "../Logo/Logo";
import SectionLinkBtn from "../SectionLinkBtn/SectionLinkBtn";
import FooterIcon from "./FooterIcon";
import FooterTitle from "./FooterTitle";
export default function Footer() {
    return (
        <footer className='py-5'>
            <div className="container">
                <div>
                {/*  footer top link  */}
                    <div className='flex items-center gap-3'>
                        <div className='h-px w-full border-t border-dashed border-zinc-200'></div>
                        <SectionLinkBtn text='رفتن به بالا' icon='#chevron-up'></SectionLinkBtn>
                    </div>
                {/*  footer content  */}
                    <div>
                    {/*  footer content top  */}
                        <div className='flex items-center gap-10'>
                            <Logo></Logo>
                            <div className='flex items-center gap-10'>
                                <div className='flex items-center gap-5'>
                                    <FooterIcon icon='#phone'></FooterIcon>
                                    <div className='flex flex-col gap-2 font-YekanBakh-Black'>
                                        <span className='text-primary text-sm'>
                                            شماره تلفن
                                        </span>
                                        <span className='text-title dark:text-white'>
                                            021-1234567
                                        </span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <FooterIcon icon='#clock'></FooterIcon>
                                    <div className='flex flex-col gap-2 font-YekanBakh-Black'>
                                        <span className='text-primary text-sm'>
                                            ساعت کاری
                                        </span>
                                        <span className='text-title dark:text-white'>
                                            09:00 - 17:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/*  footer content body  */}
                        <div>
                            <div>
                                <FooterTitle title='دربــــاره'></FooterTitle>
                                <p>
                                    نابغه یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
                                    است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
                                    دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد. تبدیل کردن
                                    برنامه نویسان ایرانی به بهترین برنامه نویسان جهان هدف ماست.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
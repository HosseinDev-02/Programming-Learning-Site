import SectionTitle from "../Titles/SectionTitle";

export default function Panel() {

    return (
        <div className='flex gap-5 bg-secondary min-h-screen'>
            {/*  Admin Panel Right Side  */}
            <div className='bg-background w-80 rounded-l-2xl p-5'>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='font-YekanBakh-Black text-primary text-2xl text-center'>
                        پنل کاربری
                    </h1>
                    <span className='text-title'>
                        محتوای خود را مدیریت کنید
                    </span>
                </div>
                <div className='mt-8'>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-11 cursor-pointer font-YekanBakh-SemiBold text-title'>
                            <span>
                                منو
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-11 cursor-pointer font-YekanBakh-SemiBold text-title'>
                            <span>
                                زیر منو
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-11 cursor-pointer font-YekanBakh-SemiBold text-title'>
                            <span>
                                خدمات
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-11 cursor-pointer font-YekanBakh-SemiBold text-title'>
                            <span>
                                دوره ها
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-11 cursor-pointer font-YekanBakh-SemiBold text-title'>
                            <span>
                                دسته بندی ها
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-11 cursor-pointer font-YekanBakh-SemiBold text-title'>
                            <span>
                                مدرس ها
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-11 cursor-pointer font-YekanBakh-SemiBold text-title'>
                            <span>
                                سبد خرید
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-11 cursor-pointer font-YekanBakh-SemiBold text-title'>
                            <span>
                                کاربران
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-11 cursor-pointer font-YekanBakh-SemiBold text-title'>
                            <span>
                                کامنت ها
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-11 cursor-pointer font-YekanBakh-SemiBold text-title'>
                            <span>
                                مقاله ها
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            {/*  Admin Panel Left Side  */}
            <div>

            </div>
        </div>
    )
}
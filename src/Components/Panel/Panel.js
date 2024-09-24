import SectionTitle from "../Titles/SectionTitle";

export default function Panel() {

    return (
        <div className='flex gap-5 h-full bg-secondary'>
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
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-10 cursor-pointer'>
                            <span>
                                منو
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-10 cursor-pointer'>
                            <span>
                                زیر منو
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-10 cursor-pointer'>
                            <span>
                                خدمات
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-10 cursor-pointer'>
                            <span>
                                دوره ها
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-10 cursor-pointer'>
                            <span>
                                دسته بندی ها
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-10 cursor-pointer'>
                            <span>
                                مدرس ها
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-10 cursor-pointer'>
                            <span>
                                سبد خرید
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-10 cursor-pointer'>
                            <span>
                                کاربران
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-10 cursor-pointer'>
                            <span>
                                کامنت ها
                            </span>
                        </li>
                        <li className='flex items-center gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-10 cursor-pointer'>
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
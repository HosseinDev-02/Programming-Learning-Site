import {Link} from "react-router-dom";

export default function SideBar() {
    return (
        <div className='bg-background w-80 rounded-l-2xl divide-y divide-border p-5 shrink-0'>
            <div className='flex flex-col items-center gap-2 pb-4'>
                <h1 className='font-YekanBakh-Black text-primary text-2xl text-center'>
                    پنل کاربری
                </h1>
                <span className='text-title'>
                        محتوای خود را مدیریت کنید
                    </span>
            </div>
            <div className='pt-8'>
                <ul className='flex flex-col gap-3'>
                    <Link to='users'
                          className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                        <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#menu'></use>
                                    </svg>
                                </span>
                            <span>
                                    منو
                                </span>
                        </div>
                        <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                    </Link>
                    <Link to='users'
                          className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                        <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#submenu'></use>
                                    </svg>
                                </span>
                            زیر منو
                        </div>
                        <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                    </Link>
                    <Link to='users'
                          className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                        <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#services'></use>
                                    </svg>
                                </span>
                            <span>
                                    خدمات
                                </span>
                        </div>
                        <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                    </Link>
                    <Link to='users'
                          className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                        <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#courses'></use>
                                    </svg>
                                </span>
                            <span>
                                    دوره ها
                                </span>
                        </div>
                        <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                    </Link>
                    <Link to='users'
                          className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                        <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#categories'></use>
                                    </svg>
                                </span>
                            <span>
                                    دسته بندی ها
                                </span>
                        </div>
                        <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                    </Link>
                    <Link to='users'
                          className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                        <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#courses'></use>
                                    </svg>
                                </span>
                            <span>
                                    دوره ها
                                </span>
                        </div>
                        <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                    </Link>
                    <Link to='users'
                          className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                        <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#basket'></use>
                                    </svg>
                                </span>
                            <span>
                                    سبد خرید
                                </span>
                        </div>
                        <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                    </Link>
                    <Link to='users'
                          className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                        <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#articles'></use>
                                    </svg>
                                </span>
                            <span>
                                    مقاله ها
                                </span>
                        </div>
                        <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                    </Link>
                    <Link to='users'
                          className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                        <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#comments'></use>
                                    </svg>
                                </span>
                            <span>
                                    پرسش ها و نظرات
                                </span>
                        </div>
                        <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                    </Link>
                    <Link to='users'
                          className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                        <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#teacher'></use>
                                    </svg>
                                </span>
                            <span>
                                    مدرس
                                </span>
                        </div>
                        <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                    </Link>
                    <Link to='users'
                          className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                        <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#users'></use>
                                    </svg>
                                </span>
                            <span>
                                    کاربران
                                </span>
                        </div>
                        <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                    </Link>
                </ul>
            </div>
        </div>
)
}
function Header() {
    return (
        <header className='h-20 border-b border-b-zinc-200 flex items-center justify-center'>
            <div className='container'>
                <nav className='flex items-center justify-between'>
                    <div className='flex items-center gap-8'>
                        <a className='flex items-center gap-2' href='#'>
                            <svg className='w-6 h-6 text-primary'>
                                <use href='#logo'></use>
                            </svg>
                            <span className='flex items-start flex-col'>
                                <span className='text-sm font-semibold font-YekanBakh-Medium'>آکــــادمـــی</span>
                                <span className='text-primary text-xl font-black font-YekanBakh-ExtraBold'>نـــابــــغه</span>
                            </span>
                        </a>
                        <ul className='flex items-center gap-5 font-semibold text-sm'>
                            <li>
                                <a className='flex items-center gap-1' href="#">
                                    <span className='tracking-wide'>دسته بندی آمـــوزشها</span>
                                    <svg className='w-4 h-4'>
                                        <use href='#chevron-down'></use>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className='tracking-widest'>مقالات آموزشی</span>
                                </a>
                            </li>
                            <li>
                                <a className='flex items-center gap-1' href="#">
                                    <span className='tracking-widest'>لینکهای مفید</span>
                                    <svg className='w-4 h-4'>
                                        <use href='#chevron-down'></use>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
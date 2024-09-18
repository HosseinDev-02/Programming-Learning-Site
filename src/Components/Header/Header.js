import HeaderBtn from "./Header-Btn";
import Logo from "../Logo/Logo";

function Header() {

    const changeThemeHandler = (e) => {
        e.preventDefault()
        const themeIcon = document.querySelector('#theme-btn > svg > use')
        if (document.documentElement.className.includes('dark')) {
            document.documentElement.classList.remove('dark')
            themeIcon.setAttribute('href', '#moon')
            localStorage.setItem('theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            themeIcon.setAttribute('href', '#sun')
            localStorage.setItem('theme', 'dark')
        }
    }

    const mobileMenuHandler = () => {
        const mobileMenu = document.querySelector('#mobile-menu')
        mobileMenu.classList.add('mobile__menu--open')
        const coverElem = document.querySelector('#cover-elem')
        coverElem.classList.add('cover--show')
    }

    const searchBoxModalHandler = () => {
        const headerSearchModal = document.querySelector('#header-search-modal')
        headerSearchModal.classList.toggle('-top-20')
        headerSearchModal.classList.toggle('-top-px')
    }

    const searchBoxModalOpen = e => {
        e.preventDefault()
        searchBoxModalHandler()
    }

    const mobileMenuClose = () => {
        const mobileMenu = document.querySelector('#mobile-menu')
        mobileMenu.classList.remove('mobile__menu--open')
        const coverElem = document.querySelector('#cover-elem')
        coverElem.classList.remove('cover--show')
    }

    const mobileThemeHandler = (event) => {
        const mobileThemeIcon = document.querySelector('#mobile-theme-icon')
        if (document.documentElement.className.includes('dark')) {
            mobileThemeIcon.classList.remove('-translate-x-0.5')
            mobileThemeIcon.classList.add('-translate-x-[26px]')
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        } else {
            mobileThemeIcon.classList.add('-translate-x-0.5')
            mobileThemeIcon.classList.remove('-translate-x-[26px]')
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
    }

    const mobileCategoriesMenuHandler = (e) => {
        e.currentTarget.parentElement.classList.toggle('mobile-categories--open')
    }

    const categoriesSubmenuHandler = (e) => {
        e.currentTarget.parentElement.classList.toggle('mobile-categories__submenu--open')
    }

    return (
        // codding desktop header
        <header
            className='h-20 border-b border-b-border backdrop-blur-xl sticky top-0 left-0 right-0 flex items-center justify-center bg-background/80 z-30'>
            <div className='container'>
                <nav className='flex items-center justify-between relative'>
                    {/* header right side */}
                    <div className='flex items-center gap-3 lg:gap-8'>
                        {/* header mobile menu btn */}
                        <HeaderBtn clickEvent={mobileMenuHandler} icon='#bars-3'></HeaderBtn>
                        {/* Mobile Menu */}
                        <div id='mobile-menu'
                             className='lg:hidden transition-all h-screen fixed -right-72 xs:-right-80 top-0 bg-background rounded-tl-xl rounded-bl-xl w-72 xs:w-80 z-50 p-4 space-y-5'>
                            {/*  mobile menu header  */}
                            <div className='flex items-center justify-between mb-8'>
                                <Logo></Logo>
                                <span onClick={mobileMenuClose} className='text-title'>
                                        <svg className='w-6 h-6'>
                                            <use href='#x-mark'></use>
                                        </svg>
                                    </span>
                            </div>
                            {/*  mobile search box  */}
                            <form action="#"
                                  className='rounded-xl flex items-center bg-secondary relative h-10 px-12 py-2 border border-border'>
                                    <span
                                        className='absolute right-4 top-0 bottom-0 m-auto flex items-center justify-center text-title'>
                                        <svg className='w-5 h-5'>
                                            <use href='#search'></use>
                                        </svg>
                                    </span>
                                <input placeholder='دنبال چی میگردی ؟'
                                       className='w-full h-full bg-transparent outline-none text-title placeholder:text-caption text-sm'
                                       type="text"/>
                            </form>
                            {/*  mobile change them wrapper  */}
                            <div className='flex items-center justify-between border-y border-y-border py-4'>
                                    <span className='text-title font-YekanBakh-Bold text-sm'>
                                        تم تاریک
                                    </span>
                                <div className=''>
                                    <label htmlFor="theme-input"
                                           className='inline-block border-2 border-zinc-200 dark:border-[#1d4ed8] h-5 w-11 bg-white dark:bg-[#1d4ed8] relative rounded-xl'>
                                        <span id='mobile-theme-icon'
                                              className='transition-all duration-300 inline w-3 h-3 bg-zinc-200 dark:bg-black rounded-full absolute -translate-x-[26px] top-0 bottom-0 m-auto'></span>
                                    </label>
                                    <input onChange={mobileThemeHandler} id='theme-input' type="checkbox"
                                           className='hidden'/>
                                </div>
                            </div>
                            {/*  Mobile Menu Categories  */}
                            <div>
                                <div onClick={mobileCategoriesMenuHandler}
                                     className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#bars-2'></use>
                                            </svg>
                                        </span>
                                        <span className='text-xs font-YekanBakh-SemiBold'>دسته بندی آموزش ها</span>
                                    </div>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#chevron-down'></use>
                                        </svg>
                                    </span>
                                </div>
                                <ul className='child:py-2 hidden relative before:absolute before:content-[""] before:top-0 before:bottom-0 before:right-3 before:bg-zinc-200 dark:before:bg-zinc-900 before:h-full before:w-px pr-8 mt-4 child:text-xs text-zinc-400'>
                                    <li>
                                        <a onClick={categoriesSubmenuHandler} className='flex items-center gap-1'
                                           href="#">
                                            <svg className='w-4 h-4'>
                                                <use href='#chevron-left'></use>
                                            </svg>
                                            برنامه نویسی وب
                                        </a>
                                        <ul className='child:py-2 relative before:absolute before:content-[""] before:top-0 before:bottom-0 before:right-3 before:bg-zinc-200 dark:before:bg-zinc-900 before:h-full before:w-px pr-8 mt-4 text-xs text-zinc-400 hidden'>
                                            <li>
                                                <a className='flex items-center gap-2' href="#">
                                                    <span className='w-2 h-px bg-border'></span>
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li>
                                                <a className='flex items-center gap-2' href="#">
                                                    <span className='w-2 h-px bg-border'></span>
                                                    ری اکت
                                                </a>
                                            </li>
                                            <li>
                                                <a className='flex items-center gap-2' href="#">
                                                    <span className='w-2 h-px bg-border'></span>
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li>
                                                <a className='flex items-center gap-2' href="#">
                                                    <span className='w-2 h-px bg-border'></span>
                                                    ....
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className='flex items-center gap-3' href="#">
                                            <span className='w-2 h-px bg-border'></span>
                                            دیتاساینس
                                        </a>
                                    </li>
                                    <li>
                                        <a className='flex items-center gap-3' href="#">
                                            <span className='w-2 h-px bg-border'></span>
                                            زبانهای برنامه نویسی
                                        </a>
                                    </li>
                                    <li>
                                        <a className='flex items-center gap-3' href="#">
                                            <span className='w-2 h-px bg-border'></span>
                                            ....
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*  mobile menu links  */}
                            <a className='flex items-center gap-2 text-xs font-YekanBakh-SemiBold' href="#">
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#question-circle'></use>
                                    </svg>
                                </span>
                                پرسش و پاسخ
                            </a>
                            <a className='flex items-center gap-2 text-xs font-YekanBakh-SemiBold' href="#">
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#document-text'></use>
                                    </svg>
                                </span>
                                مقالات آموزشی
                            </a>
                        </div>
                        {/*  mobile menu cover elem  */}
                        <div onClick={mobileMenuClose} id='cover-elem'
                             className='fixed inset-0 w-full h-full bg-zinc-100/80 dark:bg-mirage/80 z-40 invisible opacity-0 transition-all'></div>
                        {/* header logo */}
                        <Logo></Logo>
                        {/* header menu */}
                        <ul className='hidden lg:flex items-center gap-5 font-YekanBakh-SemiBold text-sm child-hover:text-title child:transition-colors'>
                            <li className='group/categories'>
                                <a className='flex items-center gap-1' href="#">
                                    <span className=''>دسته بندی آمـــوزشها</span>
                                    <svg className='w-5 h-5 group-hover/categories:rotate-180 transition-all'>
                                        <use href='#chevron-down'></use>
                                    </svg>
                                </a>
                                {/* header categories menu */}
                                <ul className='invisible opacity-0 group-hover/categories:visible group-hover/categories:opacity-100 absolute top-full bg-background border border-border w-56 flex flex-col gap-1 child:leading-5 delay-75 transition-all shadow-black/5 text-title z-20'>
                                    <li className='group/subcategories'>
                                        <a className='flex items-center justify-between p-3 hover:text-[#1d4ed8] transition-colors'
                                           href="#">
                                            <span>برنامه نویسی وب</span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-left'></use>
                                            </svg>
                                        </a>
                                        {/* header categories submenu */}
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-background border border-border w-96 absolute right-full -top-px -bottom-px text-caption text-sm'>
                                            <li className='absolute top-2 font-YekanBakh-Bold pointer-events-none'>
                                                محبوب ترین موضوعات
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='group/subcategories'>
                                        <a className='flex items-center justify-between p-3 hover:text-[#1d4ed8] transition-colors'
                                           href="#">
                                            <span>زبانهای برنامه نویسی</span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-left'></use>
                                            </svg>
                                        </a>
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-background border border-border w-96 absolute right-full -top-px -bottom-px text-sm text-caption'>
                                            <li className='absolute top-2 font-YekanBakh-SemiBold pointer-events-none'>
                                                محبوب ترین موضوعات
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='group/subcategories'>
                                        <a className='flex items-center justify-between p-3 hover:text-[#1d4ed8] transition-colors'
                                           href="#">
                                            <span>توسعه بازی</span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-left'></use>
                                            </svg>
                                        </a>
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-white border border-zinc-200 dark:border-zinc-800 w-96 absolute right-full -top-px -bottom-px text-sm text-caption dark:bg-black'>
                                            <li className='absolute top-2 font-YekanBakh-SemiBold pointer-events-none'>
                                                محبوب ترین موضوعات
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='group/subcategories'>
                                        <a className='flex items-center justify-between p-3 hover:text-[#1d4ed8] transition-colors'
                                           href="#">
                                            <span>برنامه نویسی موبایل</span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-left'></use>
                                            </svg>
                                        </a>
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-white border border-zinc-200 dark:border-zinc-800 w-96 absolute right-full -top-px -bottom-px text-sm text-caption dark:bg-black'>
                                            <li className='absolute top-2 font-YekanBakh-SemiBold pointer-events-none'>
                                                محبوب ترین موضوعات
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='group/subcategories'>
                                        <a className='flex items-center justify-between p-3 hover:text-[#1d4ed8] transition-colors'
                                           href="#">
                                            <span>طراحی دیتابیس</span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-left'></use>
                                            </svg>
                                        </a>
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-white border border-zinc-200 dark:border-zinc-800 w-96 absolute right-full -top-px -bottom-px text-sm text-caption dark:bg-black'>
                                            <li className='absolute top-2 font-YekanBakh-SemiBold pointer-events-none'>
                                                محبوب ترین موضوعات
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-[#1d4ed8] transition-colors hover:before:bg-[#1d4ed8]'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <span>مقالات آموزشی</span>
                                </a>
                            </li>
                            <li className='group/links'>
                                <a className='flex items-center gap-1' href="#">
                                    <span>لینکهای مفید</span>
                                    <svg className='w-5 h-5 group-hover/links:rotate-180 transition-all'>
                                        <use href='#chevron-down'></use>
                                    </svg>
                                </a>
                                {/* Header links menu */}
                                <div
                                    className='rounded-xl border border-zinc-200 dark:border-zinc-800 absolute top-full w-56 p-3 flex flex-col gap-3 bg-white dark:bg-black text-title dark:text-white invisible opacity-0 group-hover/links:visible group-hover/links:opacity-100 transition-all delay-75 child:transition-colors font-YekanBakh-SemiBold text-sm z-20'>
                                    <a className='hover:text-[#1d4ed8]' href="#">مشاهده پروفایل</a>
                                    <a className='hover:text-[#1d4ed8]' href="#">مالی</a>
                                    <a className='hover:text-[#1d4ed8]' href="#">دوره ها</a>
                                    <a className='text-red-500 hover:text-red-700' href="#">خروج از حساب</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* header left side */}
                    <div className='flex items-center gap-3 md:gap-5'>
                        {/* header search btn */}
                        <HeaderBtn clickEvent={searchBoxModalOpen} icon='#search'></HeaderBtn>
                        {/* modal search wrapper */}
                        <div id='header-search-modal'
                             className='transition-all fixed left-0 right-0 -top-20 bg-background z-50 hidden lg:flex items-center justify-center h-20'>
                            <div className="container">
                                <div className='flex items-center justify-between gap-5'>
                                    <form className='block w-full h-10' action="#">
                                        <input
                                            className='placeholder:text-caption w-full h-full outline-none text-title bg-transparent'
                                            placeholder='نام دوره،مقاله و یا دسته بندی را وارد نمایید..' type="text"/>
                                    </form>
                                    <span onClick={searchBoxModalHandler} id='search-modal-close-btn'
                                          className='flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-title hover:text-red-500 transition-colors cursor-pointer'>
                                        <svg className='w-6 h-6'>
                                            <use href='#x-mark'></use>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* header change theme btn */}
                        <HeaderBtn clickEvent={changeThemeHandler} id='theme-btn' icon='#moon'></HeaderBtn>
                        {/* header basket btn */}
                        <HeaderBtn count={2} icon='#bag'></HeaderBtn>
                        {/* header user profile btn */}
                        <div className='flex items-center gap-3 group/profile cursor-pointer'>
                            <HeaderBtn icon='#user'></HeaderBtn>
                            <span className='hidden xs:flex flex-col gap-1 items-start text-xs pointer-events-none'>
                                <span
                                    className='text-title dark:text-white font-YekanBakh-SemiBold'>جلال بهرامی راد</span>
                                <span className='font-YekanBakh-SemiBold'>خوش آمـــدید</span>
                            </span>
                            <svg className='w-5 h-5 hidden xs:block group-hover/profile:rotate-180 transition-all'>
                                <use href='#chevron-down'></use>
                            </svg>
                            {/* header user profile menu */}
                            <div id='user-profile'
                                 className='rounded-xl group-hover/profile:visible group-hover/profile:opacity-100 border border-zinc-200 dark:border-zinc-800 absolute top-full left-0 w-56 p-3 flex flex-col gap-3 bg-white dark:bg-black invisible opacity-0 transition-all delay-75 child:transition-colors font-YekanBakh-SemiBold text-sm text-title dark:text-white'>
                                <a className='hover:text-[#1d4ed8]' href="#">مشاهده پروفایل</a>
                                <a className='hover:text-[#1d4ed8]' href="#">مالی</a>
                                <a className='hover:text-[#1d4ed8]' href="#">دوره ها</a>
                                <a className='text-red-500 hover:text-red-700' href="#">خروج از حساب</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
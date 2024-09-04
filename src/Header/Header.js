import HeaderBtn from "./Header-Btn";


function Header() {

    const changeThemeHandler = (e) => {
        e.preventDefault()
        const themeIcon = document.querySelector('#theme-btn > svg > use')
        console.log(themeIcon)
        if(document.documentElement.className.includes('dark')){
            document.documentElement.classList.remove('dark')
            themeIcon.setAttribute('href', '#moon')
            localStorage.setItem('theme', 'light')
        }else {
            document.documentElement.classList.add('dark')
            themeIcon.setAttribute('href', '#sun')
            localStorage.setItem('theme', 'dark')
        }
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

    return (
        // codding desktop header
        <header className='h-20 border-b border-b-zinc-200 dark:border-b-zinc-800 flex items-center justify-center bg-white dark:bg-black/80 z-40'>
            <div className='container'>
                <nav className='flex items-center justify-between relative'>
                    {/* header right side */}
                    <div className='flex items-center gap-3 lg:gap-8'>
                        {/* header mobile menu btn */}
                        <HeaderBtn icon='#bars-3'></HeaderBtn>
                        {/* header logo */}
                        <a className='flex items-center gap-2' href='#'>
                            <svg className='w-6 h-6 text-primary'>
                                <use href='#logo'></use>
                            </svg>
                            <span className='flex items-start flex-col'>
                                <span className='text-sm font-semibold font-YekanBakh-Medium'>آکــــادمـــی</span>
                                <span className='text-primary text-xl font-black font-YekanBakh-ExtraBold'>نـــابــــغه</span>
                            </span>
                        </a>
                        {/* header menu */}
                        <ul className='hidden lg:flex items-center gap-5 font-semibold text-sm child-hover:text-title dark:child-hover:text-white child:transition-colors'>
                            <li className='group/categories'>
                                <a className='flex items-center gap-1' href="#">
                                    <span className='tracking-wide'>دسته بندی آمـــوزشها</span>
                                    <svg className='w-5 h-5 group-hover/categories:rotate-180 transition-all'>
                                        <use href='#chevron-down'></use>
                                    </svg>
                                </a>
                                {/* header categories menu */}
                                <ul className='invisible opacity-0 group-hover/categories:visible group-hover/categories:opacity-100 absolute top-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 w-56 flex flex-col gap-1 child:leading-5 delay-75 transition-all shadow-black/5 text-title dark:text-white'>
                                    <li className='group/subcategories'>
                                        <a className='flex items-center justify-between p-3 hover:text-primary transition-colors' href="#">
                                            <span>برنامه نویسی وب</span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-left'></use>
                                            </svg>
                                        </a>
                                        {/* header categories submenu */}
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 w-96 absolute right-full -top-px -bottom-px text-base text-caption'>
                                            <li className='absolute top-2 font-bold pointer-events-none'>
                                                محبوب ترین موضوعات
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='group/subcategories'>
                                        <a className='flex items-center justify-between p-3 hover:text-primary transition-colors' href="#">
                                            <span>زبانهای برنامه نویسی</span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-left'></use>
                                            </svg>
                                        </a>
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-white border border-zinc-200 dark:border-zinc-800 w-96 absolute right-full -top-px -bottom-px text-base text-caption dark:bg-black'>
                                            <li className='absolute top-2 font-bold pointer-events-none'>
                                                محبوب ترین موضوعات
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='group/subcategories'>
                                        <a className='flex items-center justify-between p-3 hover:text-primary transition-colors' href="#">
                                            <span>توسعه بازی</span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-left'></use>
                                            </svg>
                                        </a>
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-white border border-zinc-200 dark:border-zinc-800 w-96 absolute right-full -top-px -bottom-px text-base text-caption dark:bg-black'>
                                            <li className='absolute top-2 font-bold pointer-events-none'>
                                                محبوب ترین موضوعات
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='group/subcategories'>
                                        <a className='flex items-center justify-between p-3 hover:text-primary transition-colors' href="#">
                                            <span>برنامه نویسی موبایل</span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-left'></use>
                                            </svg>
                                        </a>
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-white border border-zinc-200 dark:border-zinc-800 w-96 absolute right-full -top-px -bottom-px text-base text-caption dark:bg-black'>
                                            <li className='absolute top-2 font-bold pointer-events-none'>
                                                محبوب ترین موضوعات
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='group/subcategories'>
                                        <a className='flex items-center justify-between p-3 hover:text-primary transition-colors' href="#">
                                            <span>طراحی دیتابیس</span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-left'></use>
                                            </svg>
                                        </a>
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-white border border-zinc-200 dark:border-zinc-800 w-96 absolute right-full -top-px -bottom-px text-base text-caption dark:bg-black'>
                                            <li className='absolute top-2 font-bold pointer-events-none'>
                                                محبوب ترین موضوعات
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    تیلویند
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    جاوااسکریپت
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    نود جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ریکت جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                   href="#">
                                                    ویو جی اس
                                                </a>
                                            </li>
                                            <li className='w-1/2'>
                                                <a className='relative before:w-1 before:h-1 before:bg-caption before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
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
                                    <span className='tracking-widest'>مقالات آموزشی</span>
                                </a>
                            </li>
                            <li className='group/links'>
                                <a className='flex items-center gap-1' href="#">
                                    <span className='tracking-widest'>لینکهای مفید</span>
                                    <svg className='w-5 h-5 group-hover/links:rotate-180 transition-all'>
                                        <use href='#chevron-down'></use>
                                    </svg>
                                </a>
                                {/* Header links menu */}
                                <div className='border border-zinc-200 dark:border-zinc-800 absolute top-full w-56 p-3 flex flex-col gap-3 bg-white dark:bg-black text-title dark:text-white invisible opacity-0 group-hover/links:visible group-hover/links:opacity-100 transition-all delay-75 child:transition-colors font-semibold text-sm'>
                                    <a className='hover:text-primary' href="#">مشاهده پروفایل</a>
                                    <a className='hover:text-primary' href="#">مالی</a>
                                    <a className='hover:text-primary' href="#">دوره ها</a>
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
                        <div id='header-search-modal' className='transition-all fixed left-0 right-0 -top-20 bg-white z-50 hidden lg:flex items-center justify-center h-20'>
                            <div className="container">
                                <div className='flex items-center justify-between gap-5'>
                                    <form className='block w-full h-10' action="#">
                                        <input className='placeholder:text-caption w-full h-full outline-none text-title text-lg tracking-wide' placeholder='نام دوره،مقاله و یا دسته بندی را وارد نمایید..' type="text"/>
                                    </form>
                                    <span onClick={searchBoxModalHandler} id='search-modal-close-btn' className='flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 dark:bg-mirage dark:text-white hover:text-red-500 transition-colors cursor-pointer'>
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
                                <span className='text-title dark:text-white font-semibold tracking-wide'>جلال بهرامی راد</span>
                                <span className='font-semibold tracking-wide'>خوش آمـــدید</span>
                            </span>
                            <svg className='w-5 h-5 hidden xs:block group-hover/profile:rotate-180 transition-all'>
                                <use href='#chevron-down'></use>
                            </svg>
                            {/* header user profile menu */}
                            <div id='user-profile'
                                className='group-hover/profile:visible group-hover/profile:opacity-100 border border-zinc-200 dark:border-zinc-800 absolute top-full left-0 w-56 p-3 flex flex-col gap-3 bg-white dark:bg-black invisible opacity-0 transition-all delay-75 child:transition-colors font-semibold text-sm text-title dark:text-white'>
                                <a className='hover:text-primary' href="#">مشاهده پروفایل</a>
                                <a className='hover:text-primary' href="#">مالی</a>
                                <a className='hover:text-primary' href="#">دوره ها</a>
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
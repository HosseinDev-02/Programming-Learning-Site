function Header() {
    function userProfileHandler() {
        const userProfile = document.querySelector('#user-profile')
        if(userProfile.className.includes('invisible')) {
            userProfile.classList.remove('invisible')
            userProfile.classList.remove('opacity-0')
        }else {
            userProfile.classList.add('invisible')
            userProfile.classList.add('opacity-0')
        }
    }
    return (
        <header className='h-20 border-b border-b-zinc-200 flex items-center justify-center'>
            <div className='container'>
                <nav className='flex items-center justify-between relative'>
                    <div className='flex items-center gap-3 lg:gap-8'>
                        <span className='flex lg:hidden items-center justify-center rounded-full bg-zinc-100 w-10 h-10'>
                            <svg className='w-6 h-6'>
                                <use href='#bars-3'></use>
                            </svg>
                        </span>
                        <a className='flex items-center gap-2' href='#'>
                            <svg className='w-6 h-6 text-primary'>
                                <use href='#logo'></use>
                            </svg>
                            <span className='flex items-start flex-col'>
                                <span className='text-sm font-semibold font-YekanBakh-Medium'>آکــــادمـــی</span>
                                <span className='text-primary text-xl font-black font-YekanBakh-ExtraBold'>نـــابــــغه</span>
                            </span>
                        </a>
                        <ul className='hidden lg:flex items-center gap-5 font-semibold text-sm child-hover:text-title child:transition-colors'>
                            <li className='group/categories'>
                                <a className='flex items-center gap-1' href="#">
                                    <span className='tracking-wide'>دسته بندی آمـــوزشها</span>
                                    <svg className='w-5 h-5 group-hover/categories:rotate-180 transition-all'>
                                        <use href='#chevron-down'></use>
                                    </svg>
                                </a>
                                <ul className='invisible opacity-0 group-hover/categories:visible group-hover/categories:opacity-100 absolute top-full bg-white border border-zinc-200 w-56 flex flex-col gap-1 child:leading-5 delay-75 transition-all shadow-black/5'>
                                    <li className='group/subcategories'>
                                        <a className='flex items-center justify-between p-3 hover:text-primary transition-colors' href="#">
                                            <span>برنامه نویسی وب</span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-left'></use>
                                            </svg>
                                        </a>
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-white border border-zinc-200 w-96 absolute right-full -top-px -bottom-px text-base'>
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
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-white border border-zinc-200 w-96 absolute right-full -top-px -bottom-px text-base'>
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
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-white border border-zinc-200 w-96 absolute right-full -top-px -bottom-px text-base'>
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
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-white border border-zinc-200 w-96 absolute right-full -top-px -bottom-px text-base'>
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
                                        <ul className='invisible opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-white border border-zinc-200 w-96 absolute right-full -top-px -bottom-px text-base'>
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
                                <div className='border border-zinc-200 rounded-xl absolute top-full w-56 p-3 flex flex-col gap-3 bg-white invisible opacity-0 group-hover/links:visible group-hover/links:opacity-100 transition-all delay-75 child:transition-colors'>
                                    <a className='hover:text-primary' href="#">مشاهده پروفایل</a>
                                    <a className='hover:text-primary' href="#">مالی</a>
                                    <a className='hover:text-primary' href="#">دوره ها</a>
                                    <a className='text-red-500 hover:text-red-700' href="#">خروج از حساب</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-3 md:gap-5'>
                        <a className='hidden lg:flex items-center justify-center rounded-full bg-zinc-100 w-10 h-10' href='#'>
                            <svg className='w-5 h-5'>
                                <use href='#moon'></use>
                            </svg>
                        </a>
                        <a className='hidden lg:flex items-center justify-center rounded-full bg-zinc-100 w-10 h-10' href="#">
                            <svg className='w-5 h-5'>
                                <use href='#search'></use>
                            </svg>
                        </a>
                        <a className='flex items-center justify-center rounded-full bg-zinc-100 w-10 h-10 relative' href="#">
                            <svg className='w-5 h-5'>
                                <use href='#bag'></use>
                            </svg>
                            <span className='absolute -left-1 -top-1 bg-primary flex items-center justify-center rounded-full w-5 h-5 font-semibold text-xs text-white'>2</span>
                            <span className='animate-ping absolute -left-1 -top-1 bg-primary w-5 h-5 rounded-full'></span>
                        </a>
                        <div className='flex items-center gap-3 group/profile' onClick={userProfileHandler}>
                            <span className='flex items-center justify-center rounded-full bg-zinc-100 w-10 h-10'>
                                <svg className='w-5 h-5'>
                                    <use href='#user'></use>
                                </svg>
                            </span>
                            <span className='hidden xs:flex flex-col gap-1 items-start text-xs'>
                                <span className='text-title font-semibold tracking-wide'>جلال بهرامی راد</span>
                                <span className='font-semibold tracking-wide'>خوش آمـــدید</span>
                            </span>
                            <svg className='w-5 h-5 hidden xs:block'>
                                <use href='#chevron-down'></use>
                            </svg>
                            <div id='user-profile'
                                className='border border-zinc-200 rounded-xl absolute top-full left-0 w-56 p-3 flex flex-col gap-3 bg-white invisible opacity-0 transition-all delay-75 child:transition-colors'>
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
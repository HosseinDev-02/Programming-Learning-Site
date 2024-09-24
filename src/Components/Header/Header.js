import Logo from "../Logo/Logo";
import {useState} from "react";
import RoundButton from "../Buttons/RoundButton";

function Header() {

    let localStorageValue = localStorage.getItem('theme')

    const [mobileMenuShow, setMobileMenuShow] = useState(false)
    const [searchModalShow, setSearchModalShow] = useState(false)
    const [darkMode, setDarkMode] = useState(localStorageValue)
    const [showMobileCategoryMenu, setShowMobileCategoryMenu] = useState(false)
    const [showMobileCategorySubMenu, setShowMobileCategorySubMenu] = useState(false)
    const [userProfileShow, setUserProfileShow] = useState(false)

    const themeHandler = () => {
        if(darkMode === 'dark') {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
        setDarkMode(prevStat => {
            if(prevStat === 'dark') {
                return 'light'
            }else {
                return 'dark'
            }
        })
    }

    return (
        <>
            <header
                className='h-20 border-b border-b-border backdrop-blur-xl sticky top-0 left-0 right-0 flex items-center justify-center bg-background/80 z-30'>
                <div className='container'>
                    <nav className='flex items-center justify-between relative'>
                        {/* header right side */}
                        <div className='flex items-center gap-3 lg:gap-8'>
                            {/* header mobile menu btn */}
                            <RoundButton className={'flex lg:hidden'} clickEvent={() => setMobileMenuShow(true)} icon='#bars-3'></RoundButton>
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
                                    <ul className='invisible shadow opacity-0 group-hover/categories:visible group-hover/categories:opacity-100 absolute top-full bg-background border border-border w-56 flex flex-col gap-1 child:leading-5 delay-75 transition-all shadow-black/5 text-title z-20'>
                                        <li className='group/subcategories'>
                                            <a className='flex items-center justify-between p-3 hover:text-primary transition-colors'
                                               href="#">
                                                <span>برنامه نویسی وب</span>
                                                <svg className='w-5 h-5'>
                                                    <use href='#chevron-left'></use>
                                                </svg>
                                            </a>
                                            {/* header categories submenu */}
                                            <ul className='invisible shadow opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-background border border-border w-96 absolute right-full -top-px -bottom-px text-caption text-sm'>
                                                <li className='absolute top-2 font-YekanBakh-Bold pointer-events-none'>
                                                    محبوب ترین موضوعات
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        جاوااسکریپت
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        نود جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ریکت جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ویو جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        تیلویند
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        جاوااسکریپت
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        نود جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ریکت جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ویو جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        تیلویند
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='group/subcategories'>
                                            <a className='flex items-center justify-between p-3 hover:text-primary transition-colors'
                                               href="#">
                                                <span>زبانهای برنامه نویسی</span>
                                                <svg className='w-5 h-5'>
                                                    <use href='#chevron-left'></use>
                                                </svg>
                                            </a>
                                            <ul className='invisible shadow opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-background border border-border w-96 absolute right-full -top-px -bottom-px text-caption text-sm'>
                                                <li className='absolute top-2 font-YekanBakh-Bold pointer-events-none'>
                                                    محبوب ترین موضوعات
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        جاوااسکریپت
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        نود جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ریکت جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ویو جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        تیلویند
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        جاوااسکریپت
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        نود جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ریکت جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ویو جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        تیلویند
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='group/subcategories'>
                                            <a className='flex items-center justify-between p-3 hover:text-primary transition-colors'
                                               href="#">
                                                <span>توسعه بازی</span>
                                                <svg className='w-5 h-5'>
                                                    <use href='#chevron-left'></use>
                                                </svg>
                                            </a>
                                            <ul className='invisible shadow opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-background border border-border w-96 absolute right-full -top-px -bottom-px text-caption text-sm'>
                                                <li className='absolute top-2 font-YekanBakh-Bold pointer-events-none'>
                                                    محبوب ترین موضوعات
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        جاوااسکریپت
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        نود جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ریکت جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ویو جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        تیلویند
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        جاوااسکریپت
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        نود جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ریکت جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ویو جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        تیلویند
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='group/subcategories'>
                                            <a className='flex items-center justify-between p-3 hover:text-primary transition-colors'
                                               href="#">
                                                <span>برنامه نویسی موبایل</span>
                                                <svg className='w-5 h-5'>
                                                    <use href='#chevron-left'></use>
                                                </svg>
                                            </a>
                                            <ul className='invisible shadow opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-background border border-border w-96 absolute right-full -top-px -bottom-px text-caption text-sm'>
                                                <li className='absolute top-2 font-YekanBakh-Bold pointer-events-none'>
                                                    محبوب ترین موضوعات
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        جاوااسکریپت
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        نود جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ریکت جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ویو جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        تیلویند
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        جاوااسکریپت
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        نود جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ریکت جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ویو جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        تیلویند
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='group/subcategories'>
                                            <a className='flex items-center justify-between p-3 hover:text-primary transition-colors'
                                               href="#">
                                                <span>طراحی دیتابیس</span>
                                                <svg className='w-5 h-5'>
                                                    <use href='#chevron-left'></use>
                                                </svg>
                                            </a>
                                            <ul className='invisible shadow opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-background border border-border w-96 absolute right-full -top-px -bottom-px text-caption text-sm'>
                                                <li className='absolute top-2 font-YekanBakh-Bold pointer-events-none'>
                                                    محبوب ترین موضوعات
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        جاوااسکریپت
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        نود جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ریکت جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ویو جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        تیلویند
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        جاوااسکریپت
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        نود جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ریکت جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                       href="#">
                                                        ویو جی اس
                                                    </a>
                                                </li>
                                                <li className='w-1/2'>
                                                    <a className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
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
                                        className='rounded-xl shadow border border-border absolute top-full w-56 p-3 flex flex-col bg-background text-title invisible opacity-0 group-hover/links:visible group-hover/links:opacity-100 transition-all delay-75 child:transition-colors font-YekanBakh-SemiBold text-xs z-20'>
                                        <a href='/dashboard' className='hover:text-primary py-2 px-3'>پنل کاربری</a>
                                        <a href='/login-register' className='hover:text-primary py-2 px-3'>ورود / ثبت
                                            نام</a>
                                        <a href='/courses' className='hover:text-primary py-2 px-3'>دوره ها</a>
                                        <a href='/basket' className='text-red-500 hover:text-red-700 py-2 px-3'>سبد
                                            خرید</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* header left side */}
                        <div className='flex items-center gap-3 md:gap-5'>
                            {/* header search btn */}
                            <RoundButton className={'hidden lg:flex cursor-pointer'}
                                         clickEvent={() => setSearchModalShow(true)} icon='#search'></RoundButton>
                            {/* modal search wrapper */}
                            <div style={searchModalShow ? {top: '0'} : {}} id='header-search-modal'
                                 className='transition-all fixed left-0 right-0 -top-20 bg-background z-50 hidden lg:flex items-center justify-center h-20'>
                                <div className="container">
                                    <div className='flex items-center justify-between gap-5'>
                                        <form className='block w-full h-10' action="#">
                                            <input
                                                className='placeholder:text-caption w-full h-full outline-none text-title bg-transparent'
                                                placeholder='نام دوره،مقاله و یا دسته بندی را وارد نمایید..'
                                                type="text"/>
                                        </form>
                                        <RoundButton
                                            style={{width: '36px', height: '36px', flexShrink: '0', cursor: 'pointer'}}
                                            icon='#x-mark' clickEvent={() => setSearchModalShow(false)}></RoundButton>
                                    </div>
                                </div>
                            </div>
                            {/* header change theme btn */}
                            {
                                darkMode === 'dark' ? (
                                    <RoundButton className={'hidden lg:flex cursor-pointer'} clickEvent={themeHandler}
                                                 icon='#sun'></RoundButton>
                                ) : (
                                    <RoundButton className={'hidden lg:flex cursor-pointer'} clickEvent={themeHandler}
                                                 icon='#moon'></RoundButton>
                                )
                            }
                            {/* header basket btn */}
                            <RoundButton link={true} href='/basket' count={2} icon='#bag'></RoundButton>
                            {/* header user profile btn */}
                            <div className='group/profile'>
                                <button type='button' onClick={() => setUserProfileShow(prevState => !prevState)}
                                        className='flex items-center gap-3 cursor-pointer'>
                                    <RoundButton icon='#user'></RoundButton>
                                    <span
                                        className='hidden xs:flex flex-col gap-1 items-start text-xs pointer-events-none'>
                                <span
                                    className='text-title font-YekanBakh-SemiBold'>جلال بهرامی راد</span>
                                <span className='font-YekanBakh-SemiBold'>خوش آمـــدید</span>
                            </span>
                                    <svg style={userProfileShow ? {transform: 'rotate(180deg)'} : {}}
                                         className='w-5 h-5 hidden xs:block transition-all'>
                                        <use href='#chevron-down'></use>
                                    </svg>
                                </button>
                                {/* header user profile menu */}
                                <div id='user-profile'
                                     style={userProfileShow ? {visibility: 'visible', opacity: '1'} : {}}
                                     className='rounded-xl shadow border border-border absolute top-full left-0 w-56 p-3 flex flex-col bg-background invisible opacity-0 transition-all delay-75 child:transition-colors font-YekanBakh-SemiBold text-xs text-title'>
                                    <a className='hover:text-primary flex items-center gap-2 py-2 px-3' href="#">
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#stars'></use>
                                            </svg>
                                        </span>
                                        <span>
                                            مشاهده پروفایل
                                        </span>
                                    </a>
                                    <a className='hover:text-primary flex items-center gap-2 py-2 px-3' href="#">
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#education-outline'></use>
                                            </svg>
                                        </span>
                                        <span>
                                            دوره ها
                                        </span>
                                    </a>
                                    <a className='hover:text-primary flex items-center gap-2 py-2 px-3' href="#">
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#money'></use>
                                            </svg>
                                        </span>
                                        <span>
                                            مالی
                                        </span>
                                    </a>
                                    <a className='hover:text-primary flex items-center gap-2 py-2 px-3' href="#">
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#comment'></use>
                                            </svg>
                                        </span>
                                        <span>
                                            پرسش و دیدگاه ها
                                        </span>
                                    </a>
                                    <a className='hover:text-red-700 text-red-500 flex items-center gap-2 py-2 px-3' href="#">
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#logout'></use>
                                            </svg>
                                        </span>
                                        <span>
                                            خروج از حساب
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* Mobile Menu */}
            <div style={mobileMenuShow ? {right: '0'} : {}} id='mobile-menu'
                 className='lg:hidden transition-all h-screen fixed -right-72 xs:-right-80 top-0 bg-background rounded-tl-xl rounded-bl-xl w-72 xs:w-80 p-4 space-y-5 z-50'>
                {/*  mobile menu header  */}
                <div className='flex items-center justify-between mb-8'>
                    <Logo></Logo>
                    <span onClick={() => setMobileMenuShow(false)} className='text-title'>
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
                <label
                    className="flex items-center justify-between border-y border-y-border py-4">
                                <span className='text-title font-YekanBakh-Bold text-sm'>
                                        تم تاریک
                                    </span>
                    <input onChange={themeHandler} className='peer sr-only' type="checkbox"/>
                    <div
                        className='inline-block cursor-pointer border-2 border-zinc-200 dark:border-primary h-5 w-11 bg-white dark:bg-primary relative rounded-xl transition-all'>
                        <span style={darkMode === 'dark' ? {transform: 'translateX(26px)', backgroundColor: '#000'} : {}} className='w-3 h-3 bg-zinc-200 absolute left-0 translate-x-[2px] rounded-full top-0 bottom-0 my-auto transition-all'></span>
                    </div>
                </label>
                {/*  Mobile Menu Categories  */}
                <div>
                    <div style={showMobileCategoryMenu ? {color: 'rgb(var(--color-title))'} : {}}  onClick={() => setShowMobileCategoryMenu(prevState => !prevState)}
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
                                        <svg style={showMobileCategoryMenu ? {transform: 'rotate(180deg)'} : {}} className='w-5 h-5'>
                                            <use href='#chevron-down'></use>
                                        </svg>
                                    </span>
                    </div>
                    <ul style={showMobileCategoryMenu ? {display: 'inline-block'} : {}} className='child:py-2 hidden relative before:absolute before:content-[""] before:top-0 before:bottom-0 before:right-3 before:bg-zinc-200 dark:before:bg-zinc-900 before:h-full before:w-px pr-8 mt-4 child:text-xs text-zinc-400'>
                        <li>
                            <a style={showMobileCategorySubMenu ? {color: 'rgb(var(--color-title))'} : {}}  onClick={() => setShowMobileCategorySubMenu(prevState => !prevState)} className='flex items-center gap-1'
                               href="#">
                                <svg style={showMobileCategorySubMenu ? {transform: 'rotate(-45deg)'} : {}} className='w-4 h-4'>
                                    <use href='#chevron-left'></use>
                                </svg>
                                برنامه نویسی وب
                            </a>
                            <ul style={showMobileCategorySubMenu ? {display: 'inline-block'} : {}} className='child:py-2 relative before:absolute before:content-[""] before:top-0 before:bottom-0 before:right-3 before:bg-zinc-200 dark:before:bg-zinc-900 before:h-full before:w-px pr-8 mt-4 text-xs text-zinc-400 hidden'>
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
            <div onClick={() => setMobileMenuShow(false)}
                 style={mobileMenuShow ? {visibility: 'visible', opacity: '1'} : {}} id='cover-elem'
                 className='fixed inset-0 bg-secondary/80 z-40 invisible opacity-0 transition-all'></div>
        </>
    )
}

export default Header
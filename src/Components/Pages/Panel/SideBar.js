import {Link} from "react-router-dom";
import {useState} from "react";
import RoundButton from "../../Buttons/RoundButton";

export default function SideBar(props) {

    const [userMenuShow, setUserMenuShow] = useState(false)
    const [coursesMenuShow, setCoursesMenuShow] = useState(false)
    const [categoriesMenuShow, setCategoriesMenuShow] = useState(false)
    const [sessionsMenuShow, setSessionsMenuShow] = useState(false)
    const [menusMenuShow, setMenusMenuShow] = useState(false)

    return (
        <div style={props.open ? {right: '0'} : {right: '-256px'}} className='bg-background transition-all fixed -right-64 top-0 bottom-0 min-h-screen w-64 z-10 md:static md:w-80 rounded-l-2xl divide-y divide-border p-5 shrink-0'>
            <div className='flex items-center justify-between pb-4 md:pb-0'>
                <div className='flex flex-col items-center md:gap-2 md:pb-4 md:w-full'>
                    <h1 className='font-YekanBakh-Black text-primary text-2xl text-center'>
                        پنل کاربری
                    </h1>
                    <span className='text-title md:inline hidden'>
                        محتوای خود را مدیریت کنید
                    </span>
                </div>
                <RoundButton className='md:hidden' clickEvent={() => {props.setOpen(false)}} icon='#x-mark'></RoundButton>
            </div>

            <div className='pt-8'>
                <ul className='flex flex-col gap-3'>
                    <li className='relative'>
                        <button
                            style={userMenuShow ? {backgroundColor: 'rgb(var(--color-primary))', color: 'white'} : {}}
                            onClick={() => setUserMenuShow(prevState => !prevState)}
                            className='bg-secondary h-10 md:h-12 w-full rounded-xl font-YekanBakh-Bold text-title px-4 text-sm flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#users'></use>
                                    </svg>
                                </span>
                                <span>کاربران</span>
                            </div>
                            <span>
                                <svg style={userMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                        </button>
                        <div style={userMenuShow ? {display: 'block'} : {display: 'none'}}
                             className='mt-2 bg-background space-y-2 pl-2 rounded-xl'>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='users'
                                  className='flex items-center justify-between gap-2 bg-secondary xl:hover:bg-border transition-colors rounded-xl px-4 h-10 md:h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                                <span>
                                    کاربران
                                </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                            </Link>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='user-form'
                                  className='flex items-center justify-between gap-2 bg-secondary xl:hover:bg-border transition-colors rounded-xl px-4 h-10 md:h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                                <span>
                                    افزودن کاربر
                                </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                            </Link>
                        </div>
                    </li>
                    <li className='relative'>
                        <button style={coursesMenuShow ? {
                            backgroundColor: 'rgb(var(--color-primary))',
                            color: 'white'
                        } : {}} onClick={() => setCoursesMenuShow(prevState => !prevState)}
                                className='bg-secondary h-10 md:h-12 w-full rounded-xl font-YekanBakh-Bold text-title px-4 text-sm flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#courses'></use>
                                    </svg>
                                </span>
                                <span>دوره ها</span>
                            </div>
                            <span>
                                <svg style={coursesMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                        </button>
                        <div style={coursesMenuShow ? {display: 'block'} : {display: 'none'}}
                             className='mt-2 bg-background space-y-2 pl-2 rounded-xl'>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='courses'
                                  className='flex items-center justify-between gap-2 bg-secondary xl:hover:bg-border transition-colors rounded-xl px-4 h-10 md:h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                                    <span>
                                    دوره ها
                                </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                            </Link>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='course-form'
                                  className='text-red-500 flex items-center justify-between gap-2 bg-secondary xl:hover:bg-border transition-colors rounded-xl px-4  h-10 md:h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                                <span>
                                    افزودن دوره
                                </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                            </Link>
                        </div>
                    </li>
                    <li className='relative'>
                        <button style={categoriesMenuShow ? {
                            backgroundColor: 'rgb(var(--color-primary))',
                            color: 'white'
                        } : {}} onClick={() => setCategoriesMenuShow(prevState => !prevState)}
                                className='bg-secondary h-10 md:h-12 w-full rounded-xl font-YekanBakh-Bold text-title px-4 text-sm flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#courses'></use>
                                    </svg>
                                </span>
                                <span>دسته بندی ها</span>
                            </div>
                            <span>
                                <svg style={categoriesMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                        </button>
                        <div style={categoriesMenuShow ? {display: 'block'} : {display: 'none'}}
                             className='mt-2 bg-background space-y-2 pl-2 rounded-xl'>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='categories'
                                  className='flex items-center justify-between gap-2 bg-secondary xl:hover:bg-border transition-colors rounded-xl px-4 h-10 md:h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                                    <span>
                                    دسته بندی ها
                                </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                            </Link>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='category-form'
                                  className='text-red-500 flex items-center justify-between gap-2 bg-secondary xl:hover:bg-border transition-colors rounded-xl px-4  h-10 md:h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                                <span>
                                    افزودن دسته بندی
                                </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                            </Link>
                        </div>
                    </li>
                    <li className='relative'>
                        <button style={sessionsMenuShow ? {
                            backgroundColor: 'rgb(var(--color-primary))',
                            color: 'white'
                        } : {}} onClick={() => setSessionsMenuShow(prevState => !prevState)}
                                className='bg-secondary h-10 md:h-12 w-full rounded-xl font-YekanBakh-Bold text-title px-4 text-sm flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#courses'></use>
                                    </svg>
                                </span>
                                <span>جلسات دوره ها</span>
                            </div>
                            <span>
                                <svg style={sessionsMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                        </button>
                        <div style={sessionsMenuShow ? {display: 'block'} : {display: 'none'}}
                             className='mt-2 bg-background space-y-2 pl-2 rounded-xl'>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='sessions'
                                  className='flex items-center justify-between gap-2 bg-secondary xl:hover:bg-border transition-colors rounded-xl px-4 h-10 md:h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                                    <span>
                                    تمام جلسات
                                </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                            </Link>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='session-form'
                                  className='text-red-500 flex items-center justify-between gap-2 bg-secondary xl:hover:bg-border transition-colors rounded-xl px-4  h-10 md:h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                                <span>
                                    افزودن جلسه
                                </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                            </Link>
                        </div>
                    </li>
                    <li className='relative'>
                        <button style={menusMenuShow ? {
                            backgroundColor: 'rgb(var(--color-primary))',
                            color: 'white'
                        } : {}} onClick={() => setMenusMenuShow(prevState => !prevState)}
                                className='bg-secondary h-10 md:h-12 w-full rounded-xl font-YekanBakh-Bold text-title px-4 text-sm flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#courses'></use>
                                    </svg>
                                </span>
                                <span>منو ها</span>
                            </div>
                            <span>
                                <svg style={menusMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                        </button>
                        <div style={menusMenuShow ? {display: 'block'} : {display: 'none'}}
                             className='mt-2 bg-background space-y-2 pl-2 rounded-xl'>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='menus'
                                  className='flex items-center justify-between gap-2 bg-secondary xl:hover:bg-border transition-colors rounded-xl px-4 h-10 md:h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                                    <span>
                                    تمام منو ها
                                </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                            </Link>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='menu-form'
                                  className='text-red-500 flex items-center justify-between gap-2 bg-secondary xl:hover:bg-border transition-colors rounded-xl px-4  h-10 md:h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                                <span>
                                    افزودن منو
                                </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
import {Link} from "react-router-dom";
import {useState} from "react";
import RoundButton from "../../Buttons/RoundButton";

export default function SideBar(props) {

    const [userMenuShow, setUserMenuShow] = useState(false)
    const [coursesMenuShow, setCoursesMenuShow] = useState(false)
    const [categoriesMenuShow, setCategoriesMenuShow] = useState(false)
    const [sessionsMenuShow, setSessionsMenuShow] = useState(false)
    const [menusMenuShow, setMenusMenuShow] = useState(false)
    const [submenusMenuShow, setSubmenusMenuShow] = useState(false)
    const [menuLinksMenuShow, setMenuLinksMenuShow] = useState(false)
    const [articlesMenuShow, setArticlesMenuShow] = useState(false)

    return (
        <div style={props.open ? {right: '0'} : {right: '-256px'}} className='bg-background transition-all fixed -right-64 top-0 bottom-0 min-h-screen z-30 xl:static w-64 rounded-l-2xl divide-y divide-border shrink-0 px-2'>

            <div className='flex items-center justify-between pb-4 md:pb-0 pt-4'>
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
                <ul className='flex flex-col gap-2'>
                    <li className='relative'>
                        <button
                            style={userMenuShow ? {backgroundColor: 'rgb(var(--color-primary))', color: 'white'} : {}}
                            onClick={() => setUserMenuShow(prevState => !prevState)}
                            className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>
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
                        <div style={userMenuShow ? {height: '84px', marginTop: '4px'} : {height: '0'}}
                             className='bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all'>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='users'
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
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
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
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
                                className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>
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
                        <div style={coursesMenuShow ? {height: '84px', marginTop: '4px'} : {height: '0'}}
                             className='bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all'>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='courses'
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
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
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
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
                                className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#categories'></use>
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
                        <div style={categoriesMenuShow ? {height: '84px', marginTop: '4px'} : {height: '0'}}
                             className='bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all'>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='categories'
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
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
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
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
                                className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#sessions'></use>
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
                        <div style={sessionsMenuShow ? {height: '84px', marginTop: '4px'} : {height: '0'}}
                             className='bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all'>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='sessions'
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
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
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
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
                                className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#menu'></use>
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
                        <div style={menusMenuShow ? {height: '84px', marginTop: '4px'} : {height: '0'}}
                             className='bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all'>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='menus'
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
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
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
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
                    <li className='relative'>
                        <button style={submenusMenuShow ? {
                            backgroundColor: 'rgb(var(--color-primary))',
                            color: 'white'
                        } : {}} onClick={() => setSubmenusMenuShow(prevState => !prevState)}
                                className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#submenu'></use>
                                    </svg>
                                </span>
                                <span>زیرمنو ها</span>
                            </div>
                            <span>
                                <svg style={submenusMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                        </button>
                        <div style={submenusMenuShow ? {height: '84px', marginTop: '4px'} : {height: '0'}}
                             className='bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all'>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='submenus'
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
                                    <span>
                                    تمام زیرمنو ها
                                </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                            </Link>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='submenu-form'
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
                                <span>
                                    افزودن زیرمنو
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
                        <button style={menuLinksMenuShow ? {
                            backgroundColor: 'rgb(var(--color-primary))',
                            color: 'white'
                        } : {}} onClick={() => setMenuLinksMenuShow(prevState => !prevState)}
                                className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#links'></use>
                                    </svg>
                                </span>
                                <span>لینک ها</span>
                            </div>
                            <span>
                                <svg style={menuLinksMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                        </button>
                        <div style={menuLinksMenuShow ? {height: '84px', marginTop: '4px'} : {height: '0'}}
                             className='bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all'>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='menulinks'
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
                                    <span>
                                    تمام لینک ها
                                </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                            </Link>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='menulink-form'
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
                                <span>
                                    افزودن لینک
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
                        <button style={articlesMenuShow ? {
                            backgroundColor: 'rgb(var(--color-primary))',
                            color: 'white'
                        } : {}} onClick={() => setArticlesMenuShow(prevState => !prevState)}
                                className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#articles'></use>
                                    </svg>
                                </span>
                                <span>مقاله ها</span>
                            </div>
                            <span>
                                <svg style={articlesMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                        </button>
                        <div style={articlesMenuShow ? {height: '84px', marginTop: '4px'} : {height: '0'}}
                             className='bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all'>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='articles'
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
                                    <span>
                                    تمام مقاله ها
                                </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                            </Link>
                            <Link onClick={() => {
                                props.setOpen(false)
                            }} to='article-form'
                                  className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-8 md:h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
                                <span>
                                    افزودن مقاله
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
import {Link} from "react-router-dom";
import {useState} from "react";
import RoundButton from "../../Buttons/RoundButton";
import {sidebarItems as items} from "../../../data";
import Logo from "../../Logo/Logo";
export default function SideBar() {
    const [sidebarItems, setSidebarItems] = useState(items)
    const [selectedItem, setSelectedItem] = useState('')
    const [mobileSidebarShow, setMobileSidebarShow] = useState(false)

    const sidebarItemSelection = (title) => {
        if(title === selectedItem) {
            setSelectedItem('')
        }else {
            setSelectedItem(title)
        }
    }

    const sidebarSubMenuHandler = () => {
        setMobileSidebarShow(false)
        setSelectedItem('')
    }

    return (
        <>
            {/*Mobile sidebar Header*/}
            <div className='flex xl:hidden items-center justify-between p-4 bg-background'>
                <RoundButton clickEvent={() => {
                    setMobileSidebarShow(true)
                }} icon='#bars-3'></RoundButton>
                <Logo></Logo>
            </div>
            {/*Mobile sidebar cover menu*/}
            <div onClick={() => setMobileSidebarShow(prevState => !prevState)}
                 style={mobileSidebarShow ? {visibility: 'visible', opacity: '1'} : {}}
                 className='fixed inset-0 bg-title/30 invisible opacity-0 transition-all z-20'></div>
            {/*Desktop sidebar menu*/}
            <div style={mobileSidebarShow ? {right: '0'} : {right: '-256px'}}
                 className='bg-background transition-all fixed -right-64 top-0 bottom-0 min-h-screen z-30 xl:static w-64 rounded-l-2xl divide-y divide-border shrink-0 px-2'>

                <div className='flex items-center justify-between pb-4 md:pb-0 pt-4'>
                    <div className='flex flex-col items-center md:gap-2 md:pb-4 md:w-full'>
                        <h1 className='font-YekanBakh-Black text-primary text-2xl text-center'>
                            پنل کاربری
                        </h1>
                        <span className='text-title md:inline hidden'>
                        محتوای خود را مدیریت کنید
                    </span>
                    </div>
                    <RoundButton className='md:hidden' icon='#x-mark'></RoundButton>
                </div>

                <div className='pt-8'>
                    <ul className='flex flex-col gap-2'>
                        {
                            sidebarItems.map(item => (
                                <li key={item.id} className='relative'>
                                    <button
                                        style={item.title === selectedItem ? {
                                            backgroundColor: 'rgb(var(--color-primary))',
                                            color: 'white'
                                        } : {}}
                                        onClick={() => sidebarItemSelection(item.title)}
                                        className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>
                                        <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#users'></use>
                                    </svg>
                                </span>
                                            <span>{item.title}</span>
                                        </div>
                                        <span>
                                <svg style={item.title === selectedItem ? {rotate: '180deg'} : {}} className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                                    </button>
                                    <div
                                        className={`bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all ${item.title === selectedItem ? `h-[84px] mt-1` : `h-0`}`}>
                                        {
                                            item.links.map((link, index) => (
                                                <Link onClick={sidebarSubMenuHandler} key={index} to={link.href}
                                                      className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>
                                <span>
                                    {link.title}
                                </span>
                                                    <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </li>
                            ))
                        }
                        {/*<li className='relative'>*/}
                        {/*    <button style={coursesMenuShow ? {*/}
                        {/*        backgroundColor: 'rgb(var(--color-primary))',*/}
                        {/*        color: 'white'*/}
                        {/*    } : {}} onClick={() => setCoursesMenuShow(prevState => !prevState)}*/}
                        {/*            className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>*/}
                        {/*        <div className='flex items-center gap-2'>*/}
                        {/*            <span>*/}
                        {/*                <svg className='w-5 h-5'>*/}
                        {/*                    <use href='#courses'></use>*/}
                        {/*                </svg>*/}
                        {/*            </span>*/}
                        {/*            <span>دوره ها</span>*/}
                        {/*        </div>*/}
                        {/*        <span>*/}
                        {/*            <svg style={coursesMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>*/}
                        {/*                <use href='#chevron-down'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*    </button>*/}
                        {/*    <div className={`bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all ${coursesMenuShow ? `h-[84px] mt-1` : `h-0`}`}>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='courses'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*                <span>*/}
                        {/*                دوره ها*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='course-form'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*            <span>*/}
                        {/*                افزودن دوره*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        {/*<li className='relative'>*/}
                        {/*    <button style={categoriesMenuShow ? {*/}
                        {/*        backgroundColor: 'rgb(var(--color-primary))',*/}
                        {/*        color: 'white'*/}
                        {/*    } : {}} onClick={() => setCategoriesMenuShow(prevState => !prevState)}*/}
                        {/*            className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>*/}
                        {/*        <div className='flex items-center gap-2'>*/}
                        {/*            <span>*/}
                        {/*                <svg className='w-5 h-5'>*/}
                        {/*                    <use href='#categories'></use>*/}
                        {/*                </svg>*/}
                        {/*            </span>*/}
                        {/*            <span>دسته بندی ها</span>*/}
                        {/*        </div>*/}
                        {/*        <span>*/}
                        {/*            <svg style={categoriesMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>*/}
                        {/*                <use href='#chevron-down'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*    </button>*/}
                        {/*    <div className={`bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all ${categoriesMenuShow ? `h-[84px] mt-1` : `h-0`}`}>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='categories'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*                <span>*/}
                        {/*                دسته بندی ها*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='category-form'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*            <span>*/}
                        {/*                افزودن دسته بندی*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        {/*<li className='relative'>*/}
                        {/*    <button style={sessionsMenuShow ? {*/}
                        {/*        backgroundColor: 'rgb(var(--color-primary))',*/}
                        {/*        color: 'white'*/}
                        {/*    } : {}} onClick={() => setSessionsMenuShow(prevState => !prevState)}*/}
                        {/*            className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>*/}
                        {/*        <div className='flex items-center gap-2'>*/}
                        {/*            <span>*/}
                        {/*                <svg className='w-5 h-5'>*/}
                        {/*                    <use href='#sessions'></use>*/}
                        {/*                </svg>*/}
                        {/*            </span>*/}
                        {/*            <span>جلسات دوره ها</span>*/}
                        {/*        </div>*/}
                        {/*        <span>*/}
                        {/*            <svg style={sessionsMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>*/}
                        {/*                <use href='#chevron-down'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*    </button>*/}
                        {/*    <div className={`bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all ${sessionsMenuShow ? `h-[84px] mt-1` : `h-0`}`}>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='sessions'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*                <span>*/}
                        {/*                تمام جلسات*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='session-form'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*            <span>*/}
                        {/*                افزودن جلسه*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        {/*<li className='relative'>*/}
                        {/*    <button style={menusMenuShow ? {*/}
                        {/*        backgroundColor: 'rgb(var(--color-primary))',*/}
                        {/*        color: 'white'*/}
                        {/*    } : {}} onClick={() => setMenusMenuShow(prevState => !prevState)}*/}
                        {/*            className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>*/}
                        {/*        <div className='flex items-center gap-2'>*/}
                        {/*            <span>*/}
                        {/*                <svg className='w-5 h-5'>*/}
                        {/*                    <use href='#menu'></use>*/}
                        {/*                </svg>*/}
                        {/*            </span>*/}
                        {/*            <span>منو ها</span>*/}
                        {/*        </div>*/}
                        {/*        <span>*/}
                        {/*            <svg style={menusMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>*/}
                        {/*                <use href='#chevron-down'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*    </button>*/}
                        {/*    <div className={`bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all ${menusMenuShow ? `h-[84px] mt-1` : `h-0`}`}>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='menus'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*                <span>*/}
                        {/*                تمام منو ها*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='menu-form'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*            <span>*/}
                        {/*                افزودن منو*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        {/*<li className='relative'>*/}
                        {/*    <button style={submenusMenuShow ? {*/}
                        {/*        backgroundColor: 'rgb(var(--color-primary))',*/}
                        {/*        color: 'white'*/}
                        {/*    } : {}} onClick={() => setSubmenusMenuShow(prevState => !prevState)}*/}
                        {/*            className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>*/}
                        {/*        <div className='flex items-center gap-2'>*/}
                        {/*            <span>*/}
                        {/*                <svg className='w-5 h-5'>*/}
                        {/*                    <use href='#submenu'></use>*/}
                        {/*                </svg>*/}
                        {/*            </span>*/}
                        {/*            <span>زیرمنو ها</span>*/}
                        {/*        </div>*/}
                        {/*        <span>*/}
                        {/*            <svg style={submenusMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>*/}
                        {/*                <use href='#chevron-down'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*    </button>*/}
                        {/*    <div className={`bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all ${submenusMenuShow ? `h-[84px] mt-1` : `h-0`}`}>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='submenus'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*                <span>*/}
                        {/*                تمام زیرمنو ها*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='submenu-form'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*            <span>*/}
                        {/*                افزودن زیرمنو*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        {/*<li className='relative'>*/}
                        {/*    <button style={menuLinksMenuShow ? {*/}
                        {/*        backgroundColor: 'rgb(var(--color-primary))',*/}
                        {/*        color: 'white'*/}
                        {/*    } : {}} onClick={() => setMenuLinksMenuShow(prevState => !prevState)}*/}
                        {/*            className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>*/}
                        {/*        <div className='flex items-center gap-2'>*/}
                        {/*            <span>*/}
                        {/*                <svg className='w-5 h-5'>*/}
                        {/*                    <use href='#links'></use>*/}
                        {/*                </svg>*/}
                        {/*            </span>*/}
                        {/*            <span>لینک ها</span>*/}
                        {/*        </div>*/}
                        {/*        <span>*/}
                        {/*            <svg style={menuLinksMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>*/}
                        {/*                <use href='#chevron-down'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*    </button>*/}
                        {/*    <div className={`bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all ${menuLinksMenuShow ? `h-[84px] mt-1` : `h-0`}`}>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='menulinks'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*                <span>*/}
                        {/*                تمام لینک ها*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='menulink-form'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*            <span>*/}
                        {/*                افزودن لینک*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        {/*<li className='relative'>*/}
                        {/*    <button style={articlesMenuShow ? {*/}
                        {/*        backgroundColor: 'rgb(var(--color-primary))',*/}
                        {/*        color: 'white'*/}
                        {/*    } : {}} onClick={() => setArticlesMenuShow(prevState => !prevState)}*/}
                        {/*            className='bg-background h-10 md:h-12 w-full rounded font-YekanBakh-Bold text-title px-2 text-sm flex items-center justify-between'>*/}
                        {/*        <div className='flex items-center gap-2'>*/}
                        {/*            <span>*/}
                        {/*                <svg className='w-5 h-5'>*/}
                        {/*                    <use href='#articles'></use>*/}
                        {/*                </svg>*/}
                        {/*            </span>*/}
                        {/*            <span>مقاله ها</span>*/}
                        {/*        </div>*/}
                        {/*        <span>*/}
                        {/*            <svg style={articlesMenuShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>*/}
                        {/*                <use href='#chevron-down'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*    </button>*/}
                        {/*    <div className={`bg-secondary space-y-1 rounded overflow-hidden h-0 transition-all ${articlesMenuShow ? `h-[84px] mt-1` : `h-0`}`}>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='articles'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*                <span>*/}
                        {/*                تمام مقاله ها*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*        <Link onClick={() => {*/}
                        {/*            props.setOpen(false)*/}
                        {/*        }} to='article-form'*/}
                        {/*              className='flex items-center justify-between gap-2 xl:hover:bg-border transition-colors rounded px-2 h-10 cursor-pointer font-YekanBakh-Bold text-title text-xs'>*/}
                        {/*            <span>*/}
                        {/*                افزودن مقاله*/}
                        {/*            </span>*/}
                        {/*            <span>*/}
                        {/*            <svg className='w-5 h-5'>*/}
                        {/*                <use href='#arrow-long-left'></use>*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*        </Link>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </>
    )
}
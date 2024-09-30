import {Link} from "react-router-dom";
import {useState} from "react";

export default function SideBar() {

    const [menuItemsShow, setMenuItemsShow] = useState(false)

    return (
        <div className='md:block hidden bg-background w-80 rounded-l-2xl divide-y divide-border p-5 shrink-0'>
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
                    <li className='relative'>
                        <button onClick={() => setMenuItemsShow(prevState => !prevState)} className='bg-secondary h-12 w-full rounded-xl font-YekanBakh-Bold text-title px-4 text-sm flex items-center justify-between'>
                             <span>کاربران</span>
                            <span>
                                <svg style={menuItemsShow ? {rotate: '180deg'} : {}} className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                        </button>
                        <div style={menuItemsShow ? {display: 'block'} : {display: 'none'}} className='mt-2 bg-background space-y-2 pl-2 rounded-xl'>
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
                            <Link to='user-form'
                                  className='text-red-500 flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                                <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#users'></use>
                                    </svg>
                                </span>
                                    <span>
                                    افزودن کاربر
                                </span>
                                </div>
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
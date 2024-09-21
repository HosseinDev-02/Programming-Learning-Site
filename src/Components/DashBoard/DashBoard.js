import Counter from "./Counter/Counter";
import {useState} from "react";
import UserInfo from "../UserInfo/UserInfo";
import UserCourses from "./UserCourses/UserCourses";
import Favorites from "./Favorites/Favorites";
import Transactions from "./Transactions/Transactions";
import Questions from "./Questions/Questions";

export default function DashBoard() {

    const [activeTab, setActiveTab] = useState('counter')

    const dashboardMenuHandler = (e) => {
        document.querySelector('.dashboard__item--active').classList.remove('dashboard__item--active')
        e.currentTarget.classList.add('dashboard__item--active')
        setActiveTab(e.currentTarget.dataset.key)
    }

    return (
        <main className='pt-5'>
            <div className="container">
                <div className='md:grid md:grid-cols-12 md:items-start md:gap-5'>
                    <div className='md:col-span-4 lg:col-span-3 mb-5 md:mb-0'>
                        <div className='flex items-center gap-3'>
                            <span className='block overflow-hidden w-10 h-10 rounded-full shrink-0'>
                                <img className='w-full h-full object-cover' src='images/profile.jpeg' alt=""/>
                            </span>
                            <div className='flex flex-col gap-1 text-xs font-YekanBakh-SemiBold'>
                                <span className='line-clamp-1 text-xs'>
                                    خوش آمدید
                                </span>
                                <span className='line-clamp-1 font-YekanBakh-Bold text-sm'>
                                    حسین رستمی
                                </span>
                            </div>
                        </div>
                        <ul className='flex flex-col gap-3 bg-secondary rounded-2xl p-5 mt-5'>
                            <li data-key='counter' onClick={dashboardMenuHandler} className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer dashboard__item--active'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#counter'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold line-clamp-1'>
                                    پیشخوان
                                </span>
                            </li>
                            <li data-key='courses' onClick={dashboardMenuHandler} className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#education-outline'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold line-clamp-1'>
                                    دوره ها
                                </span>
                            </li>
                            <li data-key='favorites' onClick={dashboardMenuHandler} className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#heart-outline'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold line-clamp-1'>
                                    علاقه مندی ها
                                </span>
                            </li>
                            <li data-key='wallet' onClick={dashboardMenuHandler} className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#wallet'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold line-clamp-1'>
                                    مالی و اشتراک
                                </span>
                            </li>
                            <li data-key='questions' onClick={dashboardMenuHandler} className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#comments-outline'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold line-clamp-1'>
                                    دیدگاه و پرسش های شما
                                </span>
                            </li>
                            <li data-key='notifications' onClick={dashboardMenuHandler} className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#notification'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold line-clamp-1'>
                                    اعلانات
                                </span>
                            </li>
                            <li data-key='edit' onClick={dashboardMenuHandler} className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#edit-profile'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold line-clamp-1'>
                                    ویرایش پروفایل
                                </span>
                            </li>
                            <li data-key='logout' onClick={dashboardMenuHandler} className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#logout'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold line-clamp-1'>
                                    خروج از حساب
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className='md:col-span-8 lg:col-span-9'>
                        {
                            activeTab === 'counter' ? (
                                <Counter></Counter>
                            ) : activeTab === 'courses' ? (
                                <UserCourses></UserCourses>
                            ) : activeTab === 'favorites' ? (
                                <Favorites></Favorites>
                            ) : activeTab === 'wallet' ? (
                                <Transactions></Transactions>
                            ) : activeTab === 'questions' ? (
                                <Questions></Questions>
                            ) : activeTab === 'notification' ? (
                                <UserCourses></UserCourses>
                            ) : activeTab === 'edit' ? (
                                <UserCourses></UserCourses>
                            ) : (
                                <UserCourses></UserCourses>
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
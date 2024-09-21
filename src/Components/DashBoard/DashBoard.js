import Counter from "./Counter";
import {useState} from "react";
import UserInfo from "../UserInfo/UserInfo";

export default function DashBoard() {

    const [activeTab, setActiveTab] = useState('counter')

    return (
        <main className='pt-5'>
            <div className="container">
                <div className='grid grid-cols-12 items-start gap-5'>
                    <div className='col-span-3'>
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
                        <div className='bg-secondary rounded-2xl p-5 space-y-3 mt-5'>
                            <button
                                className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 dashboard__item--active'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#counter'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold'>
                                    پیشخوان
                                </span>
                            </button>
                            <button className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#education-outline'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold'>
                                    دوره ها
                                </span>
                            </button>
                            <button className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#heart-outline'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold'>
                                    علاقه مندی ها
                                </span>
                            </button>
                            <button className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#wallet'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold'>
                                    مالی و اشتراک
                                </span>
                            </button>
                            <button className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#comments-outline'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold'>
                                    دیدگاه و پرسش های شما
                                </span>
                            </button>
                            <button className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#notification'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold'>
                                    اعلانات
                                </span>
                            </button>
                            <button className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#edit-profile'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold'>
                                    ویرایش پروفایل
                                </span>
                            </button>
                            <button className='flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#logout'></use>
                                    </svg>
                                </span>
                                <span className='text-xs font-YekanBakh-SemiBold'>
                                    خروج از حساب
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='col-span-9'>
                        {
                            activeTab === 'counter' ? (
                                <Counter></Counter>
                            ) : (
                                <h1>
                                    State not set to counter
                                </h1>
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
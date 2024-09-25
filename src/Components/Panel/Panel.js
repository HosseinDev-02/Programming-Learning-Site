import SectionTitle from "../Titles/SectionTitle";

export default function Panel() {

    return (
        <div className='flex gap-5 bg-secondary min-h-screen'>
            {/*  Admin Panel Right Side  */}
            <svg className='hidden'>
                <symbol id='arrow-long-left' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"/>
                </symbol>
                <symbol id='menu' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                </symbol>
                <symbol id='submenu' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"/>
                </symbol>
                <symbol id='articles' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"/>
                </symbol>
                <symbol id='users' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                </symbol>
                <symbol id='services' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"/>
                </symbol>
                <symbol id='basket' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                </symbol>
                <symbol id='categories' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"/>
                </symbol>
                <symbol id='comments' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                </symbol>
                <symbol id='courses' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"/>
                </symbol>
                <symbol id='teacher' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
                </symbol>


            </svg>
            <div className='bg-background w-80 rounded-l-2xl p-5 divide-y divide-border'>
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
                        <li className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#menu'></use>
                                    </svg>
                                </span>
                                <span>
                                    منو
                                </span>
                            </div>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                        </li>
                        <li className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#submenu'></use>
                                    </svg>
                                </span>
                                زیر منو
                            </div>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                        </li>
                        <li className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#services'></use>
                                    </svg>
                                </span>
                                <span>
                                    خدمات
                                </span>
                            </div>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                        </li>
                        <li className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#courses'></use>
                                    </svg>
                                </span>
                                <span>
                                    دوره ها
                                </span>
                            </div>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                        </li>
                        <li className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#categories'></use>
                                    </svg>
                                </span>
                                <span>
                                    دسته بندی ها
                                </span>
                            </div>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                        </li>
                        <li className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#courses'></use>
                                    </svg>
                                </span>
                                <span>
                                    دوره ها
                                </span>
                            </div>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                        </li>
                        <li className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#basket'></use>
                                    </svg>
                                </span>
                                <span>
                                    سبد خرید
                                </span>
                            </div>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                        </li>
                        <li className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#articles'></use>
                                    </svg>
                                </span>
                                <span>
                                    مقاله ها
                                </span>
                            </div>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                        </li>
                        <li className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#comments'></use>
                                    </svg>
                                </span>
                                <span>
                                    پرسش ها و نظرات
                                </span>
                            </div>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                        </li>
                        <li className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#teacher'></use>
                                    </svg>
                                </span>
                                <span>
                                    مدرس
                                </span>
                            </div>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#arrow-long-left'></use>
                                </svg>
                            </span>
                        </li>
                        <li className='flex items-center justify-between gap-2 bg-secondary hover:bg-primary transition-colors hover:text-white rounded-xl px-4 h-12 cursor-pointer font-YekanBakh-Bold text-title text-sm'>
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
                        </li>
                    </ul>
                </div>
            </div>
            {/*  Admin Panel Left Side  */}
            <div>

            </div>
        </div>
    )
}
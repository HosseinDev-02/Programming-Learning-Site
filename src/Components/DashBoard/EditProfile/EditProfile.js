import SubTitle from "../../Titles/SubTitle";

export default function EditProfile () {
    return (
        <div>
            <div className='my-5'>
                <SubTitle title='ویرایش پروفایل'></SubTitle>
                <div className='overflow-x-auto'>
                    <ul className='bg-secondary rounded-full inline-flex items-center gap-5 border border-border p-1 mt-5'>
                        <li>
                            <button
                                className='flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors user-edit-menu__item--active'>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#pencil-square'></use>
                                </svg>
                            </span>
                                <span className='text-sm font-YekanBakh-Bold text-nowrap'>
                                اطلاعات حساب
                            </span>
                            </button>
                        </li>
                        <li>
                            <button
                                className='flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors'>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#document-text'></use>
                                </svg>
                            </span>
                                <span className='text-sm font-YekanBakh-Bold text-nowrap'>
                                شماره موبایل
                            </span>
                            </button>
                        </li>
                        <li>
                            <button
                                className='flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors'>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#key'></use>
                                </svg>
                            </span>
                                <span className='text-sm font-YekanBakh-Bold text-nowrap'>
                                رمز عبور
                            </span>
                            </button>
                        </li>
                        <li>
                            <button
                                className='flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors'>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#notification'></use>
                                </svg>
                            </span>
                                <span className='text-sm font-YekanBakh-Bold text-nowrap'>
                                اطلاع رسانی
                            </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='mt-8 space-y-5'>
                <SubTitle title='اطلاعات حساب'></SubTitle>
                <div className='grid grid-cols-2 grid-rows-2 gap-5'>
                    <div className='flex flex-col gap-2 items-start'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            نام و نام خانوادگی (فارسی)
                        </label>
                        <input
                            className='bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            ایمیل
                        </label>
                        <input
                            className='bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                        <span className='text-xs font-YekanBakh-SemiBold'>
                            در حال حاضر ایمیل قلبل تغییر نمی باشد
                        </span>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            آدرس پروفایل
                        </label>
                        <div className='flex items-center gap-2 w-full'>
                            <input
                                className='bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                                type="text"/>
                            <span className='text-xs font-YekanBakh-SemiBold'>
                                https://demo.spacedev.ir
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
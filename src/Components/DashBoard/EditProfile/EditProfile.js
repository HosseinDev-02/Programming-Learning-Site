import SubTitle from "../../Titles/SubTitle";
import PrimaryButton from "../../Buttons/PrimaryButton";
import {useState} from "react";

export default function EditProfile () {

    const [yearMenuShow, setYearMenuShow] = useState(false)
    const [monthMenuShow, setMonthMenuShow] = useState(false)
    const [dayMenuShow, setDayMenuShow] = useState(false)
    const [day, setDay] = useState('انتخاب روز')
    const [month, setMonth] = useState('انتخاب ماه')
    const [year, setYear] = useState('انتخاب سال')


    const yearSelectionHandler = (e) => {
        setYear(e.target.innerHTML)
        setYearMenuShow(prevState => !prevState)
    }
    const monthSelectionHandler = (e) => {
        setMonth(e.target.innerHTML)
        setMonthMenuShow(prevState => !prevState)
    }
    const daySelectionHandler = (e) => {
        setDay(e.target.innerHTML)
        setDayMenuShow(prevState => !prevState)
    }

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
                <div className='sm:grid sm:grid-cols-12 sm:grid-rows-2 sm:gap-5 space-y-5 sm:space-y-0'>
                    <div className='sm:col-span-6 flex flex-col gap-2 items-start'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            نام و نام خانوادگی (فارسی)
                        </label>
                        <input
                            className='bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='sm:col-span-6 flex flex-col gap-2 items-start'>
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
                    <div className='sm:col-span-full lg:col-span-6 flex flex-col gap-2 items-start'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            آدرس پروفایل
                        </label>
                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full'>
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
            <div className='mt-8'>
                <SubTitle title='اطلاعات فردی'></SubTitle>
                <div className='mt-8 flex flex-col items-start gap-2'>
                    <span className='text-xs font-YekanBakh-Bold'>تاریخ تولد</span>
                    <div className='sm:grid sm:grid-cols-3 sm:gap-5 space-y-5 sm:space-y-0 w-full'>
                        <div>
                            <button onClick={() => setYearMenuShow(prevState => !prevState)}
                                className='flex items-center justify-between px-3 rounded-xl bg-secondary h-11 w-full border border-border text-title'>
                            <span className='text-xs font-YekanBakh-Bold'>
                                {
                                    year
                                }
                            </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                            </button>
                            <div className='relative'>
                                <ul onClick={yearSelectionHandler} style={yearMenuShow ? {display: 'flex'} : {}} className='text-center absolute top-2 left-0 right-0 w-full rounded-xl border border-border user-edit-date-menu z-10 bg-background hidden flex-col child:py-2 child:rounded-xl child:px-4 child-hover:bg-secondary child:cursor-pointer text-xs font-YekanBakh-SemiBold text-title h-48 overflow-y-auto'>
                                    <li>1399</li>
                                    <li>1398</li>
                                    <li>1397</li>
                                    <li>1396</li>
                                    <li>1395</li>
                                    <li>1394</li>
                                    <li>1393</li>
                                    <li>1392</li>
                                    <li>1391</li>
                                    <li>1390</li>
                                    <li>1389</li>
                                    <li>1388</li>
                                    <li>1387</li>
                                    <li>1386</li>
                                    <li>1385</li>
                                    <li>1384</li>
                                    <li>1383</li>
                                    <li>1382</li>
                                    <li>1381</li>
                                    <li>1380</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => setMonthMenuShow(prevState => !prevState)}
                                className='flex items-center justify-between px-3 rounded-xl bg-secondary h-11 w-full border border-border text-title'>
                            <span className='text-xs font-YekanBakh-Bold'>
                                {
                                    month
                                }
                            </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                            </button>
                            <div className='relative'>
                                <ul onClick={monthSelectionHandler} style={monthMenuShow ? {display: 'flex'} : {}} className='text-center absolute top-2 left-0 right-0 w-full rounded-xl border border-border user-edit-date-menu z-10 bg-background hidden flex-col child:py-2 child:rounded-xl child:px-4 child-hover:bg-secondary child:cursor-pointer text-xs font-YekanBakh-SemiBold text-title h-48 overflow-y-auto'>
                                    <li>فروردین</li>
                                    <li>اردیبهشت</li>
                                    <li>خرداد</li>
                                    <li>تیر</li>
                                    <li>مرداد</li>
                                    <li>شهریور</li>
                                    <li>مهر</li>
                                    <li>آبان</li>
                                    <li>آذر</li>
                                    <li>دی</li>
                                    <li>بهمن</li>
                                    <li>اسفند</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => setDayMenuShow(prevState => !prevState)}
                                className='flex items-center justify-between px-3 rounded-xl bg-secondary h-11 w-full border border-border text-title'>
                            <span className='text-xs font-YekanBakh-Bold'>
                                {
                                    day
                                }
                            </span>
                                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
                            </button>
                            <div className='relative'>
                                <ul onClick={daySelectionHandler} style={dayMenuShow ? {display: 'flex'} : {}} className='text-center absolute top-2 left-0 right-0 w-full rounded-xl border border-border user-edit-date-menu z-10 bg-background hidden flex-col child:py-2 child:rounded-xl child:px-4 child-hover:bg-secondary child:cursor-pointer text-xs font-YekanBakh-SemiBold text-title h-48 overflow-y-auto'>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>6</li>
                                    <li>7</li>
                                    <li>8</li>
                                    <li>9</li>
                                    <li>10</li>
                                    <li>11</li>
                                    <li>12</li>
                                    <li>13</li>
                                    <li>14</li>
                                    <li>15</li>
                                    <li>16</li>
                                    <li>17</li>
                                    <li>18</li>
                                    <li>19</li>
                                    <li>20</li>
                                    <li>21</li>
                                    <li>22</li>
                                    <li>23</li>
                                    <li>24</li>
                                    <li>25</li>
                                    <li>26</li>
                                    <li>27</li>
                                    <li>28</li>
                                    <li>29</li>
                                    <li>30</li>
                                    <li>31</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full mt-5'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            درباره من
                        </label>
                        <textarea
                            className='bg-secondary rounded-xl border border-border text-title outline-none overflow-hidden p-3 w-full'
                            rows="5"></textarea>
                    </div>
                </div>
            </div>
            <div className='mt-8 mb-5'>
                <SubTitle title='راه های ارتباطی'></SubTitle>
                <div className='sm:grid sm:grid-cols-2 sm:gap-5 space-y-5 sm:space-y-0 mt-5'>
                    <div className='flex flex-col gap-2 items-start'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            وب سایت
                        </label>
                        <input dir='ltr'
                               className='bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            گیت هاب
                        </label>
                        <input dir='ltr'
                            className='bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            لینکدین
                        </label>
                        <input dir='ltr'
                            className='bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            تلگرام
                        </label>
                        <input dir='ltr'
                            className='bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                </div>
            </div>
            <PrimaryButton style={{width: 'auto', padding: '0 16px', marginRight: 'auto'}} icon='#arrow-path' title='بروزرسانی'></PrimaryButton>
        </div>
    )
}
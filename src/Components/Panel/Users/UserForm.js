import {useState} from "react";
import {days as allDays, months as allMonth, years as allYears} from "../../../data";
import DatePicker from "../../Accordion/DatePicker";

export default function UserForm () {

    const [yearMenuShow, setYearMenuShow] = useState(false)
    const [monthMenuShow, setMonthMenuShow] = useState(false)
    const [dayMenuShow, setDayMenuShow] = useState(false)
    const [day, setDay] = useState('انتخاب روز')
    const [days] = useState(allDays)
    const [month, setMonth] = useState('انتخاب ماه')
    const [months] = useState(allMonth)
    const [year, setYear] = useState('انتخاب سال')
    const [years] = useState(allYears)


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
            <div className='flex flex-col gap-5'>
                <span className='text-xs font-YekanBakh-Bold'>اطلاعات فردی</span>
                <div className='flex items-start justify-between gap-5 mb-5'>
                    <div className='flex flex-col gap-2 items-start w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            نام
                        </label>
                        <input
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            نام خانوادگی
                        </label>
                        <input
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            شماره تماس
                        </label>
                        <input
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 items-start'>
                <span className='text-xs font-YekanBakh-Bold'>تاریخ تولد</span>
                <div className='flex gap-5 justify-between w-full'>
                    <DatePicker className={'w-1/3 flex flex-col gap-2 items-start'}
                                buttonStyle={'!bg-background'}
                                modalBg={'rgb(var(--color-background))'}
                                dateModalShow={yearMenuShow}
                                dateModalHandler={() => setYearMenuShow(prevState => !prevState)} items={years}
                                dateState={year} setDateState={() => yearSelectionHandler}></DatePicker>
                    <DatePicker className={'w-1/3 flex flex-col gap-2 items-start'}
                                buttonStyle={'!bg-background'}
                                modalBg={'rgb(var(--color-background))'}
                                dateModalShow={monthMenuShow}
                                dateModalHandler={() => setMonthMenuShow(prevState => !prevState)} items={months}
                                dateState={month} setDateState={() => monthSelectionHandler}></DatePicker>
                    <DatePicker className={'w-1/3 flex flex-col gap-2 items-start'}
                                buttonStyle={'!bg-background'}
                                modalBg={'rgb(var(--color-background))'}
                                dateModalShow={dayMenuShow}
                                dateModalHandler={() => setDayMenuShow(prevState => !prevState)}
                                items={days} dateState={day} setDateState={() => daySelectionHandler}></DatePicker>
                </div>
            </div>
        </div>
    )
}
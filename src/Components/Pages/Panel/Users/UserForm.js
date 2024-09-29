import {useEffect, useState} from "react";
import {days as allDays, months as allMonth, years as allYears} from "../../../../data";
import DatePicker from "../../../Accordion/DatePicker";
import PrimaryButton from "../../../Buttons/PrimaryButton";
import getUsers, {MySwal} from "../../../../utils";
import supabase from "../../../../database";

export default function UserForm () {

    useEffect(() => {
        getAllUsers()
    }, []);

    const [yearMenuShow, setYearMenuShow] = useState(false)
    const [monthMenuShow, setMonthMenuShow] = useState(false)
    const [dayMenuShow, setDayMenuShow] = useState(false)
    const [day, setDay] = useState('')
    const [days] = useState(allDays)
    const [month, setMonth] = useState('')
    const [monthIndex, setMonthIndex] = useState('')
    const [months] = useState(allMonth)
    const [year, setYear] = useState('')
    const [years] = useState(allYears)
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userPhoneNumber, setUserPhoneNumber] = useState('')
    const [userBirthDay, setUserBirthday] = useState('')
    const [users, setUsers] = useState([])

    const yearSelectionHandler = (e) => {
        setYear(e.target.innerHTML)
        setYearMenuShow(prevState => !prevState)
    }
    const monthSelectionHandler = (e) => {
        setMonthIndex(e.target.dataset.id)
        setMonth(e.target.innerHTML)
        setMonthMenuShow(prevState => !prevState)
    }
    const daySelectionHandler = (e) => {
        setDay(e.target.innerHTML)
        setDayMenuShow(prevState => !prevState)
    }

    async function getAllUsers () {
        const data = await getUsers()
        setUsers(data)
    }

    function clearStates () {
        setUserFirstName('')
        setUserLastName('')
        setUserPhoneNumber('')
        setMonth('')
        setDay('')
        setYear('')
    }

    async function addNewUser () {

        let newUser = {
            id: users.length + 1,
            firstname: userFirstName,
            lastname: userLastName,
            phonenumber: userPhoneNumber,
            birthday: `${year}-${monthIndex}-${day}`
        }
        const response = await supabase.from('users').insert(newUser)
        if(response.status === 201) {
            MySwal.fire({
                title: 'کاربر با موفقیت ثبت شد',
                icon: 'success',
                confirmButtonText: 'اوکی'
            })
        }
        clearStates()
    }

    return (
        <div className='space-y-5 pb-10 border-b border-b-border'>
            <div className='flex flex-col gap-5'>
                <span className='text-xs font-YekanBakh-Bold'>اطلاعات فردی</span>
                <div className='flex items-start justify-between gap-5'>
                    <div className='flex flex-col gap-2 items-start w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            نام
                        </label>
                        <input value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)}
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            نام خانوادگی
                        </label>
                        <input value={userLastName} onChange={(e) => setUserLastName(e.target.value)}
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            شماره تماس
                        </label>
                        <input value={userPhoneNumber} onChange={(e) => setUserPhoneNumber(e.target.value)}
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2 text-title'>
                <span className='text-sm font-YekanBakh-Bold'>تاریخ تولد :</span>
                <div className='flex items-center gap-1'>
                    <span className='text-sm font-YekanBakh-SemiBold'>{day}</span>
                    <span className='text-sm font-YekanBakh-SemiBold'>{month}</span>
                    <span className='text-sm font-YekanBakh-SemiBold'>{year}</span>
                </div>
            </div>
            <div className='flex flex-col gap-5 items-start'>
                <div className='flex gap-5 justify-between w-full'>
                    <div className='flex gap-2 flex-col w-1/3'>
                        <span className='text-xs font-YekanBakh-Bold'>سال تولد</span>
                        <DatePicker className={'flex flex-col gap-2 items-start'}
                                    buttonStyle={'!bg-background'}
                                    modalBg={'rgb(var(--color-background))'}
                                    dateModalShow={yearMenuShow}
                                    dateModalHandler={() => setYearMenuShow(prevState => !prevState)} items={years}
                                    dateState={year} setDateState={() => yearSelectionHandler}></DatePicker>
                    </div>
                    <div className='flex gap-2 flex-col w-1/3'>
                        <span className='text-xs font-YekanBakh-Bold'>ماه تولد</span>
                        <DatePicker className={'flex flex-col gap-2 items-start'}
                                    buttonStyle={'!bg-background'}
                                    modalBg={'rgb(var(--color-background))'}
                                    dateModalShow={monthMenuShow}
                                    dateModalHandler={() => setMonthMenuShow(prevState => !prevState)} items={months}
                                    dateState={month} setDateState={() => monthSelectionHandler}></DatePicker>
                    </div>
                    <div className='flex gap-2 flex-col w-1/3'>
                        <span className='text-xs font-YekanBakh-Bold'>روز تولد</span>
                        <DatePicker className={'flex flex-col gap-2 items-start'}
                                    buttonStyle={'!bg-background'}
                                    modalBg={'rgb(var(--color-background))'}
                                    dateModalShow={dayMenuShow}
                                    dateModalHandler={() => setDayMenuShow(prevState => !prevState)}
                                    items={days} dateState={day} setDateState={() => daySelectionHandler}></DatePicker>
                    </div>
                </div>
            </div>
            <div className='inline-flex items-center gap-3'>
                <PrimaryButton clickEvent={() => addNewUser()} icon='#check' title='ثبت کاربر'></PrimaryButton>
                <PrimaryButton clickEvent={() => {window.history.back()}} icon='#x-mark' className='bg-red-500' title='لغو'></PrimaryButton>
            </div>
        </div>
    )
}
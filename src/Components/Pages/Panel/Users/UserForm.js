import {useEffect, useState} from "react";
import PrimaryButton from "../../../Buttons/PrimaryButton";
import {MySwal, getUsers} from "../../../../Utils";
import supabase from "../../../../database";
import SubTitle from "../../../Titles/SubTitle";
import {useParams} from "react-router-dom";


export default function UserForm() {

    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userPhoneNumber, setUserPhoneNumber] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userImg, setUserImg] = useState('')
    const [userRole, setUserRole] = useState(false)
    const params = useParams()
    const userId = params.id


    useEffect(() => {
        if (userId) {
            getMainUser()
        }
    }, []);

    const getMainUser = async () => {
        const data = await getUsers().then(data => {
            let mainUser = data.find(user => user.user_id === userId)
            setUserFirstName(mainUser.firstname)
            setUserLastName(mainUser.lastname)
            setUserPhoneNumber(mainUser.phonenumber)
            setUserEmail(mainUser.email)
            setUserImg(mainUser.img)
            setUserRole(mainUser.role)
        })
    }

    async function editUser() {
        const data = await supabase.from('users')
            .update({
                    firstname: userFirstName,
                    lastname: userLastName,
                    phonenumber: userPhoneNumber,
                    img: userImg,
                    role: userRole,
                    email: userEmail
            }
            )
            .eq('user_id', userId)
        if (data.status === 204) {
            MySwal.fire({
                title: 'بروزرسانی انجام شد',
                icon: 'success',
                confirmButtonText: 'اوکی'
            })
                .then(res => {
                    if (res.isConfirmed) {
                        window.history.back()
                    }
                })
        }
    }

    function clearStates() {
        setUserFirstName('')
        setUserLastName('')
        setUserPhoneNumber('')
        setUserRole(false)
        setUserImg('')
        setUserEmail('')
    }

    async function addNewUser() {

        let newUser = {
            firstname: userFirstName,
            lastname: userLastName,
            phonenumber: userPhoneNumber,
            role: userRole,
            img: userImg,
            email: userEmail
        }
        const response = await supabase.from('users').insert(newUser)
        if (response.status === 201) {
            MySwal.fire({
                title: 'کاربر با موفقیت ثبت شد',
                icon: 'success',
                confirmButtonText: 'اوکی'
            })
                .then(res => {
                    if (res.isConfirmed) {
                        clearStates()
                    }
                })
        }
    }

    return (
        <div className='w-full h-full'>
            <div className='h-12 md:h-20 flex items-center'>
                {
                    userId ? (
                        <SubTitle className='text-lg md:text-2xl' title='ویرایش کاربر'></SubTitle>
                    ) : (
                        <SubTitle className='text-lg md:text-2xl' title='افزودن کاربر'></SubTitle>
                    )
                }
            </div>
            <div className='flex flex-col gap-5 pt-8 md:pt-10'>
                <div
                    className='flex flex-col sm:flex-row lg:flex-row flex-wrap items-center sm:items-start lg:items-start justify-between gap-5'>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 lg:w-1/4'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            نام
                        </label>
                        <input value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)}
                               className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 lg:w-1/4'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            نام خانوادگی
                        </label>
                        <input value={userLastName} onChange={(e) => setUserLastName(e.target.value)}
                               className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 lg:w-1/4'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            شماره تماس
                        </label>
                        <input value={userPhoneNumber} onChange={(e) => setUserPhoneNumber(e.target.value)}
                               className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 lg:w-1/4'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            ایمیل
                        </label>
                        <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)}
                               className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                    <div className='flex gap-5 items-center w-full sm:w-1/3 lg:w-1/4'>
                        <div className='flex flex-col gap-2 items-start w-full'>
                            <span className='text-xs font-YekanBakh-SemiBold'>تصویر کاربر</span>
                            <label className='relative w-full'>
                                <div className='flex items-center gap-5'>
                                    <span>
                                        <svg className='w-8 h-8'>
                                            <use href='#upload'></use>
                                        </svg>
                                    </span>
                                    <div
                                        className='flex items-center justify-center bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'>
                                        {userImg}
                                    </div>
                                </div>
                                <input onChange={(e) => {
                                    setUserImg(`/images/${e.target.files[0].name}`)
                                }} className='sr-only' type="file"/>
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center justify-between w-full sm:w-1/3 lg:w-1/4'>
                        <div
                            className="flex flex-col gap-2 items-start bg-secondary rounded-xl overflow-hidden">
                                <span className="text-xs font-YekanBakh-SemiBold">
                                    دسترسی ادمین
                                </span>
                            <label className='flex items-center justify-center'>
                                <input checked={userRole} onChange={(e) => {
                                    setUserRole(e.target.checked)
                                }} className='peer sr-only'
                                       type="checkbox"/>
                                <div
                                    className='inline-block shrink-0 cursor-pointer border-2 border-zinc-200 dark:border-[#1d4ed8] h-6 w-14 bg-white dark:bg-[#1d4ed8] relative rounded-xl before:w-[18px] before:h-[18px] before:bg-zinc-200 before:absolute before:left-0 before:transition-all peer-checked:border-primary before:translate-x-[2px] before:rounded-full before:top-0 before:bottom-0 before:my-auto peer-checked:bg-primary peer-checked:before:bg-background peer-checked:before:translate-x-[34px] transition-all'>

                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='inline-flex items-center gap-3 mt-5'>
                {
                    userId ? (
                        <>
                            <PrimaryButton clickEvent={() => editUser()} icon='#check'
                                           title='بروزرسانی'></PrimaryButton>
                            <PrimaryButton className='bg-red-500' clickEvent={() => window.history.back()}
                                           icon='#x-mark' title='بازگشت'></PrimaryButton>
                        </>
                    ) : (
                        <PrimaryButton clickEvent={() => addNewUser()} icon='#check'
                                       title='ثبت کاربر جدید'></PrimaryButton>
                    )
                }
            </div>
        </div>
    )
}
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
    const params = useParams()
    const userId = params.id


    useEffect(() => {
        if(userId) {
            getMainUser()
        }
    }, []);

    const getMainUser = async () => {
        const data = await getUsers().then(data => {
            let mainUser = data.find(user => user.user_id === userId)
            setUserFirstName(mainUser.firstname)
            setUserLastName(mainUser.lastname)
            setUserPhoneNumber(mainUser.phonenumber)
        })
    }

    async function editUser() {
        const data = await supabase.from('users')
            .update({
                    firstname: userFirstName,
                    lastname: userLastName,
                    phonenumber: userPhoneNumber
                }
            )
            .eq('user_id', userId)
        if(data.status === 204) {
            MySwal.fire({
                title: 'بروزرسانی انجام شد',
                icon: 'success',
                confirmButtonText: 'اوکی'
            })
                .then(res => {
                    if(res.isConfirmed) {
                        window.history.back()
                    }
                })
        }
    }

    function clearStates() {
        setUserFirstName('')
        setUserLastName('')
        setUserPhoneNumber('')
    }

    async function addNewUser() {

        let newUser = {
            firstname: userFirstName,
            lastname: userLastName,
            phonenumber: userPhoneNumber
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
            <div className='h-20 flex items-center'>
                {
                    userId ? (
                        <SubTitle fontSize='24px' title='ویرایش کاربر'></SubTitle>
                    ) : (
                        <SubTitle fontSize='24px' title='افزودن کاربر'></SubTitle>
                    )
                }
            </div>
            <div className='flex flex-col gap-5 pt-10'>
                <div className='flex flex-col sm:flex-row lg:flex-row items-center sm:items-start lg:items-start justify-between gap-5'>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            نام
                        </label>
                        <input value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)}
                               className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            نام خانوادگی
                        </label>
                        <input value={userLastName} onChange={(e) => setUserLastName(e.target.value)}
                               className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            شماره تماس
                        </label>
                        <input value={userPhoneNumber} onChange={(e) => setUserPhoneNumber(e.target.value)}
                               className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                </div>
            </div>
            <div className='inline-flex items-center gap-3 mt-5'>
                {
                    userId ? (
                        <>
                            <PrimaryButton clickEvent={() => editUser()} icon='#check' title='بروزرسانی'></PrimaryButton>
                            <PrimaryButton className='bg-red-500' clickEvent={() => window.history.back()} icon='#x-mark' title='بازگشت'></PrimaryButton>
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
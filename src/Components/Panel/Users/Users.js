import SubTitle from "../../Titles/SubTitle";
import PrimaryButton from "../../Buttons/PrimaryButton";
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import supabase from "../../../database";


export default function Users() {

    const [users, setUsers] = useState([])

    useEffect( () => {
        getUsers()
    }, [])

    async function getUsers() {
        const { data } = await supabase.from("users").select('*')
        setUsers(data)
    }

    return (
        <div className='w-full h-full'>
            <div className='h-20 flex items-center'>
                <SubTitle fontSize='24px' title='کاربران'></SubTitle>
            </div>
            <div>
                <Outlet></Outlet>
                <div className='space-y-2 pt-10'>
                    <PrimaryButton className={'mb-8'} href='user-form'
                                   title='افزودن کاربر جدید'></PrimaryButton>
                    <table className='w-full'>
                        <thead className='text-sm h-12 text-center font-YekanBakh-Black text-title'>
                        <tr className='border-b border-border'>
                            <th>
                                شناسه
                            </th>
                            <th>
                                نام
                            </th>
                            <th>
                                نام خانوادگی
                            </th>
                            <th>
                                شماره تماس
                            </th>
                            <th>
                                تاریخ تولد
                            </th>
                            <th>
                                ویرایش
                            </th>
                            <th>
                                حذف
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map(user => (
                                <tr key={user.id} className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-4'>
                                    <td className='text-title font-YekanBakh-Black'>
                                        {
                                            user.id
                                        }
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        {user.firstname}
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        {user.lastname}
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        {user.phonenumber}
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        {user.birthday}
                                    </td>
                                    <td>
                                        <div className='flex items-center justify-center text-primary'>
                    <span className='cursor-pointer'>
                    <svg className='w-6 h-6'>
                    <use href='#edit'></use>
                    </svg>
                    </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex items-center justify-center text-red-500'>
                    <span className='cursor-pointer'>
                    <svg className='w-6 h-6'>
                    <use href='#x-mark'></use>
                    </svg>
                    </span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
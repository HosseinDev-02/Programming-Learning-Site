import { createClient } from "@supabase/supabase-js";
import SubTitle from "../../Titles/SubTitle";
import PrimaryButton from "../../Buttons/PrimaryButton";
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

// const supabase = createClient(process.env["REACT_APP_SUPABASE_URL "],process.env["REACT_APP_SUPABASE_KEY "])

console.log(process.env["REACT_APP_SUPABASE_URL "])

export default function Users() {

    // useEffect(() => {
    //     getUsers()
    // }, [])
    //
    // async function getUsers() {
    //     const {data} = await supabase.from('users').select('*')
    //     console.log(data)
    // }

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
                                ایمیل
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
                        <tr className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-4'>
                            <td className='text-title font-YekanBakh-Black'>
                                1
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                حسین
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                رستمی
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                09123456789
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                1381/03/17
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                rostamidev2002@gmail.com
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
                        <tr className='text-center text-sm h-20 odd:bg-background evev:bg-secondary child:px-4'>
                            <td className='text-title font-YekanBakh-Black'>
                                2
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                پرهام
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                بیات
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                0912090909
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                1380/06/20
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                parham1380@gmail.com
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
                        <tr className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-4'>
                            <td className='font-YekanBakh-Black text-title'>
                                3
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                سینا
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                بی نظیر
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                09109876543
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                1381/05/8
                            </td>
                            <td className='font-YekanBakh-SemiBold'>
                                sina1381@gmail.com
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
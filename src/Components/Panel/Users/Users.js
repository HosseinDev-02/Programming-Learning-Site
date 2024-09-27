import {useState} from "react";
import Panel from "../Panel";
import SubTitle from "../../Titles/SubTitle";
import UserForm from "./UserForm";
import PrimaryButton from "../../Buttons/PrimaryButton";

export default function Users() {

    console.log('users.js')

    const [userFormShow, setUserFormShow] = useState(false)

    return (
        <Panel>
            <div className='w-full h-full'>
                <div className='h-20 flex items-center'>
                    <SubTitle fontSize='24px' title='کاربران'></SubTitle>
                </div>
                <div className='space-y-2 mt-8'>
                    {userFormShow ? (<UserForm></UserForm>) : (
                        <>
                            <PrimaryButton href='user-form' clickEvent={() => setUserFormShow(true)}
                                           title='افزودن کاربر جدید'></PrimaryButton>
                            <table className='w-full mt-8'>
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
                        </>
                    )}
                </div>
            </div>
        </Panel>
    )
}
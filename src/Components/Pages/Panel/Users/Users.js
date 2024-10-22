import SubTitle from "../../../Titles/SubTitle";
import React, {useEffect, useState} from "react";
import {getUsers} from "../../../../Utils";
import supabase from "../../../../database";
import {MySwal} from "../../../../Utils";
import {Link} from "react-router-dom";
import TableModalActions from "../../../Modals/TableModalAction";
import RoundButton from "../../../Buttons/RoundButton";


export default function Users() {

    const [users, setUsers] = useState([])
    const [getData, setGetData] = useState(false)

    useEffect(() => {
        getAllUsers()
    }, [getData])

    async function getAllUsers() {
        const data = await getUsers()
        setUsers(data)
    }

    async function removeUserHandler(userId) {
        MySwal.fire({
            title: 'از حذف کاربر اطمینان دارید ؟',
            icon: 'question',
            showCancelButton: true,
            cancelButtonText: 'خیر' ,
            confirmButtonText: 'بله'
        })
            .then(async res => {
                if(res.isConfirmed) {
                   const response = await supabase.from('users').delete().eq('user_id', userId)
                    if(response.status === 204) {
                        MySwal.fire({
                            title: 'کاربر با موفقیت حذف شد',
                            icon: 'success',
                            confirmButtonText: 'اوکی'
                        })
                        setGetData(prevState => !prevState)
                    }
                }
            })
    }

    const editUserMenuShow = elem => {
        elem.currentTarget.nextSibling.classList.add('!flex')
    }
    const editUserMenuHide = elem => {
        elem.currentTarget.parentElement.parentElement.classList.remove('!flex')
    }


    return (
        <div className='w-full h-full'>
            <div className='h-12 md:h-20 flex items-center'>
                <SubTitle className='text-lg md:text-2xl' title='کاربران'></SubTitle>
            </div>
            <div>
                <div className='pt-8 md:pt-10'>
                    <table className='w-full'>
                        <thead className='text-sm h-12 text-center font-YekanBakh-Black text-title child:text-nowrap'>
                        <tr className='border-b border-border child:px-2'>
                            <th className='lg:hidden'>

                            </th>
                            <th className='hidden lg:table-cell'>
                                شناسه
                            </th>
                            <th>
                                تصویر
                            </th>
                            <th>
                                نام کامل
                            </th>
                            <th className='hidden md:table-cell'>
                                شماره تماس
                            </th>
                            <th className='hidden md:table-cell'>
                                ایمیل
                            </th>
                            <th className='hidden sm:table-cell'>
                                دسترسی
                            </th>
                            <th className='hidden lg:table-cell'>
                                عمل ها
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.length ? (
                                users.map((user, index) => (
                                    <tr key={user.user_id}
                                        className='text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap'>
                                        <td className='lg:hidden'>
                                            <div className='flex items-center justify-center relative'>
                                                <span onClick={(elem) => editUserMenuShow(elem)}>
                                                    <svg className='w-4 h-4'>
                                                        <use href='#submenu'></use>
                                                    </svg>
                                                </span>
                                                <div
                                                    className='fixed items-center justify-center inset-0 bg-black/30 transition-all hidden'>
                                                    <div className='max-w-64 w-full flex gap-2 flex-col items-center'>
                                                        <span onClick={(elem) => editUserMenuHide(elem)}
                                                              className={`flex items-center justify-center rounded-full bg-secondary text-title w-10 h-10`}>
                                                            <svg className='w-5 h-5'>
                                                                <use href='#x-mark-mini'></use>
                                                            </svg>
                                                        </span>
                                                        <ul className='flex flex-col divide-y divide-white/20 gap-1 w-full rounded-xl overflow-hidden bg-secondary p-2'>
                                                            <li className='py-2 px-2 text-primary'>
                                                                <Link className='flex items-center gap-1'
                                                                      to={`../user-form/${user.user_id}`}>
                        <span>
                            <svg className='w-4 h-4'>
                                <use href='#pencil-mini'></use>
                            </svg>
                        </span>
                                                                    <span
                                                                        className='text-sm font-YekanBakh-SemiBold'>ویرایش</span>
                                                                </Link>
                                                            </li>
                                                            <li className='py-2 px-2 text-red-500'>
                        <span onClick={() => removeUserHandler(user.user_id)} className='flex items-center gap-1'>
                        <span>
                            <svg className='w-4 h-4'>
                                <use href='#trash-mini'></use>
                            </svg>
                        </span>
                            <span className='text-sm font-YekanBakh-SemiBold'>حذف</span>
                        </span>
                                                            </li>
                                                            <li className='py-2 px-2 text-black'>
                        <span className='flex items-center gap-1'>
                        <span>
                            <svg className='w-4 h-4'>
                                <use href='#clipboard-mini'></use>
                            </svg>
                        </span>
                            <span className='text-sm font-YekanBakh-SemiBold'>جزئیات</span>
                        </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='hidden lg:table-cell'>
                                            {
                                                index + 1
                                            }
                                        </td>
                                        <td>
                                            <div className='w-12 h-12 flex items-center justify-center mx-auto'>
                                                <img className='rounded-full object-cover' src={user.img}
                                                     alt={`${user.firstname} ${user.lastname}`}/>
                                            </div>
                                        </td>
                                        <td>
                                            {`${user.firstname} ${user.lastname}`}
                                        </td>
                                        <td className='hidden md:table-cell'>
                                            {user.phonenumber}
                                        </td>
                                        <td className='hidden md:table-cell'>
                                            {user.email}
                                        </td>
                                        <td className='hidden sm:table-cell'>
                                            {
                                                user.role ? (
                                                    <span className='bg-green-500 rounded p-0.5'>ادمین/مدرس</span>
                                                ) : (
                                                    <span className='bg-yellow-500 rounded p-0.5'>کاربر/دانشجو</span>
                                                )
                                            }
                                        </td>
                                        <td className='hidden lg:table-cell'>
                                            <div className='flex items-center gap-2 justify-center'>
                                                <Link to={`../user-form/${user.user_id}`}
                                                      className='cursor-pointer text-primary'>
                                                    <svg className='w-5 h-5'>
                                                        <use href='#edit'></use>
                                                    </svg>
                                                </Link>
                                                <span onClick={() => removeUserHandler(user.user_id)}
                                                      className='cursor-pointer text-red-500'>
                                                <svg className='w-5 h-5'>
                                                    <use href='#x-mark'></use>
                                                </svg>
                                            </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-4'>
                                    <td className='lg:hidden'>

                                    </td>
                                    <td className='hidden lg:table-cell'>
                                        ---
                                    </td>
                                    <td>
                                        ---
                                    </td>
                                    <td>
                                        ---
                                    </td>
                                    <td className='hidden md:table-cell'>
                                        ---
                                    </td>
                                    <td className='hidden md:table-cell'>
                                        ---
                                    </td>
                                    <td className='hidden sm:table-cell'>
                                        ---
                                    </td>
                                    <td className='hidden lg:table-cell'>
                                        ---
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
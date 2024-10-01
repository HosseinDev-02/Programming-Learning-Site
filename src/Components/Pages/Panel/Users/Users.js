import SubTitle from "../../../Titles/SubTitle";
import {useEffect, useState} from "react";
import {getUsers} from "../../../../Utils";
import supabase from "../../../../database";
import {MySwal} from "../../../../Utils";
import {Link} from "react-router-dom";


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
                        }).then(res => {
                            if(res.isConfirmed) {
                                setGetData(prevState => !prevState)
                            }
                        })
                    }
                }
            })
    }


    return (
        <div className='w-full h-full'>
            <div className='h-20 flex items-center'>
                <SubTitle fontSize='24px' title='کاربران'></SubTitle>
            </div>
            <div>
                <div className='space-y-2 pt-10'>
                    <table className='w-full'>
                        <thead className='text-xs md:text-sm h-12 text-center font-YekanBakh-Black text-title'>
                        <tr className='border-b border-border'>
                            <th className='md:hidden'>
                                نام کامل
                            </th>
                            <th className='hidden md:table-cell'>
                                شناسه
                            </th>
                            <th className='hidden md:table-cell'>
                                نام
                            </th>
                            <th className='hidden md:table-cell line-clamp-1 text-nowrap'>
                                نام خانوادگی
                            </th>
                            <th>
                                شماره تماس
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
                            users.length ? (
                                users.map((user, index) => (
                                    <tr key={user.user_id}
                                        className='text-center text-xs md:text-sm h-16 md:h-20 odd:bg-background even:bg-secondary child:px-4'>
                                        <td className='font-YekanBakh-SemiBold md:hidden'>
                                            {
                                                `${user.firstname} ${user.lastname}`
                                            }
                                        </td>
                                        <td className='text-title font-YekanBakh-Black hidden md:table-cell'>
                                            {
                                                index + 1
                                            }
                                        </td>
                                        <td className='font-YekanBakh-SemiBold hidden md:table-cell'>
                                            {user.firstname}
                                        </td>
                                        <td className='font-YekanBakh-SemiBold hidden md:table-cell'>
                                            {user.lastname}
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            {user.phonenumber}
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-center text-primary'>
                                                <Link to={`../user-form/${user.user_id}`} className='cursor-pointer'>
                                                    <svg className='w-4 h-4 md:w-6 md:h-6'>
                                                        <use href='#edit'></use>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-center text-red-500'>
                                            <span onClick={() => removeUserHandler(user.user_id)}
                                                  className='cursor-pointer'>
                                                <svg className='w-4 h-4 md:w-6 md:h-6'>
                                                    <use href='#x-mark'></use>
                                                </svg>
                                            </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-4'>
                                    <td className='text-title font-YekanBakh-Black'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td>

                                    </td>
                                    <td>

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
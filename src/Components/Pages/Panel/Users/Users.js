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

    function editUsersMenuHandler(elem) {
        elem.currentTarget.nextSibling.classList.toggle('!block')
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
                <div className='space-y-2 pt-10 overflow-auto'>
                    <table className='w-full'>
                        <thead className='text-sm h-12 text-center font-YekanBakh-Black text-title child:text-nowrap'>
                        <tr className='border-b border-border child:px-2'>
                            <th className='lg:hidden'>

                            </th>
                            <th className='hidden lg:table-cell'>
                                شناسه
                            </th>
                            <th>
                                نام و نام خانوادگی
                            </th>
                            <th>
                                شماره تماس
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
                                                <span onClick={(elem) => editUsersMenuHandler(elem)}>
                                                    <svg className='w-4 h-4'>
                                                        <use href='#submenu'></use>
                                                    </svg>
                                                </span>
                                                <div
                                                    className='bg-background rounded p-4 absolute bottom-full right-full shadow hidden'>
                                                    <ul className='flex flex-col gap-4'>
                                                        <li>
                                                            <Link to={`../user-form/${user.user_id}`}
                                                                  className='cursor-pointer text-primary flex items-center gap-1'>
                                                                <svg className='w-4 h-4'>
                                                                    <use href='#pencil-mini'></use>
                                                                </svg>
                                                                <span
                                                                    className='text-xs font-YekanBakh-SemiBold'>ویرایش</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <span onClick={() => removeUserHandler(user.user_id)}
                                                                  className='cursor-pointer text-red-500 flex items-center gap-1'>
                                                                <svg className='w-4 h-4'>
                                                                        <use href='#x-mark-mini'></use>
                                                                    </svg>
                                                                <span className='text-xs font-YekanBakh-SemiBold'>
                                                                        حذف
                                                                    </span>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='hidden lg:table-cell'>
                                            {
                                                index + 1
                                            }
                                        </td>
                                        <td>
                                            {`${user.firstname} ${user.lastname}`}
                                        </td>
                                        <td>
                                            {user.phonenumber}
                                        </td>
                                        <td className='hidden lg:table-cell'>
                                            <div className='flex items-center gap-2 justify-center'>
                                                <Link to={`../user-form/${user.user_id}`}
                                                      className='cursor-pointer text-primary'>
                                                    <svg className='w-4 h-4'>
                                                        <use href='#edit'></use>
                                                    </svg>
                                                </Link>
                                                <span onClick={() => removeUserHandler(user.user_id)}
                                                      className='cursor-pointer text-red-500'>
                                                <svg className='w-4 h-4'>
                                                    <use href='#x-mark'></use>
                                                </svg>
                                            </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-4'>
                                    <td className='hidden lg:table-cell'>
                                        ---
                                    </td>
                                    <td>
                                        ---
                                    </td>
                                    <td>
                                        ---
                                    </td>
                                    <td>
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
import SubTitle from "../../../Titles/SubTitle";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getSessions, MySwal} from "../../../../Utils";
import supabase from "../../../../database";

export default function Sessions() {

    const [sessions, setSessions] = useState([])
    const [getData, setGetData] = useState(false)

    useEffect(() => {
        getAllSessions()
    }, [getData]);

    async function getAllSessions() {
        const data = await getSessions()
        setSessions(data)
        console.log(data)
    }

    async function removeSessionHandler(sessionId) {
        MySwal.fire({
            title: 'از حذف جلسه اطمینان دارید ؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        })
            .then(async res => {
                if (res.isConfirmed) {
                    const response = await supabase.from('sessions').delete().eq('session_id', sessionId)
                    if (response.status === 204) {
                        MySwal.fire({
                            title: 'جلسه با موفقیت حذف شد',
                            icon: 'success',
                            confirmButtonText: 'اوکی'
                        }).then(res => {
                            if (res.isConfirmed) {
                                setGetData(prevState => !prevState)
                            }
                        })
                    }
                }
            })
    }

    function editSessionMenuHandler(elem) {
        elem.currentTarget.nextSibling.classList.toggle('!block')
    }

    return (
        <div className='w-full h-full'>
            <div className='h-20 flex items-center'>
                <SubTitle fontSize='24px' title='جلسات دوره ها'></SubTitle>
            </div>
            <div>
                <div className='space-y-2 pt-10 overflow-auto'>
                    <table className='w-full'>
                        <thead className='text-xs h-12 font-YekanBakh-Black child:text-nowrap'>
                        <tr className='border-b border-border child:px-2'>
                            <th className='lg:hidden'>

                            </th>
                            <th className='hidden sm:table-cell'>
                                شناسه
                            </th>
                            <th>
                                عنوان
                            </th>
                            <th>
                                زمان
                            </th>
                            <th className='hidden sm:table-cell'>
                                دوره
                            </th>
                            <th className='hidden lg:table-cell'>
                                عمل ها
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            sessions.map((session, index) => (
                                <tr key={session.session_id}
                                    className='text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap'>
                                    <td className='lg:hidden'>
                                        <div className='flex items-center justify-center relative'>
                                                <span onClick={(elem) => editSessionMenuHandler(elem)}>
                                                    <svg className='w-4 h-4'>
                                                        <use href='#submenu'></use>
                                                    </svg>
                                                </span>
                                            <div
                                                className='bg-background rounded p-4 absolute bottom-full right-full shadow hidden'>
                                                <ul className='flex flex-col gap-4'>
                                                    <li>
                                                        <Link to={`../session-form/${session.session_id}`}
                                                              className='cursor-pointer text-primary flex items-center gap-1'>
                                                            <svg className='w-4 h-4'>
                                                                <use href='#pencil-mini'></use>
                                                            </svg>
                                                            <span
                                                                className='text-xs font-YekanBakh-SemiBold'>ویرایش</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                            <span onClick={() => removeSessionHandler(session.session_id)}
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
                                    <td className='hidden sm:table-cell'>
                                        {
                                            index + 1
                                        }
                                    </td>
                                    <td>
                                        {session.title}
                                    </td>
                                    <td>
                                        {session.time}
                                    </td>
                                    <td className='hidden sm:table-cell'>
                                        {session.courses.title}
                                    </td>
                                    <td className='hidden lg:table-cell'>
                                        <div className='flex items-center gap-2 justify-center'>
                                            <Link to={`../session-form/${session.session_id}`}
                                                  className='cursor-pointer text-primary'>
                                                <svg className='w-5 h-5'>
                                                    <use href='#edit'></use>
                                                </svg>
                                            </Link>
                                            <span onClick={() => removeSessionHandler(session.session_id)}
                                                  className='cursor-pointer text-red-500'>
                                                <svg className='w-5 h-5'>
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
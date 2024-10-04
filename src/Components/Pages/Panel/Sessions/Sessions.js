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

    return (
        <div className='w-full h-full'>
            <div className='h-20 flex items-center'>
                <SubTitle fontSize='24px' title='جلسات دوره ها'></SubTitle>
            </div>
            <div>
                <div className='space-y-2 pt-10 overflow-auto'>
                    <table className='w-full'>
                        <thead className='text-sm h-12 text-center font-YekanBakh-Black text-title child:text-nowrap'>
                        <tr className='border-b border-border child:px-2'>
                            <th>
                                شناسه
                            </th>
                            <th>
                                عنوان
                            </th>
                            <th>
                                زمان
                            </th>
                            <th>
                                دوره
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
                            sessions.map((session, index) => (
                                <tr key={session.session_id}
                                    className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-2'>
                                    <td className='text-title font-YekanBakh-Black'>
                                        {
                                            index + 1
                                        }
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        {session.title}
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        {session.time}
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        {session.courses.title}
                                    </td>
                                    <td>
                                        <div className='flex items-center justify-center text-primary'>
                                            <Link to={`../session-form/${session.session_id}`} className='cursor-pointer'>
                                                <svg className='w-5 h-5'>
                                                    <use href='#edit'></use>
                                                </svg>
                                            </Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex items-center justify-center text-red-500'>
                                            <span onClick={() => removeSessionHandler(session.session_id)} className='cursor-pointer'>
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
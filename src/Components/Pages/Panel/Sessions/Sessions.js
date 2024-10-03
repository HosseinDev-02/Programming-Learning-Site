import SubTitle from "../../../Titles/SubTitle";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getSessions} from "../../../../Utils";

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
                                    <td>
                                        <div className='flex items-center justify-center text-primary'>
                                            <Link to='#' className='cursor-pointer'>
                                                <svg className='w-5 h-5'>
                                                    <use href='#edit'></use>
                                                </svg>
                                            </Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex items-center justify-center text-red-500'>
                                            <span className='cursor-pointer'>
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
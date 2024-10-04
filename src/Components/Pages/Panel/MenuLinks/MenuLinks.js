import SubTitle from "../../../Titles/SubTitle";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMenuLinks, MySwal} from "../../../../Utils";
import supabase from "../../../../database";

export default function MenuLinks() {

    const [menuLinks, setMenuLinks] = useState([])
    const [getData, setGetData] = useState(false)

    useEffect(() => {
        getAllMenuLinks()
    }, [getData]);

    async function getAllMenuLinks() {
        const data = await getMenuLinks()
        setMenuLinks(data)
    }

    async function removeMenuLinkHandler(menuLinkId) {
        MySwal.fire({
            title: 'از حذف لینک اطمینان دارید ؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        })
            .then(async res => {
                if (res.isConfirmed) {
                    const response = await supabase.from('menulinks').delete().eq('menulink_id', menuLinkId)
                    if (response.status === 204) {
                        MySwal.fire({
                            title: 'لینک با موفقیت حذف شد',
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
                <SubTitle fontSize='24px' title='لینک ها'></SubTitle>
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
                                زیرمنو
                            </th>
                            <th>
                                لینک
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
                            menuLinks.length ? (
                                menuLinks.map((menulink, index) => (
                                    <tr key={menulink.menulink_id}
                                        className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-2'>
                                        <td className='text-title font-YekanBakh-Black'>
                                            {
                                                index + 1
                                            }
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            {menulink.title}
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            {menulink.submenus.title}
                                        </td>
                                        <td dir='ltr' className='font-YekanBakh-SemiBold'>
                                            {menulink.link}
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-center text-primary'>
                                                <Link to={`../menulink-form/${menulink.menulink_id}`}
                                                      className='cursor-pointer'>
                                                    <svg className='w-5 h-5'>
                                                        <use href='#edit'></use>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-center text-red-500'>
                                            <span onClick={() => removeMenuLinkHandler(menulink.menulink_id)} className='cursor-pointer'>
                                                <svg className='w-5 h-5'>
                                                    <use href='#x-mark'></use>
                                                </svg>
                                            </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-2'>
                                    <td>
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
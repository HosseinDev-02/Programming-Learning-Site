import SubTitle from "../../../Titles/SubTitle";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getSubMenus, MySwal} from "../../../../Utils";
import supabase from "../../../../database";

export default function SubMenus() {

    const [subMenus, setSubMenus] = useState([])
    const [getData, setGetData] = useState(false)


    useEffect(() => {
        getAllSubMenus()
    }, [getData]);

    async function getAllSubMenus() {
        const data = await getSubMenus()
        setSubMenus(data)
        console.log(data)
    }

    async function removeSubMenuHandler(submenuId) {
        MySwal.fire({
            title: 'از حذف زیرمنو اطمینان دارید ؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        })
            .then(async res => {
                if (res.isConfirmed) {
                    const response = await supabase.from('submenus').delete().eq('submenu_id', submenuId)
                    if (response.status === 204) {
                        MySwal.fire({
                            title: 'زیرمنو با موفقیت حذف شد',
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

    function editSubmenuModalHandler(elem) {
        elem.currentTarget.nextSibling.classList.toggle('!block')
    }

    return (
        <div className='w-full h-full'>
            <div className='h-12 md:h-20 flex items-center'>
                <SubTitle className='text-lg md:text-2xl' title='منو ها'></SubTitle>
            </div>
            <div className='pt-8 md:pt-10'>
                <table className='w-full'>
                    <thead className='text-sm h-12 text-center font-YekanBakh-Black text-title child:text-nowrap'>
                    <tr className='border-b border-border child:px-3'>
                        <th className='lg:hidden'>

                        </th>
                        <th className='hidden sm:table-cell'>
                            شناسه
                        </th>
                        <th>
                            عنوان
                        </th>
                        <th className='hidden sm:table-cell'>
                            منو
                        </th>
                        <th>
                            لینک
                        </th>
                        <th className='hidden lg:table-cell'>
                            عمل ها
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        subMenus.length ? (
                            subMenus.map((submenu, index) => (
                                <tr key={submenu.submenu_id}
                                    className='text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap'>
                                    <td className='lg:hidden'>
                                        <div className='flex items-center justify-center relative'>
                                                <span onClick={(elem) => editSubmenuModalHandler(elem)}>
                                                    <svg className='w-4 h-4'>
                                                        <use href='#submenu'></use>
                                                    </svg>
                                                </span>
                                            <div
                                                className='bg-background rounded p-4 absolute bottom-full right-full shadow hidden'>
                                                <ul className='flex flex-col gap-4'>
                                                    <li>
                                                        <Link to={`../submenu-form/${submenu.submenu_id}`}
                                                              className='cursor-pointer text-primary flex items-center gap-1'>
                                                            <svg className='w-4 h-4'>
                                                                <use href='#pencil-mini'></use>
                                                            </svg>
                                                            <span
                                                                className='text-xs font-YekanBakh-SemiBold'>ویرایش</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                            <span
                                                                onClick={() => removeSubMenuHandler(submenu.submenu_id)}
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
                                        {submenu.title}
                                    </td>
                                    <td className='hidden sm:table-cell'>
                                        {submenu.menus.title}
                                    </td>
                                    <td dir='ltr'>
                                        {submenu.link}
                                    </td>
                                    <td className='hidden lg:table-cell'>
                                        <div className='flex items-center gap-2 justify-center'>
                                            <Link to={`../submenu-form/${submenu.submenu_id}`}
                                                  className='cursor-pointer text-primary'>
                                                <svg className='w-5 h-5'>
                                                    <use href='#edit'></use>
                                                </svg>
                                            </Link>
                                            <span onClick={() => removeSubMenuHandler(submenu.submenu_id)}
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
                            <tr className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-2'>
                                <td className='lg:hidden'>
                                    ---
                                </td>
                                <td className='hidden sm:table-cell'>
                                    ---
                                </td>
                                <td>
                                    ---
                                </td>
                                <td className='hidden sm:table-cell'>
                                    ---
                                </td>
                                <td>
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
    )
}
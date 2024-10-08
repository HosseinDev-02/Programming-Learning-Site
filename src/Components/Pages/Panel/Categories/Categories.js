import SubTitle from "../../../Titles/SubTitle";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCategories, MySwal} from "../../../../Utils";
import supabase from "../../../../database";

export default function Categories() {

    const [getData, setGetData] = useState(false)
    const [categories, setCategoris] = useState([])

    useEffect(() => {
        getAllCategories()
    }, [getData]);

    async function getAllCategories() {
        const data = await getCategories()
        setCategoris(data)
    }

    function editCategoryMenuHandler(elem) {
        elem.currentTarget.nextSibling.classList.toggle('!block')
    }

    function removeCategoryHandler(categoryId) {
        MySwal.fire({
            title: 'از حذف دسته بندی اطمینان دارید ؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        })
            .then(async res => {
                if(res.isConfirmed) {
                    const response = await supabase.from('categories').delete().eq('category_id', categoryId)
                    if(response.status === 204) {
                        MySwal.fire({
                            title: 'دسته بندی با موفقیت حذف شد',
                            icon: 'success',
                            confirmButtonText: 'اوکی'
                        })
                            .then(res => {
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
            <div className='h-12 md:h-20 flex items-center'>
                <SubTitle className='text-lg md:text-2xl' title='دسته بندی ها'></SubTitle>
            </div>
            <div className='pt-8 md:pt-10'>
                <table className='w-full'>
                    <thead className='text-xs h-12 font-YekanBakh-Black child:text-nowrap'>
                    <tr className='border-b border-border child:px-3'>
                        <th className='lg:hidden'>

                        </th>
                        <th>
                            شناسه
                        </th>
                        <th>
                            عنوان
                        </th>
                        <th className='hidden lg:table-cell'>
                            عمل ها
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        categories.map((category, index) => (
                            <tr key={category.category_id}
                                className='text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap'>
                                <td className='lg:hidden'>
                                    <div className='flex items-center justify-center relative'>
                                                <span onClick={(elem) => editCategoryMenuHandler(elem)}>
                                                    <svg className='w-4 h-4'>
                                                        <use href='#submenu'></use>
                                                    </svg>
                                                </span>
                                        <div
                                            className='bg-background rounded p-4 absolute bottom-full right-full shadow hidden'>
                                            <ul className='flex flex-col gap-4'>
                                                <li>
                                                    <Link to={`../category-form/${category.category_id}`}
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
                                                                onClick={() => removeCategoryHandler(category.category_id)}
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
                                <td>
                                    {
                                        index + 1
                                    }
                                </td>
                                <td>
                                    {category.title}
                                </td>
                                <td className='hidden lg:table-cell'>
                                    <div className='flex items-center gap-2 justify-center'>
                                        <Link to={`../category-form/${category.category_id}`}
                                              className='cursor-pointer text-primary'>
                                            <svg className='w-5 h-5'>
                                                <use href='#edit'></use>
                                            </svg>
                                        </Link>
                                        <span onClick={() => removeCategoryHandler(category.category_id)}
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
    )
}
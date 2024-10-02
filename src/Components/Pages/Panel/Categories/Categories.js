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
            <div className='h-20 flex items-center'>
                <SubTitle fontSize='24px' title='دسته بندی ها'></SubTitle>
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
                                ویرایش
                            </th>
                            <th>
                                حذف
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            categories.map((category, index) => (
                                <tr key={category.category_id} className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-2'>
                                    <td className='text-title font-YekanBakh-Black'>
                                        {
                                            index + 1
                                        }
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        {category.title}
                                    </td>
                                    <td>
                                        <div className='flex items-center justify-center text-primary'>
                                            <Link to={`../category-form/${category.category_id}`} className='cursor-pointer'>
                                                <svg className='w-5 h-5'>
                                                    <use href='#edit'></use>
                                                </svg>
                                            </Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex items-center justify-center text-red-500'>
                                            <span onClick={() => removeCategoryHandler(category.category_id)} className='cursor-pointer'>
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
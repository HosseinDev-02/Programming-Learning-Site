import SubTitle from "../../../Titles/SubTitle";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getArticles, MySwal} from "../../../../Utils";
import supabase from "../../../../database";

export default function Articles() {

    const [articles, setArticles] = useState([])
    const [getData, setGetData] = useState(false)

    useEffect(() => {
        getAllArticles()
    }, [getData]);

    async function getAllArticles() {
        const data = await getArticles()
        setArticles(data)
        console.log(data)
    }

    async function removeArticleHandler(articleId){
        MySwal.fire({
            title: 'از حذف مقاله اطمینان دارید ؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        })
            .then(async res => {
                if (res.isConfirmed) {
                    const response = await supabase.from('articles').delete().eq('article_id', articleId)
                    if (response.status === 204) {
                        MySwal.fire({
                            title: 'مقاله با موفقیت حذف شد',
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
                <SubTitle fontSize='24px' title='مقاله ها'></SubTitle>
            </div>
            <div>
                <div className='space-y-2 pt-10 relative overflow-auto'>
                    <table className='w-full'>
                        <thead
                            className='text-xs md:text-sm h-12 text-center font-YekanBakh-Black text-title child:text-nowrap'>
                        <tr className='border-b border-border child:px-4'>
                            <th>
                                شناسه
                            </th>
                            <th>
                                عنوان
                            </th>
                            <th>
                                تصویر
                            </th>
                            <th>
                                توضیحات
                            </th>
                            <th>
                                دسته بندی
                            </th>
                            <th>
                                تایم مطالعه
                            </th>
                            <th>
                                نویسنده
                            </th>
                            <th>
                                تصویر نویسنده
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
                            articles.length ? (
                                articles.map((article, index) => (
                                    <tr key={article.article_id}
                                        className='text-center text-xs md:text-sm h-20 odd:bg-background even:bg-secondary child:px-4 child:text-nowrap'>
                                        <td className='text-title font-YekanBakh-Black'>
                                            {
                                                index + 1
                                            }
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            <div className='flex items-center justify-center line-clamp-1'>
                                                {
                                                    article.title
                                                }
                                            </div>
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            <div className='flex items-center justify-center'>
                                                <img className='w-20 h-12 rounded-xl object-cover shrink-0'
                                                     src={article.img}
                                                     alt={article.title}/>
                                            </div>
                                        </td>
                                        <td className='font-YekanBakh-SemiBold max-w-xs text-ellipsis whitespace-nowrap overflow-hidden'>
                                            {
                                                article.description
                                            }
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            {
                                                article.categories.title
                                            }
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            {
                                                article.time
                                            }
                                        </td>
                                        <td className='font-YekanBakh-SemiBold'>
                                            {
                                                article.writer
                                            }
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-center'>
                                                <img className='shrink-0 w-12 h-12 rounded-full object-cover'
                                                     src={article.writerImg}
                                                     alt={article.writer}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-center text-primary'>
                                                <Link to={`../article-form/${article.article_id}`}
                                                      className='cursor-pointer'>
                                                    <svg className='w-5 h-5'>
                                                        <use href='#edit'></use>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-center text-red-500'>
                                            <span onClick={() => removeArticleHandler(article.article_id)} className='cursor-pointer'>
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
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        ---
                                    </td>
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
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

    function editArticleMenuHandler(elem) {
        elem.currentTarget.nextSibling.classList.toggle('!block')
    }

    return (
        <div className='w-full h-full'>
            <div className='h-12 md:h-20 flex items-center'>
                <SubTitle className='text-lg md:text-2xl' title='مقاله ها'></SubTitle>
            </div>
            <div className='pt-8 md:pt-10 relative'>
                <table className='w-full'>
                    <thead
                        className='text-xs h-12 font-YekanBakh-Black child:text-nowrap'>
                    <tr className='border-b border-border child:px-3'>
                        <th className='lg:hidden'>

                        </th>
                        <th className='hidden lg:table-cell'>
                            شناسه
                        </th>
                        <th>
                            عنوان
                        </th>
                        <th>
                            تصویر
                        </th>
                        <th className='hidden sm:table-cell'>
                            توضیحات
                        </th>
                        <th className='hidden sm:table-cell'>
                            دسته بندی
                        </th>
                        <th className='hidden lg:table-cell'>
                            تایم مطالعه
                        </th>
                        <th className='hidden lg:table-cell'>
                            نویسنده
                        </th>
                        <th className='hidden lg:table-cell'>
                            عمل ها
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        articles.length ? (
                            articles.map((article, index) => (
                                <tr key={article.article_id}
                                    className='text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap'>
                                    <td className='lg:hidden'>
                                        <div className='flex items-center justify-center relative'>
                                                <span onClick={(elem) => editArticleMenuHandler(elem)}>
                                                    <svg className='w-4 h-4'>
                                                        <use href='#submenu'></use>
                                                    </svg>
                                                </span>
                                            <div
                                                className='bg-background rounded p-4 absolute bottom-full right-full shadow hidden'>
                                                <ul className='flex flex-col gap-4'>
                                                    <li>
                                                        <Link to={`../article-form/${article.article_id}`}
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
                                                                onClick={() => removeArticleHandler(article.article_id)}
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
                                    <td className='max-w-[180px] text-ellipsis whitespace-nowrap overflow-hidden'>
                                        {
                                            article.title
                                        }
                                    </td>
                                    <td>
                                        <div className='w-16 h-12 flex items-center justify-center mx-auto'>
                                            <img className='rounded object-cover' src={article.img}
                                                 alt={article.title}/>
                                        </div>
                                    </td>
                                    <td className='hidden sm:table-cell max-w-[180px] text-ellipsis whitespace-nowrap overflow-hidden'>
                                        {
                                            article.description
                                        }
                                    </td>
                                    <td className='hidden sm:table-cell'>
                                        {
                                            article.categories.title
                                        }
                                    </td>
                                    <td className='hidden lg:table-cell'>
                                        {
                                            article.time
                                        }
                                    </td>
                                    <td className='hidden lg:table-cell'>
                                        {
                                            article.writer
                                        }
                                    </td>
                                    <td className='hidden lg:table-cell'>
                                        <div className='flex items-center gap-2 justify-center'>
                                            <Link to={`../article-form/${article.article_id}`}
                                                  className='cursor-pointer text-primary'>
                                                <svg className='w-5 h-5'>
                                                    <use href='#edit'></use>
                                                </svg>
                                            </Link>
                                            <span onClick={() => removeArticleHandler(article.article_id)}
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
    )
}
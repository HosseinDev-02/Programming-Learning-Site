import SubTitle from "../../../Titles/SubTitle";
import PrimaryButton from "../../../Buttons/PrimaryButton";
import {useEffect, useState} from "react";
import {getArticles, getCategories, MySwal} from "../../../../Utils";
import supabase from "../../../../database";
import useMainParam from "../../../../hooks/useMainParam";
import useInput from "../../../../hooks/useInput";

export default function ArticleForm() {

    const [
        articleTitle,
        setArticleTitle,
        resetArticleTitle,
        bindingArticleTitle
    ] = useInput('')
    const [
        articleTime,
        setArticleTime,
        resetArticleTime,
        bindingArticleTime
    ] = useInput('')
    const [
        articleDescription,
        setArticleDescription,
        resetArticleDescription,
        bindingArticleDescription
    ] = useInput('')
    const [writers, setWriters] = useState([])
    const [articleImg, setArticleImg] = useState('')
    const [articleTeachersMenuShow, setArticleTeachersMenuShow] = useState(false)
    const [categories, setCategories] = useState([])
    const [categoryMenuShow, setCategoryMenuShow] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [selectedWriter, setSelectedWriter] = useState('')
    const [writerId, setWriterId] = useState('')
    const articleId = useMainParam()

    useEffect(() => {
        if(articleId) {
            getMainArticle()
        }
        getAllTeachers()
        getAllCategories()
    }, []);

    async function getAllCategories() {
        const data = await getCategories()
        setCategories(data)
    }

    async function getAllTeachers() {
        const {data} = await supabase
            .from('users')
            .select('*')
            .eq('role', true)
        setWriters(data)
    }

    function selectCategory(elem) {
        setCategoryId(elem.target.dataset.id)
        setSelectedCategory(elem.target.innerHTML)
        setCategoryMenuShow(prevState => !prevState)
    }

    async function getMainArticle() {
        const data = await getArticles()
        const mainArticle = data.find(article => article.article_id === articleId)
        setArticleTitle(mainArticle.title)
        setArticleTime(mainArticle.time)
        setArticleImg(mainArticle.img)
        setArticleDescription(mainArticle.description)
        setSelectedCategory(mainArticle.categories.title)
        setCategoryId(mainArticle.categories.category_id)
    }

    function clearStates() {
        resetArticleTime()
        resetArticleTitle()
        resetArticleDescription()
        setArticleImg('')
        setSelectedCategory('')
        setCategoryId('')
        setWriterId('')
        setSelectedWriter('')
    }

    function selectArticleWriter(elem) {
        setSelectedWriter(elem.target.innerHTML)
        setArticleTeachersMenuShow(prevState => !prevState)
        setWriterId(elem.target.dataset.id)
    }

    async function addNewArticle() {
        const newArticle = {
            title: articleTitle,
            description: articleDescription,
            time: articleTime,
            category_id: categoryId,
            img: articleImg,
            writer_id: writerId
        }
        const response = await supabase.from('articles').insert(newArticle)
        if (response.status === 201) {
            MySwal.fire({
                title: 'مقاله با موفقیت ثبت شد',
                icon: 'success',
                confirmButtonText: 'اوکی'
            })
            clearStates()
        }
    }

    async function editArticleHandler() {

        const articleNewInfo = {
            title: articleTitle,
            description: articleDescription,
            time: articleTime,
            category_id: categoryId,
            writer_id: writerId,
            img: articleImg
        }

        MySwal.fire({
            title: 'آیا از انجام این کار اطمینان دارید ؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        })
            .then(async res => {
                if (res.isConfirmed) {
                    const data = await supabase.from('articles').update(articleNewInfo).eq('article_id', articleId)
                    if (data.status === 204) {
                        MySwal.fire({
                            title: 'بروزرسانی انجام شد', icon: 'success', confirmButtonText: 'اوکی'
                        })
                        window.history.back()
                    }
                }
            })
    }

    return (<div className='w-full h-full'>
        <div className='h-12 md:h-20 flex items-center'>
            {
                articleId ? (
                    <SubTitle className='text-lg md:text-2xl' title='ویرایش مقاله'></SubTitle>
                ) : (
                    <SubTitle className='text-lg md:text-2xl' title='افزودن مقاله'></SubTitle>
                )
            }
        </div>
        <div className='flex flex-col gap-5 pt-8 md:pt-10'>
            <div
                className='flex flex-col sm:flex-row items-center sm:items-start flex-wrap justify-between gap-5'>
                <div className='flex sm:flex-row flex-col items-center gap-5 w-full'>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            عنوان
                        </label>
                        <input {...bindingArticleTitle}
                               className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            زمان مطالعه
                        </label>
                        <input {...bindingArticleTime}
                               className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                    <div className='flex gap-5 items-start w-full sm:w-1/3'>
                        <div className='flex flex-col gap-2 items-start w-full'>
                            <span className='text-xs font-YekanBakh-SemiBold'>تصویر مقاله</span>
                            <label className='relative w-full'>
                                <div className='flex items-center gap-5'>
                                    <span>
                                        <svg className='w-8 h-8'>
                                            <use href='#upload'></use>
                                        </svg>
                                    </span>
                                    <div
                                        className='flex items-center justify-center bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'>
                                        {articleImg}
                                    </div>
                                </div>
                                <input onChange={(e) => {
                                    setArticleImg(`/images/Courses/${e.target.files[0].name}`)
                                }} className='sr-only' type="file"/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex items-center flex-col sm:flex-row w-full gap-5'>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/2'>
                        <span className='text-xs font-YekanBakh-SemiBold'>انتخاب دسته بندی</span>
                        <div className='w-full rounded-2xl relative space-y-2'>
                            <button onClick={() => setCategoryMenuShow(prevState => !prevState)}
                                    className='flex items-center w-full justify-between px-4 outline-none bg-background rounded-2xl h-11 text-title font-YekanBakh-SemiBold'>
                                        <span className='text-xs'>
                                            {selectedCategory ? selectedCategory : 'انتخاب کنید'}
                                        </span>
                                <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-down'></use>
                                            </svg>
                                        </span>
                            </button>
                            <div style={categoryMenuShow ? {display: 'block'} : {display: 'none'}}
                                 className='bg-background shadow rounded-2xl overflow-hidden transition-all absolute right-0 left-0 top-11 z-10'>
                                <ul onClick={(elem) => selectCategory(elem)}
                                    className='text-xs font-YekanBakh-SemiBold flex flex-col'>
                                    {categories.map(category => (
                                        <li data-id={category.category_id} key={category.category_id}
                                            className='py-3 px-4 hover:bg-background transition-colors hover:text-title cursor-pointer'>
                                            {category.title}
                                        </li>))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/2'>
                        <span className='text-xs font-YekanBakh-SemiBold'>انتخاب نویسنده</span>
                        <div className='w-full rounded-2xl relative space-y-2'>
                            <button onClick={() => setArticleTeachersMenuShow(prevState => !prevState)}
                                    className='flex items-center w-full justify-between px-4 outline-none bg-background rounded-2xl h-11 text-title font-YekanBakh-SemiBold'>
                                        <span className='text-xs'>
                                            {selectedWriter ? selectedWriter : 'انتخاب کنید'}
                                        </span>
                                <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-down'></use>
                                            </svg>
                                        </span>
                            </button>
                            <div style={articleTeachersMenuShow ? {display: 'block'} : {display: 'none'}}
                                 className='bg-background shadow rounded-2xl overflow-hidden transition-all absolute right-0 left-0 top-11 z-10'>
                                <ul onClick={(elem) => selectArticleWriter(elem)}
                                    className='text-xs font-YekanBakh-SemiBold flex flex-col'>
                                    {writers.map(writer => (
                                        <li data-id={writer.user_id} key={writer.user_id}
                                            className='py-3 px-4 hover:bg-background transition-colors hover:text-title cursor-pointer'>
                                            {
                                                `${writer.firstname} ${writer.lastname}`
                                            }
                                        </li>))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-start w-full'>
                    <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                        توضیحات
                    </label>
                    <textarea {...bindingArticleDescription}
                              className='bg-background rounded-xl border border-border text-title outline-none overflow-hidden p-3 w-full'
                              rows="5"></textarea>
                </div>
            </div>
        </div>
        <div className='inline-flex items-center gap-3 mt-5'>
            {
                articleId ? (
                    <>
                        <PrimaryButton clickEvent={() => editArticleHandler()} icon='#check'
                                       title='بروزرسانی'></PrimaryButton>
                        <PrimaryButton className='bg-red-500' clickEvent={() => window.history.back()}
                                       icon='#x-mark' title='بازگشت'></PrimaryButton>
                    </>
                ) : (
                    <PrimaryButton clickEvent={() => addNewArticle()} icon='#check'
                                   title='ثبت مقاله جدید'></PrimaryButton>
                )
            }
        </div>
    </div>)
}
import SubTitle from "../../../Titles/SubTitle";
import PrimaryButton from "../../../Buttons/PrimaryButton";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import supabase from "../../../../database";
import {getCategories, MySwal} from "../../../../Utils";

export default function CategoryForm() {

    const [categoryTitle, setCategoryTitle] = useState('')
    const params = useParams()
    const categoryId = params.id

    useEffect(() => {
        if (categoryId) {
            getMainCategory()
        }
    }, []);

    async function addNewCategory() {
        let newCategory = {
            title: categoryTitle.trim()
        }
        const response = await supabase.from('categories').insert(newCategory)
        if (response.status === 201) {
            MySwal.fire({
                title: 'دسته بندی با موفقیت ثبت شد',
                icon: 'success',
                confirmButtonText: 'اوکی'
            })
                .then(res => {
                    if (res.isConfirmed) {
                        clearStates()
                    }
                })
        }
    }

    async function getMainCategory() {
        const data = await getCategories()
        let mainCategory = data.find(category => category.category_id === categoryId)
        setCategoryTitle(mainCategory.title)
    }

    async function editCategory() {
        const response = await supabase.from('categories')
            .update({
                title: categoryTitle
            })
            .eq('category_id', categoryId)
        if(response.status === 204) {
            MySwal.fire({
                title: 'بروزرسانی انجام شد',
                icon: 'success',
                confirmButtonText: 'اوکی'
            })
                .then(res => {
                    if(res.isConfirmed) {
                        window.history.back()
                    }
                })
        }
    }

    function clearStates() {
        setCategoryTitle('')
    }

    return (
        <div className='w-full h-full'>
            <div className='h-20 flex items-center'>
                {
                    categoryId ? (
                        <SubTitle fontSize='24px' title='ویرایش دسته بندی'></SubTitle>
                    ) : (
                        <SubTitle fontSize='24px' title='افزودن دسته بندی'></SubTitle>
                    )
                }
            </div>
            <div className='flex flex-col gap-5 pt-10'>
                <div
                    className='flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start md:items-center lg:items-start justify-between gap-5'>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            عنوان دسته بندی
                        </label>
                        <input value={categoryTitle} onChange={(e) => setCategoryTitle(e.target.value)}
                               className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                </div>
            </div>
            <div className='inline-flex items-center gap-3 mt-5'>
                {
                    categoryId ? (
                        <>
                            <PrimaryButton clickEvent={() => editCategory()} icon='#check'
                                           title='بروزرسانی'></PrimaryButton>
                            <PrimaryButton className='bg-red-500' clickEvent={() => window.history.back()}
                                           icon='#x-mark' title='بازگشت'></PrimaryButton>
                        </>
                    ) : (
                        <PrimaryButton clickEvent={() => addNewCategory()} icon='#check'
                                       title='ثبت دسته بندی جدید'></PrimaryButton>
                    )
                }
            </div>
        </div>
    )
}
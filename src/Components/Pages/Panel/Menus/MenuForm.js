import SubTitle from "../../../Titles/SubTitle";
import PrimaryButton from "../../../Buttons/PrimaryButton";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import supabase from "../../../../database";
import {getMenus, MySwal} from "../../../../Utils";

export default function MenuForm() {

    const params = useParams()
    const menuId = params.id
    const [menuTitle, setMenuTitle] = useState('')
    const [menuLink, setMenuLink] = useState('')

    useEffect(() => {
        if(menuId){
            getMainMenu()
        }
    }, []);

    function clearStates() {
        setMenuLink('')
        setMenuTitle('')
    }

    async function getMainMenu() {
        const data = await getMenus()
        const mainMenu = data.find(menu => menu.menu_id === menuId)
        setMenuTitle(mainMenu.title)
        setMenuLink(mainMenu.link)
    }

    async function editMenuHandler() {
        MySwal.fire({
            title: 'آیا از انجام این کار اطمینان دارید ؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        })
            .then(async res => {
                if (res.isConfirmed) {
                    const response = await supabase.from('menus').update({
                        title: menuTitle,
                        link: menuLink
                    }).eq('menu_id', menuId)
                    if (response.status === 204) {
                        MySwal.fire({
                            title: 'بروزرسانی انجام شد', icon: 'success', confirmButtonText: 'اوکی'
                        })
                            .then(res => {
                                if (res.isConfirmed) {
                                    window.history.back()
                                }
                            })
                    }
                }
            })
    }

    async function addNewMenuHandler() {
        let newMenu = {
            title: menuTitle,
            link: menuLink
        }

        const response = await supabase.from('menus').insert(newMenu)

        if(response.status === 201) {
            MySwal.fire({
                title: 'منو با موفقیت ثبت شد',
                icon: 'success',
                confirmButtonText: 'اوکی'
            })
                .then(res => {
                    if(res.isConfirmed) {
                        clearStates()
                    }
                })
        }
    }

    return (
        <div className='w-full h-full'>
            <div className='h-12 md:h-20 flex items-center'>
                {
                    menuId ? (
                        <SubTitle className='text-lg md:text-2xl' title='ویرایش جلسه'></SubTitle>
                    ) : (
                        <SubTitle className='text-lg md:text-2xl' title='افزودن جلسه'></SubTitle>
                    )
                }
            </div>
            <div className='flex flex-col gap-5 pt-8 md:pt-10'>
                <div
                    className='flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5'>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            عنوان منو
                        </label>
                        <input value={menuTitle} onChange={(e) => setMenuTitle(e.target.value)} className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            لینک منو
                        </label>
                        <input dir='ltr' value={menuLink} onChange={(e) => setMenuLink(e.target.value)} className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                </div>
            </div>
            <div className='inline-flex items-center gap-3 mt-5'>
                {
                    menuId ? (
                        <>
                            <PrimaryButton clickEvent={() => editMenuHandler()} icon='#check'
                                           title='بروزرسانی'></PrimaryButton>
                            <PrimaryButton className='bg-red-500' clickEvent={() => window.history.back()}
                                           icon='#x-mark' title='بازگشت'></PrimaryButton>
                        </>
                    ) : (
                        <PrimaryButton clickEvent={() => addNewMenuHandler()} icon='#check'
                                       title='ثبت منو جدید'></PrimaryButton>
                    )
                }
            </div>
        </div>
    )
}
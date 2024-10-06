import SubTitle from "../../../Titles/SubTitle";
import PrimaryButton from "../../../Buttons/PrimaryButton";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMenuLinks, getSubMenus, MySwal} from "../../../../Utils";
import supabase from "../../../../database";

export default function MenuLinkForm() {

    const params = useParams()
    const menuLinkId = params.id
    const [submenuMenuShow, setSubmenuMenuShow] = useState(false)
    const [selectedSubmenu, setSelectedSubmenu] = useState('')
    const [submenus, setSubmenus] = useState([])
    const [menuLinkTitle, setMenuLinkTitle] = useState('')
    const [menuLinkHref, setMenuLinkHref] = useState('')
    const [submenuId, setSubmenuId] = useState('')

    useEffect(() => {
        if(menuLinkId) {
            getMainMenuLink()
        }
        getAllSubmenus()
    }, []);


    async function getAllSubmenus() {
        const data = await getSubMenus()
        setSubmenus(data)
    }

    async function getMainMenuLink() {
        const data = await getMenuLinks()
        const mainMenuLink = data.find(link => link.menulink_id === menuLinkId)
        setMenuLinkTitle(mainMenuLink.title)
        setMenuLinkHref(mainMenuLink.link)
        setSelectedSubmenu(mainMenuLink.submenus.title)
        setSubmenuId(mainMenuLink.submenus.submenu_id)
    }

    async function editMenuLink() {
        MySwal.fire({
            title: 'آیا از انجام این کار اطمینان دارید ؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        })
            .then(async res => {
                if (res.isConfirmed) {
                    const response = await supabase.from('menulinks').update({
                        title: menuLinkTitle,
                        link: menuLinkHref,
                        submenu_id: submenuId
                    }).eq('menulink_id', menuLinkId)
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

    function clearStates() {
        setMenuLinkTitle('')
        setMenuLinkHref('')
        setSelectedSubmenu('')
        setSubmenuId('')
    }

    async function addNewMenuLink() {
        const newMenuLink = {
            title: menuLinkTitle,
            link: menuLinkHref,
            submenu_id: submenuId
        }
        const response = await supabase.from('menulinks').insert(newMenuLink)
        if(response.status === 201){
            MySwal.fire({
                title: 'لینک با موفقیت ثبت شد',
                icon: 'success',
                confirmButtonText: 'اوکی'
            })
                .then(res => {
                    if(res.isConfirmed) {
                        clearStates()
                    }
                })
        }
        console.log(newMenuLink)
    }

    function selectSubmenu(event) {
        setSelectedSubmenu(event.target.innerHTML)
        setSubmenuId(event.target.dataset.id)
        setSubmenuMenuShow(prevState => !prevState)
    }

    return (
        <div className='w-full h-full'>
            <div className='h-20 flex items-center'>
                {
                    menuLinkId ? (
                        <SubTitle fontSize='24px' title='ویرایش لینک'></SubTitle>
                    ) : (
                        <SubTitle fontSize='24px' title='افزودن لینک'></SubTitle>
                    )
                }
            </div>
            <div className='flex flex-col gap-5 pt-10'>
                <div
                    className='flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5'>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            عنوان لینک
                        </label>
                        <input value={menuLinkTitle} onChange={(event) => setMenuLinkTitle(event.target.value)} className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            لینک
                        </label>
                        <input value={menuLinkHref} onChange={(e) => setMenuLinkHref(e.target.value)} dir='ltr' className='bg-back ground border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                               type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3'>
                        <span className='text-xs font-YekanBakh-SemiBold'>انتخاب زیرمنو</span>
                        <div className='w-full rounded-2xl relative space-y-2'>
                            <button onClick={() => setSubmenuMenuShow(prevState => !prevState)}
                                    className='flex items-center w-full justify-between px-4 outline-none bg-background rounded-2xl h-11 text-title font-YekanBakh-SemiBold'>
                                        <span className='text-xs'>
                                            {selectedSubmenu ? selectedSubmenu : 'انتخاب کنید'}
                                        </span>
                                <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#chevron-down'></use>
                                            </svg>
                                        </span>
                            </button>
                            <div style={submenuMenuShow ? {display: 'block'} : {display: 'none'}}
                                 className='bg-background shadow rounded-2xl overflow-hidden transition-all absolute right-0 left-0 top-11 z-10'>
                                <ul onClick={(event) => selectSubmenu(event)} className='text-xs font-YekanBakh-SemiBold flex flex-col'>
                                    {submenus.map(submenu => (
                                        <li data-id={submenu.submenu_id} key={submenu.submenu_id}
                                            className='py-3 px-4 hover:bg-background transition-colors hover:text-title cursor-pointer'>
                                            {submenu.title}
                                        </li>))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='inline-flex items-center gap-3 mt-5'>
                {
                    menuLinkId ? (
                        <>
                            <PrimaryButton clickEvent={() => editMenuLink()} icon='#check'
                                           title='بروزرسانی'></PrimaryButton>
                            <PrimaryButton className='bg-red-500' clickEvent={() => window.history.back()}
                                           icon='#x-mark' title='بازگشت'></PrimaryButton>
                        </>
                    ) : (
                        <PrimaryButton clickEvent={() => addNewMenuLink()} icon='#check'
                                       title='ثبت لینک جدید'></PrimaryButton>
                    )
                }
            </div>
        </div>
    )
}
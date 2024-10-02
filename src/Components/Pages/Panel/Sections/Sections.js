import SubTitle from "../../../Titles/SubTitle";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import supabase from "../../../../database";
import {getSections, MySwal} from "../../../../Utils";

export default function Sections() {

    const [sections, setSections] = useState([])
    const [getData, setGetData] = useState(false)
    useEffect(() => {
        getAllSections()
    }, [getData]);

    async function getAllSections() {
        const data = await getSections()
        setSections(data)
    }

    async function removeSectionHandler(sectionId) {
        MySwal.fire({
            title: 'از حذف سرفصل اطمینان دارید ؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        })
            .then(async res => {
                if(res.isConfirmed) {
                    const response = await supabase.from('sections').delete().eq('section_id', sectionId)
                    if(response.status === 204) {
                        MySwal.fire({
                            title: 'سرفصل با موفقیت حذف شد',
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
                                توضیحات
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
                            sections.map((section, index) => (
                                <tr key={section.section_id}
                                    className='text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-2'>
                                    <td className='text-title font-YekanBakh-Black'>
                                        {
                                            index + 1
                                        }
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        {
                                            section.title
                                        }
                                    </td>
                                    <td className='font-YekanBakh-SemiBold'>
                                        {
                                            section.description
                                        }
                                    </td>
                                    <td>
                                        <div className='flex items-center justify-center text-primary'>
                                            <Link to={`../section-form/${section.section_id}`}
                                                  className='cursor-pointer'>
                                                <svg className='w-5 h-5'>
                                                    <use href='#edit'></use>
                                                </svg>
                                            </Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex items-center justify-center text-red-500'>
                                            <span onClick={() => removeSectionHandler(section.section_id)} className='cursor-pointer'>
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
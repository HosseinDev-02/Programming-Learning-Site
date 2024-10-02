import SubTitle from "../../../Titles/SubTitle";
import PrimaryButton from "../../../Buttons/PrimaryButton";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import supabase from "../../../../database";
import {getSections, MySwal} from "../../../../Utils";

export default function SectionForm() {

    const params = useParams()
    const sectionId = params.id

    const [sectionTitle, setSectionTitle] = useState('')
    const [sectionDescription, setSectionDescription] = useState('')

    useEffect(() => {
        if(sectionId) {
            getMainSection()
        }
    }, []);

    async function addNewSection() {
        let newSection = {
            title: sectionTitle,
            description: sectionDescription
        }
        const response = await supabase.from('sections').insert(newSection)
        if (response.status === 201) {
            MySwal.fire({
                title: 'سرفصل با موفقیت ثبت شد',
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

    async function editSectionHandler() {
        const response = await supabase.from('sections')
            .update({
                title: sectionTitle,
                description: sectionDescription
            })
            .eq('section_id', sectionId)
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

    async function getMainSection() {
        const response = await getSections()
        let mainSection = response.find(section => section.section_id === sectionId)
        setSectionTitle(mainSection.title)
        setSectionDescription(mainSection.description)
    }

    function clearStates() {
        setSectionTitle('')
        setSectionDescription('')
    }

    return (
        <div className='w-full h-full'>
            <div className='h-20 flex items-center'>
                {
                    sectionId ? (
                        <SubTitle fontSize='24px' title='ویرایش سرفصل ها'></SubTitle>
                    ) : (
                        <SubTitle fontSize='24px' title='افزودن سرفصل'></SubTitle>
                    )
                }
            </div>
            <div className='flex flex-col gap-5 pt-10'>
                <div
                    className='flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start md:items-center lg:items-start justify-between gap-5'>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            عنوان سرفصل
                        </label>
                        <input value={sectionTitle} onChange={(event) => setSectionTitle(event.target.value)}
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                           توضیحات سرفصل
                        </label>
                        <textarea value={sectionDescription} onChange={(event) => setSectionDescription(event.target.value)}
                            className='bg-background rounded-xl border border-border text-title outline-none overflow-hidden p-3 w-full'
                            rows="5"></textarea>
                    </div>
                </div>
            </div>
            <div className='inline-flex items-center gap-3 mt-5'>
                {
                    sectionId ? (
                        <>
                            <PrimaryButton clickEvent={() => editSectionHandler()} icon='#check' title='بروزرسانی'></PrimaryButton>
                            <PrimaryButton className='bg-red-500' clickEvent={() => window.history.back()}
                                           icon='#x-mark' title='بازگشت'></PrimaryButton>
                        </>
                    ) : (
                        <PrimaryButton clickEvent={() => addNewSection()} icon='#check' title='ثبت سرفصل جدید'></PrimaryButton>
                    )
                }
            </div>
        </div>
    )
}
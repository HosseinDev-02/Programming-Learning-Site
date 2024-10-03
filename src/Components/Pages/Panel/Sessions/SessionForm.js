import SubTitle from "../../../Titles/SubTitle";
import PrimaryButton from "../../../Buttons/PrimaryButton";
import {useParams} from "react-router-dom";

export default function SessionForm() {

    const params = useParams()
    const sessionId = params.id

    return (
        <div className='w-full h-full'>
            <div className='h-20 flex items-center'>
                {
                    sessionId ? (
                        <SubTitle fontSize='24px' title='ویرایش جلسه'></SubTitle>
                    ) : (
                        <SubTitle fontSize='24px' title='افزودن جلسه'></SubTitle>
                    )
                }
            </div>
            <div className='flex flex-col gap-5 pt-10'>
                <div
                    className='flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start md:items-center lg:items-start justify-between gap-5'>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            عنوان جلسه
                        </label>
                        <input
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                    <div className='flex flex-col gap-2 items-start w-full sm:w-1/3 md:w-full lg:w-1/3'>
                        <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                            تایم جلسه
                        </label>
                        <input
                            className='bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                            type="text"/>
                    </div>
                </div>
            </div>
            <div className='inline-flex items-center gap-3 mt-5'>
                {
                    sessionId ? (
                        <>
                            <PrimaryButton icon='#check' title='بروزرسانی'></PrimaryButton>
                            <PrimaryButton className='bg-red-500' clickEvent={() => window.history.back()}
                                           icon='#x-mark' title='بازگشت'></PrimaryButton>
                        </>
                    ) : (
                        <PrimaryButton icon='#check' title='ثبت جلسه جدید'></PrimaryButton>
                    )
                }
            </div>
        </div>
    )
}
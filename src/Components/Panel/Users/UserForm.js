export default function UserForm () {
    return (
        <div>
            <form className='grid grid-cols-12 gap-5' action="#">
                <div className='sm:col-span-3 flex flex-col gap-2 items-start'>
                    <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                        نام
                    </label>
                    <input
                        className='bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                        type="text"/>
                </div>
                <div className='sm:col-span-3 flex flex-col gap-2 items-start'>
                    <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                        نام خانوادگی
                    </label>
                    <input
                        className='bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                        type="text"/>
                </div>
                <div className='sm:col-span-3 flex flex-col gap-2 items-start'>
                    <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                        شماره تماس
                    </label>
                    <input
                        className='bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                        type="text"/>
                </div>
                <div className='sm:col-span-3 flex flex-col gap-2 items-start'>
                    <label className='text-xs font-YekanBakh-SemiBold' htmlFor="#">
                        ایمیل
                    </label>
                    <input
                        className='bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title'
                        type="text"/>
                </div>
            </form>

        </div>
    )
}
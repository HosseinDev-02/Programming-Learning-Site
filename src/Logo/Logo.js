export default function Logo() {
    return (<a className='flex items-center gap-2' href='#'>
            <svg className='w-6 h-6 text-primary'>
                <use href='#logo'></use>
            </svg>
            <span className='flex items-start flex-col'>
                <span className='text-sm font-semibold'>آکــــادمـــی</span>
                <span className='text-primary text-xl font-black font-YekanBakh-ExtraBold'>نـــابــــغه</span>
            </span>
        </a>)
}
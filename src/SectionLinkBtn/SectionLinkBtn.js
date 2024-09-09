export default function SectionLinkBtn() {
    return (
        <a className='flex items-center justify-center gap-1 text-title dark:text-white font-YekanBakh-SemiBold text-sm bg-zinc-100 dark:bg-mirage rounded-full w-11 sm:w-auto sm:px-4 h-11 hover:text-primary dark:hover:text-primary transition-colors' href="#">
            <span className='hidden sm:inline-block'>
                مشاهده همه
            </span>
            <span>
                <svg className='w-5 h-5'>
                    <use href="#arrow-up-left"></use>
                </svg>
            </span>
        </a>
    )
}
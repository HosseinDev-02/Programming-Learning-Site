export default function SectionTitle() {
    return (
        <div className='flex items-center gap-2.5 sm:gap-5'>
            <span className='flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white'>
                <svg className='w-5 h-5'>
                    <use href='#education'></use>
                </svg>
            </span>
            <div>
                <h2 className='font-YekanBakh-ExtraBold text-lg sm:text-2xl text-primary'>
                    آخرین دوره های
                </h2>
                <span className='text-title dark:text-white text-sm sm:text-base inline-block mt-2 font-semibold tracking-wider'>
                    منتشر شده
                </span>
            </div>
        </div>
    )
}
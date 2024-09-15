function HeaderBtn({icon, clickEvent, id, count}) {
    return (
        count
            ?
            <a className='flex items-center justify-center rounded-full bg-secondary dark:text-white w-10 h-10 relative'
               href="#">
                <svg className='w-5 h-5'>
                    <use href={icon}></use>
                </svg>
                <span
                    className='absolute -left-1 -top-1 bg-primary flex items-center justify-center rounded-full w-5 h-5 font-YekanBakh-SemiBold text-xs text-white'>{count}</span>
                <span className='animate-ping absolute -left-1 -top-1 bg-primary w-5 h-5 rounded-full'></span>
            </a>
            :
            icon === '#user'
                ?
                <a onClick={clickEvent} id={id}
                   className='flex items-center justify-center rounded-full bg-secondary dark:text-white w-10 h-10'
                   href='#'>
                    <svg className='w-5 h-5'>
                        <use href={icon}></use>
                    </svg>
                </a>
                :
                icon === '#bars-3'
                    ?
                    <span onClick={clickEvent}
                          className='flex lg:hidden items-center justify-center rounded-full bg-secondary dark:text-white w-10 h-10'>
                            <svg className='w-6 h-6'>
                                <use href={icon}></use>
                            </svg>
                        </span>
                    :
                    <a onClick={clickEvent} id={id}
                       className='hidden lg:flex items-center justify-center rounded-full bg-secondary dark:text-white w-10 h-10'
                       href='#'>
                        <svg className='w-5 h-5'>
                            <use href={icon}></use>
                        </svg>
                    </a>
    )
}

export default HeaderBtn
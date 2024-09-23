function HeaderBtn(props) {
    return (
        props.count ? (
            <a className='flex items-center justify-center rounded-full bg-secondary text-title w-10 h-10 relative'
               href={props.href}>
                <svg className='w-5 h-5'>
                    <use href={props.icon}></use>
                </svg>
                <span
                    className='absolute -left-1 -top-1 bg-primary flex items-center justify-center rounded-full w-5 h-5 font-YekanBakh-SemiBold text-white text-xs'>{props.count}</span>
                <span className='animate-ping absolute -left-1 -top-1 bg-primary w-5 h-5 rounded-full'></span>
            </a>
        ) : (
            <span onClick={props.clickEvent}
                  style={props.clickEvent ? {cursor: 'pointer'} : {}}
                  className='flex lg:hidden items-center justify-center rounded-full bg-secondary text-title w-10 h-10'>
                <svg className='w-6 h-6'>
                    <use href={props.icon}></use>
                </svg>
            </span>
        )
    )
}

export default HeaderBtn
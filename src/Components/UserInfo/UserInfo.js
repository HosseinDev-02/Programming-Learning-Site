export default function UserInfo(props) {
    return (
        <div className='flex items-center gap-3'>
            <span className='block overflow-hidden w-10 h-10 rounded-full shrink-0'>
                <img className='w-full h-full object-cover' src='images/profile.jpeg' alt=""/>
            </span>
            <div className='flex flex-col gap-1 text-xs font-YekanBakh-SemiBold'>
                <a href='#' className='text-title line-clamp-1 font-YekanBakh-Bold text-sm'>
                    {props.title}
                </a>
                <a href='#' className='line-clamp-1 text-xs text-primary'>
                    {props.text}
                </a>
            </div>
        </div>
    )
}
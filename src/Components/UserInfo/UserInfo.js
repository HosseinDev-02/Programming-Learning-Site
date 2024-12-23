export default function UserInfo(props) {
    return (
        <div className='flex items-center gap-2'>
            <span className='block overflow-hidden w-10 h-10 rounded-full shrink-0'>
                <img className='w-full h-full object-cover' src={props.img ? props.img : '/images/profile.jpeg'} alt=""/>
            </span>
            <div className='flex flex-col gap-1 text-xs font-YekanBakh-SemiBold'>
                {
                    props.title && (
                        <span className='line-clamp-1 text-xs'>
                    {props.title}
                </span>
                    )
                }
                <a href='#' className='text-title hover:text-primary transition-colors font-YekanBakh-Bold line-clamp-1 text-xs'>
                    {props.text}
                </a>
            </div>
        </div>
    )
}
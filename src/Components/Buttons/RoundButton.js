import { Link } from "react-router-dom";

export default function RoundButton({link, className, href, icon, count, clickEvent}) {
    return (
        link ? (
            <Link className={`flex items-center justify-center rounded-full bg-secondary text-title w-10 h-10 relative ${className}`}
               to={href}>
                <svg className='w-5 h-5'>
                    <use href={icon}></use>
                </svg>
                {
                    count && (
                        <>
                        <span
                            className='absolute -left-1 -top-1 bg-primary flex items-center justify-center rounded-full w-5 h-5 font-YekanBakh-SemiBold text-white text-xs'>{count}</span>
                            <span className='animate-ping absolute -left-1 -top-1 bg-primary w-5 h-5 rounded-full'></span>
                        </>
                    )
                }
            </Link>
        ) : (
            <span onClick={clickEvent} className={`flex items-center justify-center rounded-full bg-secondary text-title w-10 h-10 ${className}`}>
                <svg className='w-5 h-5'>
                    <use href={icon}></use>
                </svg>
            </span>
        )
    )
}
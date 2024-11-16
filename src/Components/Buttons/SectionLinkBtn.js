import { Link } from "react-router-dom";

export default function SectionLinkBtn(props) {
    return (
        <Link className={`flex items-center justify-center text-title gap-1 bg-secondary rounded-full w-11 text-sm sm:w-auto sm:px-4 h-11 hover:text-primary transition-colors shrink-0 ${props.className}`}
           to={props.href ? props.href : '#'}>
            <span className='hidden sm:inline-block font-YekanBakh-SemiBold'>
                {props.text}
            </span>
            <span>
                <svg className='w-5 h-5'>
                    <use href={props.icon}></use>
                </svg>
            </span>
        </Link>
    )
}
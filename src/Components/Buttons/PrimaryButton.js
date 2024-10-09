import {Link} from "react-router-dom";

export default function PrimaryButton(props) {
    return (
        <a href={props.href ? props.href : '#'} onClick={props.clickEvent} className={`flex sm:inline-flex items-center justify-center gap-2 bg-primary rounded-full text-white h-11 transition-opacity hover:opacity-80 font-YekanBakh-SemiBold text-sm px-4 flex-grow ${props.className}`}>
            <span>
                {
                    props.title
                }
            </span>
            {
                props.icon && (
                    <span>
                <svg className='w-5 h-5'>
                    <use href={props.icon}></use>
                </svg>
            </span>
                )
            }
        </a>
    )
}
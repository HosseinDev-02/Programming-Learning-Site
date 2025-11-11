import { Link } from "react-router-dom";

export default function PrimaryButton({title, href, icon, className, clickEvent}) {
    return (
        <Link
            to={href ? href : "#"}
            onClick={clickEvent}
            className={`flex sm:inline-flex items-center justify-center gap-2 bg-primary rounded-full text-white h-11 transition-opacity hover:opacity-80 font-YekanBakh-SemiBold text-xs xl:text-sm px-4 flex-grow ${className}`}
        >
            <span>{title}</span>
            {icon && (
                <span>
                    <svg className="w-5 h-5">
                        <use href={icon}></use>
                    </svg>
                </span>
            )}
        </Link>
    );
}

import { useEffect, useState } from "react";

export default function Accordion({
    title,
    className,
    classNameWrapper,
    children,
    icon
}) {
    const [modalShow, setModalShow] = useState(false);

    const clickHandler = () => {
        setModalShow((prevState) => !prevState);
    };

    return (
        <div
            className={`py-2 ${classNameWrapper} relative`}
        >
            <button
                onClick={() => clickHandler()}
                type="button"
                className={`text-sm font-YekanBakh-SemiBold text-title transition-colors flex items-center justify-between bg-secondary rounded-xl overflow-hidden h-11 w-full px-3 min-w-[200px] ${
                    modalShow ? "!text-primary" : ""
                } ${className}`}
            >
                <div className="flex items-center gap-2">
                    {icon && (
                        <span>
                            <svg className="w-5 h-5">
                                <use href={icon}></use>
                            </svg>
                        </span>
                    )}
                    <span>{title}</span>
                </div>
                <span>
                    <svg
                        className={`w-5 h-5 transition-all ${
                            modalShow ? "rotate-180" : ""
                        }`}
                    >
                        <use href="#chevron-down"></use>
                    </svg>
                </span>
            </button>
            <div className={`${modalShow ? "block" : "hidden"}`}>
                {children}
            </div>
        </div>
    );
}

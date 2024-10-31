import { useState } from "react";

export default function Accordion({title, className, classNameWrapper, items, itemSelectionHandler, modalBg, value, position}) {

    const [modalShow, setModalShow] = useState(false)

    const modalShowHandler = () => {
        setModalShow(prevState => !prevState)
    }

    return (
        <div className={`py-3 space-y-2 ${classNameWrapper} relative max-w-[295px] w-full`}>
            <button
                onClick={() => modalShowHandler()}
                type="button"
                className={`text-sm font-YekanBakh-SemiBold text-title flex items-center justify-between bg-secondary rounded-xl overflow-hidden h-11 w-full px-3 ${modalShow ? '!text-primary' : ''} ${className}`}
            >
                <div className="flex items-center gap-2">
                    <span>
                        <svg className="w-5 h-5">
                            <use href="#grid-boxes-outline"></use>
                        </svg>
                    </span>
                    <span>{title}</span>
                </div>
                <span>
                    <svg
                        className={`w-5 h-5 transition-all ${modalShow ? 'rotate-180' : ''}`}
                    >
                        <use href="#chevron-down"></use>
                    </svg>
                </span>
            </button>
            <div
                className={`p-3 rounded-xl overflow-hidden bg-secondary space-y-2 ${modalShow ? 'block' : 'hidden'} left-0 right-0 top-full z-50 ${position ? position : ''}`}
            >
                {items.map((item) => (
                    <label
                        key={item.id}
                        className={`flex items-center gap-3 text-sm cursor-pointer ${item.title === value ? 'text-primary' : ''}`}
                    >
                        <input
                            value={item.title}
                            onChange={(event) => itemSelectionHandler(event)}
                            className="bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]"
                            type="radio"
                            name="category"
                            checked={item.title === value}
                        />
                        <span>{item.title}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

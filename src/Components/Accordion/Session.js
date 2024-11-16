import React, { useState } from "react";

function Session({ sessionTitle, sessionIndex, children }) {
    const [showBody, setShowBody] = useState(false);

    return (
        <div>
            <button
                onClick={() => setShowBody((prevState) => !prevState)}
                className={`flex items-center justify-between w-full px-5 h-14 rounded-3xl bg-secondary text-xs font-YekanBakh-SemiBold hover:text-title transition-colors ${showBody && 'text-title'}`}
            >
                <div className="flex items-center gap-6">
                    <span className="text-title">{sessionIndex}</span>
                    <span>{sessionTitle}</span>
                </div>
                <span>
                    <svg className={`w-5 h-5 ${showBody && "rotate-180"}`}>
                        <use href="#chevron-down"></use>
                    </svg>
                </span>
            </button>
            <div className={`py-3 mx-8 ${showBody ? "block" : "hidden"}`}>
                <ul className="flex flex-col gap-1">{children}</ul>
            </div>
        </div>
    );
}

export default Session;

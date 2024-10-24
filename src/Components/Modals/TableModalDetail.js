import React from "react";

function TableModalDetail({ children, title, closeDetailModalHandler }) {
    return (
        <div>
            <div className="fixed flex inset-0 items-center justify-center gap-2 flex-col bg-black/30">
                <span
                    className="flex items-center justify-center bg-secondary w-10 h-10 rounded-full"
                    onClick={closeDetailModalHandler}
                >
                    <svg className="w-5 h-5">
                        <use href="#x-mark-mini"></use>
                    </svg>
                </span>
                <div className="flex flex-col p-4 rounded-md bg-secondary relative max-w-64 w-full">
                    <h3 className="font-YekanBakh-Black text-title text-lg pb-2 text-center">
                        {title}
                    </h3>
                    <div className="flex flex-col divide-y divide-border">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableModalDetail;

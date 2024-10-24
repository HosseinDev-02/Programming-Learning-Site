import React from "react";
import RoundButton from "../Buttons/RoundButton";

function TableModalDetail({ children, title, closeDetailModalHandler }) {
    return (
        <div>
            <div className="fixed flex inset-0 items-center justify-center gap-2 flex-col bg-black/30">
            <RoundButton icon='#x-mark-mini' clickEvent={closeDetailModalHandler}></RoundButton>
                <div className="flex flex-col p-4 rounded-md bg-secondary relative max-w-64 w-full text-wrap max-h-screen overflow-y-auto">
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

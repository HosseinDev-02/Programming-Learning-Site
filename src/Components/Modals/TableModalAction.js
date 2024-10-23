import React from "react";
import { Link } from "react-router-dom";
function TableModalAction({userId, setSelectedUserAction, selectedUserAction, removeUserHandler, setShowDetailModal}) {
    return (
        <div
            className={`fixed items-center justify-center inset-0 bg-black/30 transition-all ${
                selectedUserAction === userId ? "flex" : "hidden"
            }`}
        >
            <div className="max-w-64 w-full flex gap-2 flex-col items-center">
                <span
                    onClick={() => setSelectedUserAction("")}
                    className={`flex items-center justify-center rounded-full bg-secondary text-title w-10 h-10`}
                >
                    <svg className="w-5 h-5">
                        <use href="#x-mark-mini"></use>
                    </svg>
                </span>
                <ul className="flex flex-col divide-y divide-white/20 gap-1 w-full rounded-xl overflow-hidden bg-secondary p-2">
                    <li className="py-2 px-2 text-primary">
                        <Link
                            className="flex items-center gap-1"
                            to={`../user-form/${userId}`}
                        >
                            <span>
                                <svg className="w-4 h-4">
                                    <use href="#pencil-mini"></use>
                                </svg>
                            </span>
                            <span className="text-sm font-YekanBakh-SemiBold">
                                ویرایش
                            </span>
                        </Link>
                    </li>
                    <li className="py-2 px-2 text-red-500">
                        <span
                            onClick={() => removeUserHandler(userId)}
                            className="flex items-center gap-1"
                        >
                            <span>
                                <svg className="w-4 h-4">
                                    <use href="#trash-mini"></use>
                                </svg>
                            </span>
                            <span className="text-sm font-YekanBakh-SemiBold">
                                حذف
                            </span>
                        </span>
                    </li>
                    <li className="py-2 px-2 text-black">
                        <span
                            onClick={() => setShowDetailModal(true)}
                            className="flex items-center gap-1"
                        >
                            <span>
                                <svg className="w-4 h-4">
                                    <use href="#clipboard-mini"></use>
                                </svg>
                            </span>
                            <span className="text-sm font-YekanBakh-SemiBold">
                                جزئیات
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TableModalAction;

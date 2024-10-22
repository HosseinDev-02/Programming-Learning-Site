import {createPortal} from "react-dom";
import React from "react";
import {Link} from "react-router-dom";

export default function TableModalActions({editLink, removeHandler, showDetails}) {
    return createPortal(
        <>
            <div className='fixed flex items-center justify-center inset-0'>
                <ul className='flex flex-col gap-2 max-w-64 w-full rounded-xl bg-primary p-4'>
                    <li className='py-2 px-2 rounded-xl bg-secondary'>
                        <Link className='flex items-center gap-1' to={editLink}>
                        <span>
                            <svg className='w-4 h-4'>
                                <use href='#pencil-mini'></use>
                            </svg>
                        </span>
                            <span className='text-sm font-YekanBakh-SemiBold'>ویرایش</span>
                        </Link>
                    </li>
                    <li className='py-2 px-2 rounded-xl bg-secondary'>
                        <span onClick={() => removeHandler} className='flex items-center gap-1'>
                        <span>
                            <svg className='w-4 h-4'>
                                <use href='#trash-mini'></use>
                            </svg>
                        </span>
                            <span className='text-sm font-YekanBakh-SemiBold'>حذف</span>
                        </span>
                    </li>
                    <li className='py-2 px-2 rounded-xl bg-secondary'>
                        <span onClick={() => showDetails} className='flex items-center gap-1'>
                        <span>
                            <svg className='w-4 h-4'>
                                <use href='#clipboard-mini'></use>
                            </svg>
                        </span>
                            <span className='text-sm font-YekanBakh-SemiBold'>جزئیات</span>
                        </span>
                    </li>
                </ul>
            </div>
        </>,
        document.getElementById('modals-wrapper')
    )
}
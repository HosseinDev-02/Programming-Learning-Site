import {createPortal} from "react-dom";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import RoundButton from "../Buttons/RoundButton";

export default function TableModalActions({editHandler, userModalShow, setUserModalShow, showDetails, children}) {

    return createPortal(
        <>
            {/*  Main Modal  */}

            <div className={`fixed flex items-center justify-center inset-0 bg-black/30 transition-all invisible opacity-0 ${userModalShow ? '!visible !opacity-100' : ''}`}>
                <div className='max-w-64 w-full flex gap-2 flex-col items-center'>
                    <RoundButton clickEvent={() => setUserModalShow(false)} icon='#x-mark-mini'></RoundButton>
                    <ul className='flex flex-col divide-y divide-white/20 gap-1 w-full rounded-xl overflow-hidden bg-secondary p-2'>
                        <li className='py-2 px-2 text-primary'>
                            <Link className='flex items-center gap-1' to={editHandler}>
                        <span>
                            <svg className='w-4 h-4'>
                                <use href='#pencil-mini'></use>
                            </svg>
                        </span>
                                <span className='text-sm font-YekanBakh-SemiBold'>ویرایش</span>
                            </Link>
                        </li>
                        <li className='py-2 px-2 text-red-500'>
                        <span className='flex items-center gap-1'>
                        <span>
                            <svg className='w-4 h-4'>
                                <use href='#trash-mini'></use>
                            </svg>
                        </span>
                            <span className='text-sm font-YekanBakh-SemiBold'>حذف</span>
                        </span>
                        </li>
                        <li className='py-2 px-2 text-black'>
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
            </div>

            {/*  Detail Modal  */}

            {children}
        </>,
        document.getElementById('modals-wrapper')
    )
}
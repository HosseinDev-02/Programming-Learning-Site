import React, { useState } from "react";
import { createPortal } from "react-dom";

export default function Cover({ clickHandler, isShow }) {
    return (
        <div>
            {createPortal(
                <div
                    onClick={clickHandler}
                    className={`fixed bg-secondary/80 inset-0 h-screen w-screen transition-all ${
                        !isShow ? "invisible opacity-0" : "visible opacity-100 z-10"
                    }`}
                ></div>,
                document.querySelector('body')
            )}
        </div>
    );
}

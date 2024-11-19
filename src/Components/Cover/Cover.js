import React, { useState } from "react";
import { createPortal } from "react-dom";

export default function Cover({ setElemStatus }) {

    const coverShowHandler = () => {
        setElemStatus(prevState => !prevState)
    }

    return (
        <div
            onClick={coverShowHandler}
            className='fixed inset-0 bg-secondary/80 z-40 transition-al'
        ></div>
    );
}

import React, { useReducer } from "react";

const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE": {
            return {
                ...state,
                value: action.value,
            };
        }
        default: {
            return state;
        }
    }
};

export default function Input(props) {
    const [mainInput, dispatch] = useReducer(inputReducer, {
        value: "",
    });

    const onChangeHandler = (event) => {
        dispatch({
            value: event.target.value,
            type: "CHANGE",
        });
    };

    const element =
        props.element === "input" ? (
            <input
                type={props.type}
                placeholder={props.placeholder}
                className={props.className}
                onChange={onChangeHandler}
                value={mainInput.value}
                dir={props.dir}
            />
        ) : (
            <textarea
                className={props.className}
                placeholder={props.placeholder}
                onChange={onChangeHandler}
                value={mainInput.value}
            ></textarea>
        );
    return (
        <div className="w-full">
            {props.label ? (
                <div className="flex flex-col gap-2 items-start w-full">
                    <label className="text-xs font-YekanBakh-SemiBold">
                        {props.labelTitle}
                    </label>
                    {element}
                </div>
            ) : (
                <div>{element}</div>
            )}
        </div>
    );
}

import React from "react";
import s from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={s.input_container}>
            <div className={s.text}>{props.text}</div>
            <input ref={ref} type="text" className={s.input} value={props.value} />
        </div>
    )
})

export default Input
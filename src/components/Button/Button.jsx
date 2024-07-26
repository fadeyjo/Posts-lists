import s from "./Button.module.css";

export default function Button({children, onClick}) {
    return (
        <button onClick={onClick} className={s.my_button}>
            {children}
        </button>
    )
}
import s from "./ModalWindow.module.css";
import { IoMdClose } from "react-icons/io";

export default function ModalWindow({children, opened, setOpened}) {
    return (
        <div className={opened ? [s.modal, s.open].join(' ') : s.modal} onClick={() => setOpened(false)}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.close}>
                    <IoMdClose onClick={() => setOpened(false)} />
                </div>
                {children}
            </div>
        </div>
    )
}
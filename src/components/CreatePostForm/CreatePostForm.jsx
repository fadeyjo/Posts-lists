import { useRef } from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import s from "./CreatePostForm.module.css"
    
export default function CreatePostForm({createPost}) {
    const titleRef = useRef()
    const bodyRef = useRef()

    return (
        <div>
            <h1 className={s.header}>Create post</h1>
            <form className={s.create_post_form}>
                <Input text="Title:" ref={titleRef} />
                <Input text="Body:" ref={bodyRef} />
                <Button onClick={(e) => {
                    e.preventDefault()
                    createPost({
                        title: titleRef.current.value,
                        body: bodyRef.current.value
                    })
                    titleRef.current.value = ""
                    bodyRef.current.value = ""
                }}>Create</Button>
            </form>
        </div>
    )
}
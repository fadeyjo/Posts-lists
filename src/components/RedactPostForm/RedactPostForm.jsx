import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import { useRef, useEffect } from "react";

export default function RedactPostForm({post, redact, setRedact, editPost, redact_post_form}) {
    const titleRef = useRef()
    const bodyRef = useRef()

    useEffect(() => {
        titleRef.current.value = post.title
        bodyRef.current.value = post.body
    })

    return (
        <form className={redact}>
            <Input text="Title" ref={titleRef} />
            <Input text="Body" ref={bodyRef} />
            <Button onClick={(e) => {
                e.preventDefault()
                editPost({
                    id: post.id,
                    title: titleRef.current.value,
                    body: bodyRef.current.value
                })
                setRedact(redact_post_form)
            }}>Edit</Button>
            <Button onClick={(e) => {
                e.preventDefault()
                setRedact(redact_post_form)
            }}>Close</Button>
        </form>
    )
}
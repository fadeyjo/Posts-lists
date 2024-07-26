import Button from "../Button/Button";
import RedactPostForm from "../RedactPostForm/RedactPostForm";
import s from "./Post.module.css";
import { useState } from "react";

export default function Post({post, deletePost, editPost}) {
    const [redact, setRedact] = useState(s.redact_post_form)

    return (
        <div className={s.container}>
            <div className={s.post}>
                <div>
                    <h1>{post.title}</h1>
                    <span>{post.body}</span>
                </div>
                <div className={s.button_container}>
                    <Button onClick={() => deletePost(post.id)}>Delete</Button>
                    <Button onClick={() => setRedact(redact === s.redact_post_form ? [s.redact_post_form, s.active].join(' ') : s.redact_post_form)}>Redact</Button>
                </div>
            </div>
            <RedactPostForm post={post}
                            redact={redact}
                            setRedact={setRedact}
                            editPost={editPost}
                            redact_post_form={s.redact_post_form} />
        </div>
    )
}
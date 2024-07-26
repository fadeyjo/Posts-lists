import Post from "../Post/Post.jsx";
import s from "./PostList.module.css";

export default function PostList({posts, deletePost, editPost}) {
    if (!posts.length) {
        return (
            <h1 className={s.empty_posts_list}>Posts list is empty!!!</h1>
        )
    }
    return (
        <div className={s.post_list}>
            {posts.map((post) => (
                <Post post={post} deletePost={deletePost} editPost={editPost} key={post.id} />
            ))}
        </div>
    )
}
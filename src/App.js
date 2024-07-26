import React, { useMemo, useRef, useState } from "react";
import PostList from "./components/PostList/PostList.jsx";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm.jsx";
import ModalWindow from "./components/ModalWindow/ModalWindow.jsx";
import Button from "./components/Button/Button.jsx";
import SortTools from "./components/SortTools/SortTools.jsx";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "Learning JavaScript"
    },
    {
      id: 2,
      title: "TypeScript",
      body: "Learning TypeScript"
    },
  ])

  const [opened, setOpened] = useState(false)

  const [reversed, setReversed] = useState(false)

  const [typeSort, setTypeSort] = useState("By id")

  const newPostId = useMemo(() => {
    let exist = false
    for (let i = 1; i <= posts.length; i++) {
      exist = false
      for (let j = 0; j < posts.length; j++) {
        if (posts[j].id === i) {
          exist = true
          break
        }
      }
      if (!exist) {
        return i
      }
    }
    return posts.length + 1
  }, [posts])

  function createPost(post) {
    post.id = newPostId
    setPosts([...posts, post])
  }

  function deletePost(postId) {
    setPosts(posts.filter((post) => post.id !== postId))
  }

  function editPost(newPost) {
    setPosts([...posts.filter((post) => post.id !== newPost.id), newPost])
  }

  const sortedPosts = useMemo(() => {
    if (typeSort === "By id") {
      if (reversed) {
        return [...posts].sort((a, b) => b.id - a.id)
      }
      return [...posts].sort((a, b) => a.id - b.id)
    }
    if (typeSort === "By title") {
      if (reversed) {
        return ([...posts].sort((a, b) => a.title.localeCompare(b.title))).reverse() 
      }
      return [...posts].sort((a, b) => a.title.localeCompare(b.title))
    }
    if (reversed) {
      return ([...posts].sort((a, b) => a.body.localeCompare(b.body))).reverse() 
    }
    return [...posts].sort((a, b) => a.body.localeCompare(b.body))
  }, [posts, typeSort, reversed])

  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "70px",
        alignItems: "center"
      }}>
        <Button onClick={() => setOpened(true)}>Create post</Button>
      </div>
      <SortTools setReversed={setReversed} setTypeSort={setTypeSort} />
      <PostList posts={sortedPosts} deletePost={deletePost} editPost={editPost} />
      <ModalWindow opened={opened} setOpened={setOpened}><CreatePostForm createPost={createPost} /></ModalWindow>
    </div>
  );
}

export default App;

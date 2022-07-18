import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <p>New Post</p>
            <textarea></textarea>
            <button>Create</button>
            <p>My Posts</p>
            <Post/>
        </div>
    );
};

export default MyPosts;
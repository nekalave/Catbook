import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElement = props.postsData.map(p => <Post data={p.data} likesCount={p.likesCount}/>);

    return (
        <div className={s.myPosts}>
            <h3>New Post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <h3>My Posts</h3>
            {postElement}
        </div>
    );
};

export default MyPosts;
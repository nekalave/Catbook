import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
            <div className={s.item}>
                <img src='https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png'/>
                post 1
            </div>
    );
};

export default Post;
import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png'/>
            {props.data} <p><span>Likes:{props.likesCount}</span></p>
        </div>
    );
};

export default Post;
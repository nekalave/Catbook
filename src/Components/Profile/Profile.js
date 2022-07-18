import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Avatar from "./Avatar/Avatar";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
            </div>
            <Avatar/>
            <div>User info</div>
            <MyPosts/>

        </div>
    );
}

export default Profile;

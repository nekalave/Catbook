import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.background}>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
            </div>
            <div className={s.avatar}>
                <img src='https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png'/>
            </div>
            <div className={s.userInfo}>
                User Info
            </div>
        </div>
    );
};

export default ProfileInfo;
import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";

const DialogItem = (props, ) => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <NavLink to={path} className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;
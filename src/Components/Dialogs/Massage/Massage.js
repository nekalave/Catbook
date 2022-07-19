import s from "./Massage.module.css";
import React from "react";

const Massage = (props) => {
    return (
        <div className={s.massage}>{props.massage}</div>
    );
};

export default Massage;
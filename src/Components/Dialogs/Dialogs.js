import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Massage/Massage";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name="Lera"/>
                <DialogItem id='2' name="Dima"/>
                <DialogItem id='3' name="Nikita"/>
                <DialogItem id='4' name="Brook"/>
            </div>
            <div className={s.massages}>
                <Massage massage="hi" />
                <Massage massage="hihi" />
                <Massage massage="hihihi" />
            </div>
        </div>
    );
};

export default Dialogs;
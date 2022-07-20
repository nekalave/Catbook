import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Massage/Massage";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>));

    let massagesElement = props.state.massages.map(m => (<Massage massage={m.massage}/>));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.massages}>
                {massagesElement}
            </div>
        </div>
    );
};

export default Dialogs;
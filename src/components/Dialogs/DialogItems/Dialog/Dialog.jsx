import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import Messages from "../../Messages/Messages";
import React from "react";


function Dialog(props){
    debugger
    const path = `dialog/${props.id}`;
    const newTextMessage = React.createRef();

    let addMessageComponent = () => {
        props.addMessage(props.id, props.messageText);
    }

    let updateMessageTextComponent = () => {
        let text = newTextMessage.current.value;
        props.updateMessageText(props.id, text);
    }
    return(
        <div className={classes.dialogContainer}>
            <div className={classes.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
                <Messages messages={props.messages}/>
            </div>
            <div className={classes.messageTextContainer}>
                <button onClick={addMessageComponent}>Добавить</button>
                <textarea onChange={updateMessageTextComponent} ref={newTextMessage} value={props.messageText}/>
            </div>
        </div>
    )
}

export default Dialog
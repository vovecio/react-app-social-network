import classes from "./Message.module.css";
import React from 'react';

function Message(props) {
    const newTextMessage = React.createRef();
    return (
        <div className={classes.message}>
            <div className={classes.messageText} id={props.id}>{props.message}</div>
            <textarea ref={newTextMessage}></textarea>
        </div>
    )
}

export default Message
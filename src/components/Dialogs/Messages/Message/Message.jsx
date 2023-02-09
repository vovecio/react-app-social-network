import classes from "./Message.module.css";
import React from 'react';

function Message(props) {

    return (
        <div className={classes.messageContainer}>
            <div id={props.id}>{props.message}</div>

        </div>
    )
}

export default Message
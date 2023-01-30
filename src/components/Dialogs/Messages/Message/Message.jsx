import classes from "./Message.module.css";


function Message(props) {
    return (
        <div className={classes.message} id={props.id}>{props.message}</div>
    )
}

export default Message
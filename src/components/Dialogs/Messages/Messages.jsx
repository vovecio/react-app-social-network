import classes from "./Messages.module.css";
import Message from "./Message/Message";

function Messages(props) {

    return(
        <div className={classes.messagesContainer}>
            <div className={classes.messages}>
                {props.messages.map(x => <Message id={x.id} message={x.message}/>)}
            </div>
        </div>
    )
}
export default Messages
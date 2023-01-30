import classes from "./Messages.module.css";
import Message from "./Message/Message";


function Messages(props) {
    return(
        <div className={classes.messages}>
            {props.messages.map(x => <Message id={x.id} message={x.message}/>)}
        </div>
    )
}
export default Messages
import classes from "./DialogItems.module.css";
import Dialog from "./Dialog/Dialog";


function DialogItems(props) {

    return (
        <div className={classes.dialogsItems}>
            {props.dialogs.map(x =>
                <Dialog messageText={x.messageText} addMessage={props.addMessage} updateMessageText={props.updateMessageText} id={x.id} name={x.name}
                                 messages={x.messages}/>
            )}
        </div>
    )
}

export default DialogItems;

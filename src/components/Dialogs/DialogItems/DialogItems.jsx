import classes from "./DialogItems.module.css";
import Dialog from "./Dialog/Dialog";


function DialogItems(props) {

    return (
        <div className={classes.dialogsItems}>
            {props.dialogs.map(x =>
                <Dialog messageText={x.messageText} store={props.store} id={x.id} name={x.name} messages={x.messages}/>
            )}
        </div>
    )
}

export default DialogItems

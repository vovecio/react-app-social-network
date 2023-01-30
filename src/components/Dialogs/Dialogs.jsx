import classes from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
function Dialogs(props){

    return(
        <div className={classes.dialogs}>
            <DialogItems dialogs={props.dialogs}/>
            <Messages messages={props.messages}/>
        </div>

    )
}

export default Dialogs
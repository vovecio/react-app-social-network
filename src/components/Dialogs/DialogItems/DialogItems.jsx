import classes from "./DialogItems.module.css";
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";



function DialogItems(props) {

    return (
        <div className={classes.dialogsItems}>
            {props.dialogs.map(x => <Dialog id={x.id} name={x.name}/>)}
        </div>
    )
}

export default DialogItems

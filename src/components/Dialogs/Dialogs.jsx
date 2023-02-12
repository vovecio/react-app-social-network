import classes from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import React from "react";

function Dialogs(props){
    return(
        <div className={classes.dialogs}>
            <DialogItems store={props.store} dialogs={props.dialogs}/>
        </div>
    )
}

export default Dialogs
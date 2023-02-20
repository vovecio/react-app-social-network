import classes from './Dialogs.module.css'
import React from "react";
import DialogItemsContainer from "./DialogItems/DialogItemsContainer";

function Dialogs(props){
    return(
        <div className={classes.dialogs}>
            <DialogItemsContainer/>
        </div>
    )
}

export default Dialogs
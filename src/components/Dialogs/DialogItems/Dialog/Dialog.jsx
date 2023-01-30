import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";


function Dialog(props){
    const path = `dialog/${props.id}`
    return(
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog
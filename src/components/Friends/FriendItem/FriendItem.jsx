
import classes from './FriendItem.module.css'

function FriendItem(props){
    return(
        <div className={classes.item} id={props.id}>
            <div className={classes.avatar}>
                <img src={props.avatarUrl}/>
            </div>
            <div className={classes.friendInfo}>
                {props.name}
            </div>
        </div>
    )
}

export default FriendItem
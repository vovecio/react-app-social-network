import classes from './Friends.module.css'
import FriendItem from "./FriendItem/FriendItem";


function Friends(props) {

    return (<div className={classes.friends}>
        {props.friends.map(x => <FriendItem id={x.id}
                                            avatarUrl={x.avatarUrl}
                                            name={x.name}/>)}
    </div>)


}

export default Friends
import classes from './Post.module.css'

function Post(props) {
    return (
        <div id={props.id} className={classes.item}>
            <div className={classes.message}>
                {props.message}
            </div>
            <div className={classes.likes}>
                My likes count - {props.likesCount}
            </div>
        </div>
    )
}

export default Post
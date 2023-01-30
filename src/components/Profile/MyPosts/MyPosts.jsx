import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {

    return (
        <div className={classes.allPosts}>
            My posts
            {props.posts.map(x => <Post id={x.id} message={x.text} likesCount={x.likesCount}/>)}
        </div>
    )
}

export default MyPosts
import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts(props) {
    let newPostElement = React.createRef();
    let addPostComponent = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.allPosts}>
            My posts
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <button onClick={addPostComponent}>Add post</button>
            {props.posts.map(x => <Post id={x.id} message={x.text} likesCount={x.likesCount}/>)}
        </div>
    )
}
export default MyPosts
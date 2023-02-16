import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts(props) {
    let newPostElement = React.createRef();
    let addPostComponent = () => {
        props.store.dispatch({type: 'ADD-POST', newText: props.newPostText});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.store.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
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
import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts(props) {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    return (
        <div className={classes.allPosts}>
            My posts
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post</button>
            {props.posts.map(x => <Post id={x.id} message={x.text} likesCount={x.likesCount}/>)}
        </div>
    )
}


export default MyPosts
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts store={props.store} posts={props.profilePage.posts} newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Profile
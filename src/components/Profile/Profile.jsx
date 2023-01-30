import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile
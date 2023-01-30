import classes from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div className={classes.profileInfoWrapper}>
            <div className={classes.imageContainer}>
                <img src='https://www.pnp.ru/upload/entities/2021/04/19/18/article/detailPicture/7e/66/9f/55/23c871532e2289d5791561c8adda1a1a.jpg' />
            </div>
            <div className={classes.mainInfo}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo
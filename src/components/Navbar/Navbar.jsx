import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className={classes.nav}>
            {
                Object.values(props.data).map(x =>
                    <div  className={classes.item}>
                        <NavLink to={x.path} className={({ isActive }) => isActive ? classes.activeLink : ''}> {x.name}</NavLink>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar
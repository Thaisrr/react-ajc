import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Présentation</NavLink>
                </li>
                <li>
                    <NavLink to='/router'>Router</NavLink>
                </li>
                <li>
                    <NavLink to='/reactivite'>Réactivité</NavLink>
                </li>
                <li>
                    <NavLink to='/parent'>Parent</NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Navigation;
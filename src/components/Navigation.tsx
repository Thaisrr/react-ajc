import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';

const Navigation = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Présentation</NavLink>
                </li>
                <li>
                    <NavLink to={{
                        pathname: '/router/123',
                        search: 'name=JeanMichel'
                    }}>Router</NavLink>
                </li>
                <li>
                    <NavLink to='/reactivite'>Réactivité</NavLink>
                </li>
                <li>
                    <NavLink to='/parent'>Parent</NavLink>
                </li>
                <li>
                    <NavLink to='/hooks'>Hooks</NavLink>
                </li>
                <li>
                    <NavLink to='/form'>React Hook Form</NavLink>
                </li>
                <li>
                    <NavLink to='/store'>Les Stores</NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Navigation;
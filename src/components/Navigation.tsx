import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';
import {useAppSelector} from "../utils/hooks/useStore.ts";
import {cartLength} from "../store/CartSlice.ts";
import {useLogin} from "../utils/hooks/useLogin.ts";

const Navigation = () => {

    //const cart = useAppSelector(state => state.cart);
    const cart = useAppSelector(cartLength);
    const user = useAppSelector(state => state.user);
    const {logout} = useLogin();


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
                {!user ?
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                    :
                    <li>
                        <button onClick={() => logout()}>Logout</button>
                    </li>
                }

                <li>
                    Panier : {cart}
                </li>
            </ul>

        </nav>
    )
}

export default Navigation;
import {useAppDispatch, useAppSelector} from "../utils/hooks/useStore.ts";
import {addToCart} from "../store/CartSlice.ts";
import {useAlert} from "../utils/hooks/useAlert.ts";

const Store = () => {

    const cart = useAppSelector(state => state.cart);
    const products = ['Pantoufles', 'Chocolat', 'PS5', 'Plaid Moumoute'];
    const dispatch = useAppDispatch();
    const createAlert = useAlert();

    const CartComponent = () => {
        if(!cart.length) return <p>Panier vide</p>
        return (
            <ul>
                {cart.map((item, index) => <li key={item + index}>{item}</li>)}
            </ul>
        )
    }


    return (
        <>
            <h1>Les stores</h1>

            <h2>Mon Panier : </h2>
            <CartComponent />

            <h2>Mes produits</h2>

            <ul>
                {products.map((product) => <li key={'product-' + product}>
                    {product}
                    <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                </li> )}
            </ul>

            <h2>Alertes</h2>

            <p>
                <button onClick={() => createAlert({text: 'Hello World', level: 'success'})}>Hello</button>
                <button onClick={() => createAlert({text: 'ça va barder !', level: 'warning'})}>Attention</button>
                <button onClick={() => createAlert({text: 'Boom', level: 'error'})}>Ne pas cliquer ici !</button>
                <button onClick={() => createAlert({text: 'Tout va bien !'})}>Cliquez plutôt ici !</button>
            </p>

        </>
    )
}

export default Store;
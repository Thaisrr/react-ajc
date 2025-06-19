import {useAppDispatch, useAppSelector} from "../utils/hooks/useStore.ts";
import {addToCart} from "../store/CartSlice.ts";

const Store = () => {

    const cart = useAppSelector(state => state.cart);
    const products = ['Pantoufles', 'Chocolat', 'PS5', 'Plaid Moumoute'];
    const dispatch = useAppDispatch();

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

        </>
    )
}

export default Store;
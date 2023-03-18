import { useAppDispatch } from "../../app/store";
import { addToCart, cartProduct } from "../../features/cart/cartSlice";

export default function CartButton({ id, title, price, image}: cartProduct) {

    const dispatch = useAppDispatch()

    const addProductToCart = () => {
        const product:cartProduct = { id, title, price, image, quantity: 1 }
        dispatch(addToCart(product))
    }

	return(
		<button onClick={addProductToCart}>🛒</button>
	)
}
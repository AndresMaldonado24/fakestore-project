import { useAppDispatch } from "../../app/store";
import { addToCart, cartProduct } from "../../features/cart/cartSlice";

export default function CartButton({ id, title, price, image, quantity }: cartProduct) {

    const dispatch = useAppDispatch()

    const addProductToCart = () => {
        const product:cartProduct = { id, title, price, image, quantity}
        dispatch(addToCart(product))
    }

	return(
		<button onClick={addProductToCart}>🛒</button>
	)
}
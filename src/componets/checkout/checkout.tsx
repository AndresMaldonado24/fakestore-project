import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { CheckoutProductCard } from "../product/productCard"

export default function Checkout(){

	const cart = useSelector( (state: RootState) => state.cart)

	return(
			<main className="flex flex-row">
					<div className="w-2/3 h-[800px] grid grid-cols-1 mx-5 gap-4 overflow-y-auto border-2 border-black rounded-lg">
						{ cart.cartProducts.map( product =>{
							return <CheckoutProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} quantity={product.quantity} />
						})}
					</div>
					<div className="w-1/3 mx-5 flex flex-col border-2 border-black rounded-lg p-4">
						Metodos de Pago
						<div className="grid grid-cols-3 p-4">
							<button>VISA</button>
							<button>MasterCard</button>
							<button>PayPal</button>
						</div>
						<div>
							Info Price
						</div>
					</div>
			</main>
	)
}
import { cartProduct } from "../../features/cart/cartSlice"
import { product } from "../../features/products/productsSlice" 
import CartButton from "../buttons/cartButton"

export function ProductCard({ id, title, price, image, rating }:product) {
		return (
			<div id='product' className="w-auto h-auto rounded-lg flex flex-col justify-evenly py-4 hover:shadow-2xl">
					<div className="flex flex-row justify-evenly items-center">
						<p className="font-light text-lg px-2 w-1/2">{title}</p>
						<span className=" font-semibold px-2">⭐{rating.rate}</span>
					</div>
					<img className='w-2/3 h-1/2 self-center object-contain' src={image} alt={`Image of the Product`} />					
					<div className="w-2/3 self-center text-xl font-bold flex justify-between">
						Price: ${price}
					 	<CartButton id={id} title={title} price={price} image={image} quantity={1}/>
					 </div>
			</div>
		)
}

export function CheckoutProductCard({id, title, price, image, quantity}:cartProduct){
	return (
		<div id='product' className="flex gap-4 p-4">
			<img className='w-[200px] h-[200px] object-contain' src={image} alt="Product Image" />
			<div className="w-4/5 flex flex-col justify-evenly">
				<p className="text-xl font-bold">{title}</p>
				<div className="w-full flex flex-col justify-end items-end">
						<div className="flex flex-row gap-4"><p className="text-md font-bold">Price:</p><p className="text-md font-bold">${price}</p></div>
						<div className="flex flex-row gap-4"><p className="text-md font-bold">Quantity:</p><p className="text-md font-bold">{quantity}</p></div>
				</div>
			</div>
		</div>
	)
}
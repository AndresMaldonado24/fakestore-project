import { product } from "../../features/products/productsSlice" 

export default function ProductCard({ id, title, price, description, category, image, rating }:product) {
		return (
			<div id='product' className="w-auto h-auto rounded-lg flex flex-col justify-evenly py-4 hover:shadow-2xl">
					<div className="flex flex-row justify-evenly items-center">
						<p className="font-light text-lg px-2 w-1/2">{title}</p>
						<span className=" font-semibold px-2">⭐{rating.rate}</span>
					</div>
					<img className='w-2/3 h-1/2 self-center object-contain' src={image} alt={`Image of the Product`} />					
					<div className="w-2/3 self-center text-xl font-bold flex justify-between">Price: ${price} <CartButton/></div>
			</div>
		)
}

function CartButton() {
	return(
		<button>🛒</button>
	)
}
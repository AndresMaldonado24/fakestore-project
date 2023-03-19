import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import CartDisplay from "../display/cartDisplay"

export function MyCartStatus(){

	const cart = useSelector( (state: RootState) => state.cart)
	const [show, setShow] = useState<boolean>(false)

	const onClick = () => {
		setShow(!show)
	}

	return(
		<>
		<div className='flex flex-row justify-around items-baseline gap-4 cursor-pointer w-[100px] p-1' onClick={onClick}>
			<div className='w-8 h-8 bg-white rounded-full flex justify-center items-center font-bold'>{cart.cartProducts.length}</div>
			<div>🛒</div>
		</div>
		<MyCart isShowing={show} onClick={onClick}/>
		</>
	)
}

interface props {
	isShowing: boolean
	onClick: React.MouseEventHandler<HTMLDivElement>
}
export function MyCart(props: props){
	const {isShowing, onClick} = props
	const cart = useSelector( (state: RootState) => state.cart)

    const totalPrice:number = cart.cartProducts.map( product => product.price * product.quantity).reduce( (total, product) => total + product, 0)
    const VAT:number = (totalPrice * 0.19)

	return(
			<div className={`fixed z-50 right-2 top-11 h-[calc(100%-2.75rem)] w-1/4 shadow-lg bg-white transition ease-in-out duration-500 origin-top-right ${ isShowing ? 'transform scale-x-100' : 'transform scale-x-0'} flex flex-col items-center rounded-lg`} onMouseLeave={onClick}>
				<div id='cartDisplayer' className='w-full h-full mx-36 flex flex-col gap-4 overflow-y-auto'>
					{cart.cartProducts.map( product => {
						return <CartDisplay key={product.id} id={product.id} title={product.title} image={product.image} quantity={product.quantity} price={product.price}/>
					})}
				</div>
                <div className="w-full h-28 flex flex-row justify-evenly p-6">                    
                    <div className='flex flex-col flex-end flex-1 px-6'>
                        <div className='flex justify-between'><p>Amount:</p><p>${totalPrice.toFixed(2)}</p></div>
                        <div className='flex justify-between'><p>VAT(19%):</p><p>${VAT.toFixed(2)}</p></div>
                        <div className='flex justify-between'><p>Net Amount:</p><p>${(totalPrice + VAT).toFixed(2)}</p></div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="bg-green-400 rounded-lg p-4 text-white font-bold transition-transform ease-in-out duration-300 hover:shadow-lg">Checkout</button>
                    </div>
                </div>
			</div>
	)
}
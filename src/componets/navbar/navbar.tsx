import { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import CartDisplay from '../display/cartDisplay'

export default function Navbar() {
		const [isOpen, setIsOpen] = useState(false)

		return(
				<div className="w-full h-11 flex justify-between items-center px-4 bg-slate-900 sticky top-0 left-0 mb-5">
						<Link to='/'><div className='text-white font-bold'>FAKE STORE DEMO</div></Link>
						<div className="flex flex-row justify-between gap-6 text-white font-semibold cursor-pointer">
								<Link to='/jewelery'><div>Jewelery</div></Link>
								<div className="dropdown">
									<Link to='/clothing'>
										<button className="dropdown-toggle" onMouseOver={ () => setIsOpen(true) } onMouseLeave={ () => setIsOpen(false)}>
										Clothing
										</button>
									</Link>
									<ul className={`bg-slate-900 py-3 px-2 transition-all duration-300 ease-in-out dropdown-menu ${isOpen ? 'show' : ''}`} onMouseEnter={ () => setIsOpen(true)} onMouseLeave={ () => setIsOpen(false)}>
										<li><Link to='/clothing/men'><div>Men's Clothing</div></Link></li>
										<li><Link to='/clothing/women'><div>Woman's Clothing</div></Link></li>
									</ul>
							</div>
								<Link to='/electronics'><div>Electronics</div></Link>
						</div>
						<MyCartStatus/>
				</div>
		)
}

function MyCartStatus(){

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
function MyCart(props: props){
	const {isShowing, onClick} = props
	const cart = useSelector( (state: RootState) => state.cart)

	return(
			<div className={`fixed z-50 right-2 top-11 h-[calc(100%-2.75rem)] w-1/4 shadow-lg bg-white transition ease-in-out duration-500 origin-top-right ${ isShowing ? 'transform scale-x-100' : 'transform scale-x-0'} flex flex-col items-center rounded-lg`} onMouseLeave={onClick}>
				<div id='cartDisplayer' className='w-full h-full mx-36 grid grid-cols-1 gap-4 overflow-y-auto'>
					{cart.cartProducts.map( product => {
						return <CartDisplay key={product.id} id={product.id} title={product.title} image={product.image} quantity={product.quantity} price={product.price}/>
					})}
				</div>
				<div className='bg-pink-300 h-20 flex justify-center items-center'>PAGAR</div>
			</div>
	)
}
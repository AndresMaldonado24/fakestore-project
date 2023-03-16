import { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

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
				</div>
		)
}
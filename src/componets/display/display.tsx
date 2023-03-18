import { useEffect } from "react"
import { useSelector} from 'react-redux'
import { RootState, useAppDispatch } from "../../app/store"
import { fetchProducts } from "../../features/products/productsSlice"
import DisplayLoading from "../loading/displayLoading"
import ProductCard from "../product/productCard"


export default function DisplayProducts( prop : {filter?:string}){

		const dispatch = useAppDispatch()
		const products = useSelector( (state: RootState) => state.products)


		useEffect( () => {
				dispatch(fetchProducts())
		},[dispatch])

		const filter = prop.filter

		return(
				<main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 py-14">
						{
								products.isLoading ? <DisplayLoading/> :
								products.productsList.map( product => {

									if( filter?.toLowerCase() == product.category.toLowerCase() || product.category.split(' ')[1] == filter){
										return <ProductCard
											key={product.id}
											id= {product.id}
											title= {product.title}
											price= {product.price}
											description= {product.description}
											category= {product.category}
											image= {product.image}
											rating ={product.rating}
											/>
									}else if(filter == undefined){
										return <ProductCard
												key={product.id}
												id= {product.id}
												title= {product.title}
												price= {product.price}
												description= {product.description}
												category= {product.category}
												image= {product.image}
												rating ={product.rating}
												/>
								}
								})
						}
				</main>
		)
}
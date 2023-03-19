import { useAppDispatch } from "../../app/store";
import { cartProduct,addProduct, removeProduct, deleteProduct } from "../../features/cart/cartSlice";

export default function CartDisplay({id,title,price,image,quantity}: cartProduct){
    const dispatch = useAppDispatch()

    interface ID {
        id: number
    }
    const addClick = () => {
        const productId: ID = {id}
        dispatch(addProduct(productId))
    }

    const removeClick = () => {
        const productId: ID = {id}
        dispatch(removeProduct(productId))
    }

    const deleteClick = () => {
        const productId: ID = {id}
        dispatch(deleteProduct(productId))
    }

    return(
        <div className="flex flex-row justify-around h-40 items-center">
            <div className="w-3/4 flex flex-col">
                <img className='w-20 h-20 self-center object-contain' src={image} alt="Product Image" />
                <p className="font-semibold">{title}</p>
                <p className="font-bold text-end">Price {price}</p>
            </div>
            <div className="flex flex-col items-center">
                <button className="border-2 border-black w-6 flex justify-center items-center rounded-t-lg font-bold bg-slate-900 text-white" onClick={addClick}>+</button>
                <span className="border-2 border-black w-6 h-10 flex justify-center items-center border-y-0">{quantity}</span>
                <button className="border-2 border-black w-6 flex justify-center items-center rounded-b-lg font-bold bg-slate-900 text-white" disabled={quantity == 1 ? true : false} onClick={removeClick}>-</button>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl bg-red-500 rounded-lg text-white w-10 h-10 flex justify-center items-center cursor-pointer" onClick={deleteClick}>🗑</span>
            </div>
        </div>
    )
}
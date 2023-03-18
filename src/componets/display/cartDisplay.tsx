import { cartProduct } from "../../features/cart/cartSlice";


export default function CartDisplay({id,title,price,image,quantity}: cartProduct){
    return(
        <div className="flex flex-row justify-evenly">
            <div className="w-3/4 flex flex-col">
                <img className='w-20 h-20 self-center object-contain' src={image} alt="Product Image" />
                <p className="font-semibold">{title}</p>
                <p className="font-bold text-end">Price {price}</p>
            </div>
            <div className="flex flex-col items-center">
                <button className="border-2 border-black w-6 flex justify-center items-center rounded-t-lg font-bold bg-slate-900 text-white">+</button>
                <span className="border-2 border-black w-6 h-10 flex justify-center items-center border-y-0">{quantity}</span>
                <button className="border-2 border-black w-6 flex justify-center items-center rounded-b-lg font-bold bg-slate-900 text-white">-</button>
            </div>
        </div>
    )
}
import { useDispatch, useSelector } from "react-redux"
import SubMenuList from "./SubMenuList"
import { clearCart } from "../utils/Redux/cartSlice"

const Cart = ()=>{

    const dispatch = useDispatch()
    const handleClearCart= ()=>{
        dispatch(clearCart())
    }
    const cartItems = useSelector((store)=> store.cart.items)
    console.log("Cart Item",cartItems)
    return(
        <div className="bg-center p-4 m-4 text-center ">
            <h1 className="text-2xl font-bold">  Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="p-2 m-2 text-white bg-black rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            <SubMenuList itemCards={cartItems}></SubMenuList>
            </div>
        </div>
    )
}

export default Cart
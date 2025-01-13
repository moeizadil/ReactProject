import { useParams } from "react-router"
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu"

const RestaurantMenu = ()=> {
    const {resId}= useParams()

    const resInfo = useRestaurantMenu(resId)
    if(resInfo==null){
        return(
            <Shimmer></Shimmer>
        )
    }
        const {name,cuisines,totalRatingsString} = resInfo?.data?.cards[2]?.card?.card?.info
        const menuItems = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card.itemCards
        console.log("MENU ITEMS",menuItems)


    return(
        <div className="menu">
                <h1> {name}</h1>
                
                <h3> {cuisines.join()}</h3>
                <h5>{totalRatingsString}</h5>
            <ul>
                {menuItems.map( (item)=>(
                    <li key = {item.card.info.id}>{item.card.info.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default RestaurantMenu
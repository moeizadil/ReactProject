import { useEffect,useState } from "react"
import { useParams } from "react-router"
import Shimmer from "./Shimmer"

const RestaurantMenu = ()=> {
    const {resId}= useParams()
console.log("RES ID",resId)

    const[resInfo,setResInfo] = useState(null)
    useEffect( ()=>{
        fetchMenu()
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + resId)
        const json =await data.json()
        console.log("Fetch Menu",json)

        setResInfo(json)
        console.log(resInfo)
    }
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
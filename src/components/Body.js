import RestaurantCard  from "./RestaurantCard"
import { useState } from "react"
import restaurantList from "../utils/mockData"

const Body = ()=> {
    let [resList, setResList] = useState(restaurantList)
    return(
      <div className="body">
        {/* <div className="search">
           Search
        </div> */}
        <div className="filter" >
            <button className="filter-btn" onClick={ ()=>{
                let filteredData = resList.filter(restaurant=> restaurant.rating>4.0)
                setResList(filteredData)
                console.log("Button clicked",resList)
                

            }}>
                Top Rated Restaurants
            </button>
        <button className="seeAll-btn" onClick= {
            ()=>{
                setResList(restaurantList)
            }
        }> See All</button>
        </div>
        <div className="res-container">
  
          {
            resList.map( (res) =>  <RestaurantCard key = {res.id} restData={res} ></RestaurantCard> )
          }
          {/* <RestaurantCard restData={resList[0]} ></RestaurantCard> */}
      
        </div>
  
      </div>
    )
  }
export default Body
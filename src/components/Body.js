import RestaurantCard  from "./RestaurantCard"
import { useState,useEffect } from "react"
import restaurantList from "../utils/mockData"
import Shimmer from "./Shimmer"
import { Link } from "react-router"
import useOnlineStatus from "../utils/customHooks/useOnlineStatus"

const Body = ()=> {
  console.log("Body comp")
    let [resList, setResList] = useState([])
    let [filteredResList, setFilteredResList] = useState([])

    let [searchText, setSearchText] = useState("")

    useEffect( ()=> {
      fetchData()
      const timer = setInterval( ()=>{
        console.log("setInterval calling")
      },1000)

      //This return function is called in a useEffect when the component is unmounted, purpose is to clean up the things 
      return() =>{
        clearInterval(timer)
        console.log("useEffect Component unmount") //See episode 8 for further explaination
      }
    },[])
    const fetchData =async  ()=> {
      //called the api , but unable to get the datadue to cors error
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",       );
        const data = await response.json()
        console.log("DATA is ",data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        const prodResList =  data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        setResList(prodResList)
        setFilteredResList(prodResList)

      // setInterval(() => {
      //   console.log("Timeout 1 sec")
      //   // setResList(prodResList)
      //   // setFilteredResList(prodResList)
      // }, 1000);
    }
    const onlineStatus = useOnlineStatus()
    if(onlineStatus==false){
      return <h1>Opps Your internet is offline , Please check your internet</h1>
    }
    //Shimmer UI concept 
    return resList.length == 0 ? <Shimmer count={10}></Shimmer>  : (
      <div className="body">
        {/* <div className="search">
           Search
        </div> */}
        <div className="filter" >

          <input className="search-input" type="text" placeholder="Search Restaurant by Name" onChange={(e)=>{ setSearchText(e.target.value.toLowerCase())}}/>
          <button className="search-btn" onClick={ ()=>{
            // console.log("Search Text",resList.restaurant.name.toLowerCase())
                let filteredData = resList.filter((restaurant)=>  restaurant.info.name.toLowerCase().includes(searchText) ); 
                setFilteredResList(filteredData)
                console.log("Filtered Data",filteredData)
            
            }}>
              Search
            </button>

            <button className="filter-btn" onClick={ ()=>{
                let filteredData = resList.filter(restaurant=> restaurant.info.avgRating>4.5 ).sort((a, b) => b.rating - a.rating); 
                setFilteredResList(filteredData)
                console.log("Button clicked",resList)
                

            }}>
                Top Rated Restaurants
            </button>
        <button className="seeAll-btn" onClick= {
            ()=>{
                setFilteredResList(resList)
            }
        }> See All</button>
        </div>
        <div className="res-container">
  
          {

            filteredResList.map( (res) => <Link className="res-container" key = {res.info.id} to={"/restaurants/" + res.info.id}> <RestaurantCard  restData={res} ></RestaurantCard> </Link> )
          }
          {/* <RestaurantCard restData={resList[0]} ></RestaurantCard> */}
      
        </div>
  
      </div>
 )
    
  }
export default Body
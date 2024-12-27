import RestaurantCard  from "./RestaurantCard"
import { useState,useEffect } from "react"
import restaurantList from "../utils/mockData"
import Shimmer from "./Shimmer"

const Body = ()=> {
    let [resList, setResList] = useState([])
    let [filteredResList, setFilteredResList] = useState([])

    let [searchText, setSearchText] = useState("")

    useEffect( ()=> {
      fetchData()
    },[])
    const fetchData =async  ()=> {
      //called the api , but unable to get the datadue to cors error
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://consumer-api.wolt.com/v1/pages/restaurants?lat=50.937531&lon=6.9602786",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Transfer-Encoding" : "chunked",
            "User-Agent": "PostmanRuntime/7.43.0", // Example: "Mozilla/5.0 ..."
            // Include other necessary headers copied from Postman
            "Accept" : "*/*",
            "Accept-Encoding" : "gzip, deflate, br",
            "Connection" : "keep-alive",
            "Access-Control-Allow-Credentials" : "true",
            "Access-Control-Allow-Origin" : "http://wolt.com",
            "Vary" : "Accept-Encoding,Origin",
            "Via" : "1.1 c37b7e69b10b90188d923a2d02d4e71a.cloudfront.net (CloudFront)",
            "X-Amz-Cf-Pop" : "DUS51-P4",
            "X-Amz-Cf-Id" : "yoBxCs8eSfEJW2bSVty_2zehT8Oi7LZ2qouUiu1vV_XDCx8i8zJ-0A=="


            
          },
        }
  
      
      );
      console.log("DATA is ",response)
      setTimeout(() => {
        setResList(restaurantList)
        setFilteredResList(restaurantList)
      }, 1000);
    }
    //Shimmer UI concept 
    return resList.length == 0 ? <Shimmer count={10}></Shimmer>  : (
      <div className="body">
        {/* <div className="search">
           Search
        </div> */}
        <div className="filter" >

          <input className="search-input" type="text" onChange={(e)=>{ setSearchText(e.target.value.toLowerCase())}}/>
          <button className="search-btn" onClick={ ()=>{
            // console.log("Search Text",resList.restaurant.name.toLowerCase())
                let filteredData = resList.filter((restaurant)=>  restaurant.name.toLowerCase().includes(searchText) ); 
                setFilteredResList(filteredData)
                console.log("Filtered Data",filteredData)
            
            }}>
              Search
            </button>

            <button className="filter-btn" onClick={ ()=>{
                let filteredData = resList.filter(restaurant=> restaurant.rating>4.0 ).sort((a, b) => b.rating - a.rating); 
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
            filteredResList.map( (res) =>  <RestaurantCard key = {res.id} restData={res} ></RestaurantCard> )
          }
          {/* <RestaurantCard restData={resList[0]} ></RestaurantCard> */}
      
        </div>
  
      </div>
 )
    
  }
export default Body
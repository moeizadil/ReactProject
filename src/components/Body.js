import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Body = () => {

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  console.log("Body comp");
  let [resList, setResList] = useState([]);
  let [filteredResList, setFilteredResList] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    const timer = setInterval(() => {
      console.log("setInterval calling");
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log("useEffect Component unmount");
    };
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(
      "DATA is ",
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    const prodResList =
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setResList(prodResList);
    setFilteredResList(prodResList);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1 className="text-center text-red-500 text-lg">Oops! Your internet is offline. Please check your connection.</h1>;
  }

  // Shimmer UI
  return resList.length === 0 ? (
    <Shimmer count={10}></Shimmer>
  ) : (
    <div className="p-6">
      {/* Search and Filter Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <input
          className="flex-grow border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search Restaurant by Name"
          onChange={(e) => {
            setSearchText(e.target.value.toLowerCase());
          }}
        />
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          onClick={() => {
            const filteredData = resList.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(searchText)
            );
            setFilteredResList(filteredData);
            console.log("Filtered Data", filteredData);
          }}
        >
          Search
        </button>
        <button
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
          onClick={() => {
            const filteredData = resList
              .filter((restaurant) => restaurant.info.avgRating > 4.5)
              .sort((a, b) => b.rating - a.rating);
            setFilteredResList(filteredData);
            console.log("Button clicked", resList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-all"
          onClick={() => {
            setFilteredResList(resList);
          }}
        >
          See All
        </button>
      </div>

      {/* Restaurant Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredResList.map((res) => (
          <Link
            className="hover:shadow-lg transition-shadow"
            key={res.info.id}
            to={"/restaurants/" + res.info.id}
          >
             { res.info.isOpen? <RestaurantCardPromoted restData={res}></RestaurantCardPromoted > :  <RestaurantCard restData={res}></RestaurantCard>
          }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

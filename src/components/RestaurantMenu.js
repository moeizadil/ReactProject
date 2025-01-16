import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // Fetch restaurant menu data
  const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(0)
  if (resInfo == null) {
    return <Shimmer />;
  }

  // Destructure restaurant information and menu items
  const { name, cuisines, totalRatingsString } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};
  const categories = 
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>  (c.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    )

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Restaurant Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 text-center">
          {name || "Delicious Restaurant"}
        </h1>
        <h3 className="text-lg font-medium text-center mb-2">
          {cuisines?.join(" • ") || "Cuisines"}
        </h3>
        <h5 className="text-center text-yellow-300 font-semibold">
          {totalRatingsString || "Ratings"}
        </h5>
      </div>

      {/* Menu Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-500 pb-2">
          Menu
        </h2>
        {categories.map( (category,index)=>( <MenuCategory 
        menu = {category?.card?.card} 
        showItems= {index===showIndex ? true : false}
        setShowIndex = {() => setShowIndex(index)}
        ></MenuCategory>) )}
 
      </div>
    </div>
  );
};

export default RestaurantMenu;

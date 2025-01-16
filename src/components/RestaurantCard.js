const RestaurantCard = (props) => {
  const { info } = props.restData;
  console.log("Res Card Data", info)
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img
        className="rounded-lg w-full h-40 object-cover mb-4" // Increased height to 48
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          info?.cloudinaryImageId
        }
        alt={info.name}
      />
      <h3 className="text-lg font-semibold mb-2 truncate">{info.name}</h3>
      <h5 className="text-gray-600 text-sm mb-2">
        {info.cuisines.map((cuisine, index) => (
          <span key={index}>
            {cuisine}
            {index < info.cuisines.length - 1 ? ", " : ""}
          </span>
        ))}
      </h5>
      <h6 className="text-sm text-gray-500 mb-1">
        Rating: <span className="font-medium text-yellow-600">{info.avgRating} ⭐</span>
      </h6>
      <h6 className="text-sm text-gray-500">Delivery Time: {info.sla.deliveryTime} mins</h6>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return(
      <div className="relative">
  <label className="absolute top-2 right-2 bg-green-700 text-white p-1 rounded-lg">
    Open Now
  </label>
  <RestaurantCard {...props} />
</div>

    )
  }

}

export default RestaurantCard;

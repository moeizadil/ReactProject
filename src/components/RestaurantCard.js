
const cardStyle = {
    backgroundColor : "#F0F0F0"
  }
 
const RestaurantCard= (props)=> {
    const {info} = props.restData
    console.log("Id are",info.id)
    return(
      <div className="res-card" style={cardStyle}>
      <img className="res-logo"   src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info?.cloudinaryImageId}></img>
  
        <h3> {info.name}</h3>
        <h5>  {info.cuisines.map((cuisine, index) => (
    <span key={index}>{cuisine}{index < info.cuisines.length - 1 ? ', ' : ''}</span>
  ))}
</h5>
        <h6>Rating :       {info.avgRating} Stars</h6>  
        <h6> {info.sla.deliveryTime}</h6>
      </div>
    )
  }

export default RestaurantCard
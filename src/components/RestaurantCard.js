
const cardStyle = {
    backgroundColor : "#F0F0F0"
  }
 
const RestaurantCard= (props)=> {
    const {restData} = props
    return(
      <div className="res-card" style={cardStyle}>
      <img className="res-logo"   src={restData?.imageUrl}></img>
  
        <h3> {restData.name}</h3>
        <h5>{restData.cuisine}</h5>
        <h6>Rating :       {restData.rating} Stars</h6>  
        <h6> {restData.deliveryTime}</h6>
      </div>
    )
  }

export default RestaurantCard
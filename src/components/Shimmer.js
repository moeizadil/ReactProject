const cardStyle = {
    backgroundColor: "#F0F0F0",
  };
  
  const Shimmer = ({ count = 5 }) => {
    // Render multiple shimmer cards using Array.map()
    return (

      <div className="res-container">
        {Array(count)
          .fill(null)  // Create an array of length 'count'
          .map((_, index) => (
            <div key={index} className="shimmer-card" style={cardStyle}>
              <img className="shimmer-logo"  />
              <h3> </h3>
              <h5> </h5>
              <h6> </h6>
              <h6> </h6>
            </div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  
import { Link } from "react-router"
import useOnlineStatus from "../utils/customHooks/useOnlineStatus"

const Header = ()=> {
  const onlineStatus = useOnlineStatus()
    return(
      <div className="header">
        <div className="logoContainer">
            <img className="logo" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png"></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
            <Link className= "nav-items" to="/"> Home </Link>
            <Link to="about"> About Us </Link>
            <Link to="contact"> Contact US </Link>
            <Link> Cart </Link>
            <Link to="grocery"> Grocery </Link>

  
          </ul>
        </div>
      
      </div>
    
    )
  }

export default Header
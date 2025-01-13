import { Link } from "react-router"

const Header = ()=> {
    return(
      <div className="header">
        <div className="logoContainer">
            <img className="logo" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png"></img>
        </div>
        <div className="nav-items">
          <ul>
            <Link to="/"> Home </Link>
            <Link to="about"> About Us </Link>
            <Link to="contact"> Contact US </Link>
            <Link> Cart </Link>
  
          </ul>
        </div>
      
      </div>
    
    )
  }

export default Header
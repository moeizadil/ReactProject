import { Link } from "react-router";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import { userContext } from "../utils/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const data = useContext(userContext)

  //subscribing to the store using a selector
  const cartItems = useSelector((store)=>store.cart.items)

  return (
    <header className="flex justify-between items-center px-8 py-6 bg-gradient-to-r from-gray-800 via-purple-600 to-blue-500 shadow-lg rounded-lg">
      {/* Logo */}
      <div>
        <img
          className="w-40 h-auto cursor-pointer"
src="https://tse4.mm.bing.net/th?id=OIP.XEl3nSHvLONIf8XD5kJDUAHaGL&pid=Api"
          alt="Food Rider AI Logo"
        />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center space-x-6 text-white font-semibold text-lg">
          <li className="flex items-center space-x-2">
            <span>Online Status:</span>
            <span
              className={`${
                onlineStatus ? "text-white" : "text-red-400"
              } font-bold text-xl`}
            >
              {onlineStatus ? "✅ Online" : "🔴 Offline"}
            </span>
          </li>
          <li>
            <Link
              className="px-4 py-2 rounded-full bg-white text-lg text-gray-800 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2 rounded-full bg-white text-lg text-gray-800 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              to="/about"
            >
              About Us
            </Link>
          </li>
          {/* <li>
            <Link
              className="px-4 py-2 rounded-full bg-white text-lg text-gray-800 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              to="/contact"
            >
              Contact Us
            </Link>
          </li> */}
          <li>
          <Link
            className="relative flex items-center px-6 py-2 rounded-full bg-gray-100 text-lg text-gray-800 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md transition duration-200"
            to="/cart"
          >
            <span className="mr-2">
              🛒
            </span>
            Cart 
            <span className="ml-2 bg-red-500 text-white text-sm font-bold w-6 h-6 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          </Link>

          </li>
          <li>
            <Link
              className="px-4 py-2 rounded-full bg-white text-lg text-gray-800 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
          <li 
          className="px-4 py-2 rounded-full bg-white text-lg text-gray-800 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {data.loggedInUser}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

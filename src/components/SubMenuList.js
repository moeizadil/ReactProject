import { useDispatch } from "react-redux";
import { addItem } from "../utils/Redux/cartSlice";

const SubMenuList = ({ itemCards }) => {
    console.log("SubMenu Item List",itemCards)
    const dispatch = useDispatch()


    const handleAddItem = (item)=>{
        dispatch(addItem(item))
    }

    return (
      <div>
        {itemCards.map((item) => (
          <div
            key={item.card.info.id}
            className="flex items-center p-2 m-2 border-gray-200 border-b-2 text-left"
          >
            {/* Left Section */}
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-medium">{item.card.info.name}</span>
                <span className="ml-2 text-gray-600">- Rs {item.card.info.price/100}</span>
              </div>
              <p className="text-xs text-gray-500">{item.card.info.description}</p>
            </div>
  
            {/* Right Section */}
            <div className="w-3/12 p-3 relative">
              <button
className="absolute bottom-2 right-7 py-1 px-4 text-sm bg-green-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition duration-200"
onClick={()=> handleAddItem(item)}
>
                Add +
              </button>
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                  item.card.info.imageId
                }
                alt={item.card.info.name}
                className="w-full h-auto object-cover rounded-lg border"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default SubMenuList;
  
import {  useState } from "react";
import SubMenuList from "./SubMenuList";
const MenuCategory = ({ menu,showItems,setShowIndex }) => {

    const handleClick = ()=>{
        setShowIndex()
    }
  console.log("Menu IS here", menu);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="justify-between flex cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {menu.title} ({menu.itemCards.length})
          </span>
          <span> ⬇️</span>
        </div>

        {showItems &&<SubMenuList itemCards={menu.itemCards}></SubMenuList>}
      </div>
    </div>
  );
};

export default MenuCategory;

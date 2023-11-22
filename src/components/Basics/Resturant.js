import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import NavBar from "./NavBar";



const uniqueList = [
  ... new Set(
    Menu.map((curElem)=>{
      return curElem.category;
    })
  ),
  "All",
];

const Resturant = () => {
  // const myStyle= {color:"red"};

  const [menuData, setMenuData]= useState(Menu); //used to store/manage data
  const [menuList, setMenuList]= useState(uniqueList); 

  const filterItem = (category) => {
      
      if(category === 'All'){
        setMenuData(Menu);
      }


    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
    <NavBar filterItem={filterItem} menuList={menuList}/>

     <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;

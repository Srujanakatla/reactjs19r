import React from "react";
import { menuItems } from "../data/menuItems";
import "../App.css";

const MenuItems = () => {
  return (
    <nav className="menu">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          {item.name}
        </div>
      ))}
    </nav>
  );
};

export default MenuItems;

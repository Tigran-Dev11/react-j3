import React from "react";

export const MenuBaker = [
  {
    name: "Croissant (Plain/Chocolate)",
    description:
      "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
    price: "6.00",
  },
  {
    name: "Daily Muffin",
    description:
      "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
    price: "6.00",
  },
  {
    name: "Cheesecake",
    description:
      "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
    price: "6.00",
  },
];
export const menuBreakfast = [
  {
    name: "Granola & Greek Yogurt",
    description: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
    price: "$12.00",
  },
  {
    name: "Eggs Benedict",
    description: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
    price: "$12.00",
  },
  {
    name: "Superfood Acai Bowl",
    description: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
    price: "$12.00",
  },
  {
    name: "Avocado Toast",
    description: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
    price: "$12.00",
  },
  {
    name: "Eggs Benedict",
    description: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
    price: "$12.00",
  },
  {
    name: "Bacon & Eggs on Rye",
    description: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
    price: "$12.00",
  },
  {
    name: "Spinach & Salmon Brioche",
    description: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
    price: "$12.00",
  },
  {
    name: "Smoked Salmon Bagel",
    description: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
    price: "$12.00",
  },
  {
    name: "Green Shakshuka",
    description: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
    price: "$12.00",
  },
];
const MenuItem = ({ items }) => {
  return (
    <div className="bakery">
      {items.map((item, index) => (
        <div key={index} className="menu-item">
          <p className="menu-title">{item.name}</p>
          <p className="menu-description">{item.description}</p>
          <p className="menu-description">Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};
export default MenuItem;

export const MenuItemBreakfast = ({ items }) => {
    return (
      <div className="breakfast">
        {items.map((item, index) => (
          <div key={index} className="menu-item-break">
            <p className="title">{item.name}</p>
            <p className="description">{item.description}</p>
            <p className="description">Price: ${item.price}</p>
          </div>
        ))}
      </div>
    );
  };

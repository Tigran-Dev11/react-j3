import React from "react";
import css from "./styled.module.scss"
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
    <div className={css.bakery}>
      {items.map((item, index) => (
        <div key={index} className={css.menuItem}>
          <p className={css.menuTitle}>{item.name}</p>
          <p className={css.menuDescription}>{item.description}</p>
          <p className={css.menuDescription}>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};
export default MenuItem;

export const MenuItemBreakfast = ({ items }) => {
    return (
      <div className={css.breakfast}>
        {items.map((item, index) => (
          <div key={index} className={css.menuItemBreak}>
            <p className={css.title}>{item.name}</p>
            <p className={css.description}>{item.description}</p>
            <p className={css.description}>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    );
  };

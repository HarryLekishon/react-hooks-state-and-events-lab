import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectcategory, setSelectedCategory] = useState("All")
  // const [filterBy, SetFilterBy] = useState("All")

  function handleFilterChange(event) {
    setSelectedCategory(event.target.value)
  }

  const foodsToDisplay = items.filter((item) => {
    if (selectcategory === "All") {
      return true;
    } else {
      return item.category === selectcategory;
    }
  });
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

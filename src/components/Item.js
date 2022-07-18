import React, {useState} from "react";

function Item({ name, category }) {

  const [addToCart, setToCart] = useState(true)
  const cart = addToCart ? "" : "in-cart"
  const cartName = addToCart ? "Add to Cart" : "Remove From Cart"

  function editCart() {
    if(addToCart===true) {
      setToCart(false)
    }else{
      setToCart(true)
    }
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={editCart}>{cartName}</button>
    </li>
  );
}

export default Item;

import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import React, { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  

  const [isOn, setIson] = useState(false)
  const appClass = isOn ? "App dark" : "App light"

  function changeColor() {
    if(isOn === false){
      setIson(true)
    }else {
      setIson(false)
    }
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeColor}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

import { ProductContext } from "./contexts/ProductContext";
import { CardContext } from "./contexts/CardContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState(initialStateOku("cart"));

  
  // Local Storage

  function cartLocalStorageYaz(cartP) {
    localStorage.setItem("cart", JSON.stringify(cartP));
  }

  function cartLocalStorageOku(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function initialStateOku(key) {
    const initialCart = cartLocalStorageOku(key);

    if(initialCart) {
      return initialCart;
    } else {
      return [];
    }
  }
  
  
  
  const addItem = (item) => {
    const newCart = [...cart, item]
    setCart(newCart);
    cartLocalStorageYaz(newCart);
  };

  const removeItem = (id) => {
    const newCart = [...cart.filter(i => i.id !== id)];
    setCart(newCart);

    cartLocalStorageYaz(newCart)
       
  }


  

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CardContext.Provider value={{cart, removeItem}}>
          <Navigation />

          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>

          </main>
        </CardContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;

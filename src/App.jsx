import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { useState } from "react";

import Home from "./pages/home/home";
import ProductCatigory from "./pages/productCatigory/ProductCatigory";
import Cart from "./pages/cart/Cart";
import ProductDeails from "./pages/productDeails/ProductDeails";

import HomeDesign from "./pages/homeDesign/HomeDesign";

function App() {
  const [currentTHeme, setcurrentTHeme] = useState("light");

  const changeTheme = () => {
    setcurrentTHeme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter basename="/">
      <div className={currentTHeme === "dark" ? "dark-theme" : ""}>
        <Routes>
          <Route
            path="/"
            element={
              <Home changeTheme={changeTheme} currentTHeme={currentTHeme} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart changeTheme={changeTheme} currentTHeme={currentTHeme} />
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProductDeails
                changeTheme={changeTheme}
                currentTHeme={currentTHeme}
              />
            }
          />
          <Route
            path="/catigory"
            element={
              <ProductCatigory
                changeTheme={changeTheme}
                currentTHeme={currentTHeme}
              />
            }
          />
          <Route
            path="/design"
            element={
              <HomeDesign
                changeTheme={changeTheme}
                currentTHeme={currentTHeme}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

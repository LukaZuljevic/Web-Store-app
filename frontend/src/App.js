import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductCardList from "./components/ProductCardList";
import Cart from "./components/Cart";

export default function App() {
  const [backendData, setBackendData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setBackendData(data);
    };
    fetchData();
  }, []);

  console.log(cart);

  return (
    <div>
      <Header />
      <ProductCardList backendData={backendData} setCart={setCart} />
      <Cart cart={cart} />
    </div>
  );
}

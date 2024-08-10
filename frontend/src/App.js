import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductCardList from "./components/ProductCardList";
import Cart from "./components/Cart";
import Filter from "./components/Filter";

export default function App() {
  const [backendData, setBackendData] = useState([]);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("");

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
      <Filter setFilter={setFilter}/>
      <ProductCardList filter={filter} backendData={backendData} setCart={setCart} />
      <Cart cart={cart} />
    </div>
  );
}

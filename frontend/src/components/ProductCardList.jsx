function ProductCardList({backendData, setCart}) {

  const addToCart = (event) => {

    const product = {
      title: event.target.parentElement.querySelector('.product-title').innerText,
      price: event.target.parentElement.querySelector('.product-price').innerText
    };

    setCart((prevCart) => [...prevCart, product]);

  };

  return (
    <div className="container">
      <ul className="store-items">
      {backendData.map((product, i) => (
        <li className="single-item" key={i}>
          <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <img
            src={product.image}
            alt={product.title}
          />
          <p className="product-price">{product.price}€</p>
          </div>
          <button onClick={addToCart}>Add to cart</button>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default ProductCardList;

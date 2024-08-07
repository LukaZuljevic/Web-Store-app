function Cart({ cart }) {

const closeCart = () => {
    const cartElement = document.querySelector('.background');
    cartElement.style.display = 'none';
};

const cartTotal = cart.reduce((acc, product) => acc + parseFloat(product.price), 0);

  return (
    <div className="background">
      <div className="cart">
        <h2>Cart</h2>
        <ul className="cart-list">
          {cart.map((product, i) => (
            <li key={i}>
              <p className="title">{product.title}</p>
              <p className="price">{product.price}</p>
            </li>
          ))}
        </ul>
        <h3>Total: {cartTotal}€</h3>
        <button onClick={closeCart}>Close</button>
      </div>
    </div>
  );
}
export default Cart;

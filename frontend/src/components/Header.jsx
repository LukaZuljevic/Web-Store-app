function Header() {
  const handleCartClick = () => {
    const cartElement = document.querySelector('.background');
    cartElement.style.display = 'block';
  };

  return (
    <header>
      <ul>
        <li>
          <h1>Welcome to my store</h1>
        </li>
        <div className="navigation">
          <li><a href="#">Home</a></li>
          <li><a href="#" onClick={handleCartClick}>Cart</a></li>
        </div>
      </ul>
    </header>
  );
}

export default Header;

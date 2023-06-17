function Header() {
  return (
    <header className="d-flex justify-between align-center align-center p-40">
      <div className="d-flex align-center">
        <img src="img/logo.svg" alt=""></img>
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Winkel met exclusieve sneakers!</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img src="img/cart.svg" alt=""></img>
          <span>1205 руб.</span>
        </li>
        <li>
          <img src="img/heart.svg" alt=""></img>
        </li>
        <li>
          <img src="img/user.svg" alt=""></img>
        </li>
      </ul>
    </header>
  );
}

export default Header;

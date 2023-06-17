function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            className="remove-btn cu-p"
            src="/img/bnt-remove.svg"
            alt="remove button"
          ></img>
        </h2>
        {/* ------------- CART ITEMS BEGIN HERE -------------- */}
        <div className="cart-items">
          <div className="cart-item d-flex align-center mb-20">
            {/* <img
              width={80}
              className="cart-sneaker-img mr-20"
              src="/img/sneakers/sneaker-4.jpg"
              alt="Sneakers"
            ></img> */}

            <div
              style={{ backgroundImage: "url(/img/sneakers/sneaker-4.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
              <b>8 999 руб.</b>
            </div>
            <img
              className="remove-btn"
              src="/img/bnt-remove.svg"
              alt="remove button"
            ></img>
          </div>

          <div className="cart-item d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/sneaker-3.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
              <b>8 999 руб.</b>
            </div>
            <img
              className="remove-btn"
              src="/img/bnt-remove.svg"
              alt="remove button"
            ></img>
          </div>

          <div className="cart-item d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/sneaker-2.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
              <b>8 999 руб.</b>
            </div>
            <img
              className="remove-btn"
              src="/img/bnt-remove.svg"
              alt="remove button"
            ></img>
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>21 496 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>

          <button className="greenButton">
            Оформить заказ <img src="/img/arrowRight.svg" alt="arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

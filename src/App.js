function App() {
  return (
    <div className="wrapper clear">
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
      <div className="content p-40">
        <h1 className="mb-40">All Sneakers</h1>

        {/* ------------- CARDS BEGIN HERE -------------- */}
        <div className="sneaker-cards">
          <div className="card">
            <div className="card-img">
              <img
                width={133}
                height={112}
                src="img/sneakers/sneaker-1.jpg"
                alt=""
              ></img>
            </div>

            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="plus btn"
                ></img>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img
                width={133}
                height={112}
                src="img/sneakers/sneaker-2.jpg"
                alt=""
              ></img>
            </div>
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button plusBtn">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="plus btn"
                ></img>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img
                width={133}
                height={112}
                src="img/sneakers/sneaker-3.jpg"
                alt=""
              ></img>
            </div>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>8499 руб.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="plus btn"
                ></img>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img
                width={133}
                height={112}
                src="img/sneakers/sneaker-4.jpg"
                alt=""
              ></img>
            </div>
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="plus btn"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

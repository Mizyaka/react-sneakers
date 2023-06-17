function Card() {
  return (
    <div className="card">
      <div className="favourite">
        <img src="/img/unliked.svg" alt="unlikedHeart"></img>
      </div>
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
          <img width={11} height={11} src="/img/plus.svg" alt="plus btn"></img>
        </button>
      </div>
    </div>
  );
}

export default Card;

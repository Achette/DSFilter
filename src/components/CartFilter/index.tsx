import "./styles.css";

export const CartFilter = () => {
  return (
    <div className="cart-filter-container">
      <div className="card-filter-content">
          <input type="text" placeholder="Preço mínimo" />
          <input type="text" placeholder="Preço máximo" />
          <button>Filtrar</button>
      </div>
    </div>
  );
};

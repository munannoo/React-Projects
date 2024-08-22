import { useEffect, useState } from "react";
import "../styles.css";

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result, "result");
      if (result && result.products && result.products.length > 0) {
        setProducts((prevData) => [...prevData, ...result.products]);
        console.log(products, "product");
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisabled(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading data!!</div>;
  }

  return (
    <div className="container">
      <div className="productContainer">
        {products && products.length
          ? products.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <button
        disabled={disabled}
        onClick={() => setCount(count + 1)}
        className="loadMoreBtn"
      >
        {disabled ? "No more data" : "Load more"}
      </button>
    </div>
  );
}

export default LoadMore;

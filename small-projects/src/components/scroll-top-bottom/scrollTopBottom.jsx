import { useRef } from "react";
import useFetch from "../useFetch-hook/useFetch";

export default function ScrollTopBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  if (pending) {
    return <h3>loading data pls wait...</h3>;
  }

  if (error) {
    return <h3>an error has occured!</h3>;
  }

  function handleToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function handleToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  console.log(bottomRef);

  return (
    <div>
      <h1>Scroll from Top to Bottom</h1>
      <h3>this is the top section</h3>
      <button onClick={handleToBottom}>to bottom</button>
      {data && data.products && data.products.length
        ? data.products.map((dataItem) => <p>{dataItem.title}</p>)
        : null}
      <h3>this is the bottom section</h3>
      <div ref={bottomRef}></div>
      <button onClick={handleToTop}>to top</button>
    </div>
  );
}

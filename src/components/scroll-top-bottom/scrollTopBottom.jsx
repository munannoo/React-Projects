import useFetch from "../useFetch-hook/useFetch";

export default function ScrollTopBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  if (pending) {
    return <h3>loading data pls wait...</h3>;
  }

  if (error) {
    return <h3>an error has occured!</h3>;
  }

  return (
    <div>
      <h1>Scroll from Top to Bottom</h1>
      <h3>this is the top section</h3>
      {data && data.products && data.products.length
        ? data.products.map((dataItem) => <p>{dataItem.title}</p>)
        : null}
      <h3>this is the bottom section</h3>
    </div>
  );
}

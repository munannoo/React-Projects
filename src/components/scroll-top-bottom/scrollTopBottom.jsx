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

  return <div></div>;
}

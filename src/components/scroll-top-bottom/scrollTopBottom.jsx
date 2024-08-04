import useFetch from "../useFetch-hook/useFetch";

export default function ScrollTopBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products&limit=100",
    {}
  );
  return <div></div>;
}

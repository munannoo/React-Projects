import useFetch from "./useFetch";

export default function UseFetchHookTest() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(data);

  return (
    <div>
      <h1>Custom useFetch Hook</h1>
      {loading ? <h3>pending data pls wait....</h3> : null}
      {error ? <h3>an error has occured!!</h3> : null}
      {data && data.products && data.products.length > 0
        ? data.products.map((dataItem) => {
            return <p>{dataItem.title}</p>;
          })
        : null}
    </div>
  );
}

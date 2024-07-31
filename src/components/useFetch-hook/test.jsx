import useFetch from "./useFetch";

export default function UseFetchHookTest() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Custom useFetch Hook</h1>
      {loading ? <h3>pending data pls wait....</h3> : null}
      {error ? <h3>an error has occured!!</h3> : null}
    </div>
  );
}

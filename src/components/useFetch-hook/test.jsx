import useFetch from "./useFetch";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Custom useFetch Hook</h1>
    </div>
  );
}

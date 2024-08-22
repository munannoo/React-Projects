export default function ListOfSearches({ data }) {
  console.log(data);
  return (
    <ul>
      {data && data.length
        ? data.map((dataItem, index) => <li key={index}>{dataItem}</li>)
        : console.log(data)}
    </ul>
  );
}

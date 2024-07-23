export default function ListOfSearches(data) {
  return (
    <ul>
      {data && data.length
        ? data.map((dataItem, index) => <li key={index}>{dataItem}</li>)
        : null}
    </ul>
  );
}

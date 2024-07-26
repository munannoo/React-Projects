import { useEffect } from "react";
import { useState } from "react";

export default function ScrollIndicator({ url }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [displayData, setDisplayData] = useState([]);

  async function handleFetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setLoading(false);
        setDisplayData(data.products);
        console.log(data, displayData);
      }
    } catch (e) {
      setError(e.error);
      console.log(e.error);
    }
  }

  useEffect(() => {
    handleFetchData(url);
  }, [url]);

  return (
    <div className="scrollContainer">
      {loading ? <div>loading data pls wait!</div> : null}
      <h1>SCROLL INDICATOR</h1>
      <div className="dataContainer">
        {displayData && displayData.length > 0
          ? displayData.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { useState } from "react";

export default function ScrollIndicator({ url }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  async function handleFetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      console.log(data);
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
      <h1>SCROLL INDICATOR</h1>
    </div>
  );
}

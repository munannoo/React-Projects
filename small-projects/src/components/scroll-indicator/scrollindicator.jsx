import { useEffect } from "react";
import { useState } from "react";
import "../styles.css";

export default function ScrollIndicator({ url }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [displayData, setDisplayData] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

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
      setLoading(false);
    }
  }

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
    console.log(scrollPercentage);
  }

  useEffect(() => {
    handleFetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => window.removeEventListener("scroll", () => {});
  });

  if (loading) {
    return <div>loading data pls wait!</div>;
  }

  if (error) {
    return <div>an error occured while fetching the data!</div>;
  }

  return (
    <div className="scrollContainer">
      <div className="scrollProgressContainer">
        <h1>SCROLL INDICATOR</h1>
        <div
          className="scrollBar"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
      <div className="dataContainer">
        {displayData && displayData.length > 0
          ? displayData.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  cosnt[(loading, setLoading)] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  async function fetchData() {
    try {
      const response = await fetch(url);
      const result = response.jsion();
      setData(result);
      setLoading(false);
    } catch (e) {
      console.log(e.error);
      setError(e.error);
      setLoading(false);
    }
  }
}

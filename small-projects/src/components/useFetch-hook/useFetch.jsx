import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (!response.ok) throw new Error(response.statusText);
      setData(result);
      setLoading(false);
      setError(null);
    } catch (e) {
      console.log(e.error);
      setError(e.error);
      setLoading(false);
    }
  }

  return { data, loading, error };
}

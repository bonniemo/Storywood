import { useEffect, useState } from "react";

type ApiResponse<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export const useFetch = <T>(url: string): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      setLoading(true);
      setError(null);

      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(`An error occurred: ${resp.statusText}`);
        }

        const jsonData: T = await resp.json();
        setData(jsonData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Sorry, An unknown Error has occured.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

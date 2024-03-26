import axios from "axios";

import { useEffect, useState } from "react";

export const UseFetch = ({ url, options }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log('init');
        const response = await axios.get(url, options);
        setData(response.data);
        console.log('response')
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return [data, loading, error];
};

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
        const response = await axios.get(url, options);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return [data, loading, error];
};
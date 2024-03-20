import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = ({ url, options }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  axios.defaults.baseURL = process.env.REACT_APP_API_URI

  useEffect(() => {
    setLoading(true);

    axios(`${url}`, options)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, options]);

  return [data, loading, error];
};

export { useFetch };
import { useState, useEffect } from "react";

const useFetch = (apiPath, searchTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results);
    }
    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;

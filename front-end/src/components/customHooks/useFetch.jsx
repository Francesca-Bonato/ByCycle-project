import { useEffect, useState } from "react";

function useFetch() {
  const [fetchdata, setFetchData] = useState([]);

  async function fetchURL() {
    try {
      const fetchData = await fetch("http://localhost:4000/users");
      const dataJSON = await fetchData.json();
      if (!dataJSON) {
        console.log(new Error("Error to fetch data!"));
        return;
      } else {
        console.log(fetchdata);
        setFetchData(dataJSON);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchURL();
  }, []);

  return { fetchdata };
}

export default useFetch;

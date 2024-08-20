import axios from "axios";
import { useState } from "react";

function useSearchApi(word) {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(undefined);
  async function fetch() {
    try {
      setLoading(true);
      setIsError(false);
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      const data = await axios.get(url);
      setData(data.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setData(undefined);
    } finally {
      setLoading(false);
      console.log("api call finished");
    }
  }
  return { loading, isError, data, fetch };
}

export default useSearchApi;

import { useState } from "react";
import { useForm } from "react-hook-form";

function Dictionary() {
  // states for api calls
  const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState(null);

  // api for dictionary
  const dictionaryApiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  async function fetchDictionaryApi(word) {
    console.log("API fetch started");
    setIsLoading(true);
    try {
      if (!word) {
        alert("Please enter a word to search for.");
        return;
      }
      const response = await fetch(dictionaryApiUrl + word);
      if (response.status !== 200) {
        alert("Word not found.");
        return;
      }
      const data = await response.json();
      setData(data);
      console.log(data);
      console.log("API fetch successful");
    } catch (error) {
      console.log("API fetch failed");
    } finally {
      console.log("API fetch completed");
      setIsLoading(false);
    }
  }

  // form handlers
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    fetchDictionaryApi(data.word);
  }
  return (
    <div>
      <h1>Dictionary</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("word")}
          type="text"
          placeholder="Insert word to search"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Search"}
        </button>
      </form>

      {data &&
        data.map((item, index) => (
          <div key={index}>
            <h4>{item.word}</h4>
            {item.phonetics.map((phonetic, index) => (
              <div key={index}>
                <h4>{phonetic.text}</h4>
              </div>
            ))}
            {item.meanings.map((meaning, index) => (
              <div key={index}>
                <h4>{meaning.partOfSpeech}</h4>
                {meaning.definitions.map((definition, index) => (
                  <div key={index}>
                    <p>{definition.definition}</p>
                    <p>{definition.example}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Dictionary;

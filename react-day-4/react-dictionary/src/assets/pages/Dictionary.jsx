import { useForm } from "react-hook-form";

function Dictionary() {
  // api for dictionary
  const dictionaryApiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  async function fetchDictionaryApi(word) {
    console.log("API fetch started");
    try {
      if (!word) {
        alert("Please enter a word to search for.");
        return;
      }
      const response = await fetch(dictionaryApiUrl + word);
      const data = await response.json();
      console.log(data);
      console.log("API fetch successful");
    } catch (error) {
      console.log("API fetch failed");
    } finally {
      console.log("API fetch completed");
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
        <button type="submit">Search</button>
      </form>
      <div>
        <h4>
          <strong>Word</strong>
        </h4>
        <span>-</span>
        <h4>
          <strong>Phonetics</strong>
        </h4>
        <span>-</span>
        <h4>
          <strong>Meanings</strong>
        </h4>
        <span>-</span>
      </div>
    </div>
  );
}

export default Dictionary;

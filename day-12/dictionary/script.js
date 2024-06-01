// handling the form
// get the value of word to search in input form
// console.log the value
// fetch the data from API - https://api.dictionaryapi.dev/api/v2/entries/en/${word}
// convert the response to json
// console.log the response
// display the data in the DOM

const form = document.querySelector("#searchForm");
const searchedWord = document.querySelector("#searchedWord");
const wordDefinition = document.querySelector("#wordDefinition");
const submitBtn = document.querySelector("#submitBtn");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const word = event.target[0].value;
  console.log(word);
  // loading state of button, changing text to loading and disabling the button
  submitBtn.innerText = "Loading...";
  submitBtn.disabled = true;
  // template string
  // use fetch to get the data from the API
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // fetch returns a promise
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const def = data[0].meanings[0].definitions[0].definition;
      searchedWord.innerText = word;
      wordDefinition.innerText = def;
    })
    .catch(function (error) {
      console.log(error);
      searchedWord.innerText = word;
      // handle based on the error
      wordDefinition.innerText = "Word not found";
    })
    //   finally block will run no matter what resolve or reject
    .finally(function () {
      // enabling the button and changing the text back to search
      submitBtn.disabled = false;
      submitBtn.innerText = "Search";
    });
});

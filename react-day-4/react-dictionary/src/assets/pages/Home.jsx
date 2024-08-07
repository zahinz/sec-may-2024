import { useState, useEffect } from "react";

function Home() {
  // for the best practive state always use constant to store the value of the state
  const [counter, setCounter] = useState(0);

  // increment is achieved by setting the counter to the current value of the counter plus 1
  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  // create a function which monitor the counter value, whenever the counter value more the 10, alert a message to the user that the counter value is more than 10
  // useEffect(a,b)
  // a: function to run when the state changes
  // b: state to run the function is form of array
  useEffect(
    function () {
      if (counter === 10) {
        //   mount react lifecycle
        alert("10 mounted");
        //   unmount react lifecycle
        return function () {
          alert("10 unmounted");
        };
      }
    },
    [counter]
  );
  return (
    <div>
      <h1>Home</h1>
      <hr />
      <div>
        <p>Counter</p>
        <h2>{counter}</h2>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <div>
          <label for="file">Downloading progress:</label>
          <progress id="file" value={counter} max="100">
            {counter}%
          </progress>
        </div>
      </div>
    </div>
  );
}

export default Home;

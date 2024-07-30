// react function component
// one function can return only one html element
// before return we can write javascript code
// we can use curly braces to run javascript code in html
function App() {
  const name = "Zahin";
  const age = 25;
  const favFoods = ["Pizza", "Burger", "Pasta", "Ice Cream", "Nasi Kandar"];
  const isAdmin = false;

  return (
    <div>
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to my first React app.</p>
      </div>
      <p>My name is {name}</p>
      <p>Age: {age} years old</p>
      <p>Adult: {age > 18 ? "Yes" : "No"}</p>
      <div>
        <h2>My favorite foods:</h2>
        <ul>
          {favFoods.map(function (item) {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <div>{isAdmin && <button>Go to dashboard</button>}</div>
    </div>
  );
}

export default App;

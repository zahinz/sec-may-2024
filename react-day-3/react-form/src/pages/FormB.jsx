import Header from "../components/Header";
import { formContainerStyle, inputContainer } from "./FormA";
import { useState } from "react";

function FormB() {
  const [data, setData] = useState({});

  function handleSubmit() {
    if (data.password !== data.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log(data);
  }

  function handleChange(e) {
    // we need to update the data state with the new key-value pair
    const value = e.target.value;
    const key = e.target.name;
    const object = { [key]: value };

    // we use the spread operator to merge the new key-value pair with the existing data object
    setData({ ...data, ...object });
  }
  return (
    <div>
      <Header />
      <h1>Form B</h1>
      <div style={formContainerStyle}>
        <h4>Register</h4>
        <div style={inputContainer}>
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Insert your email"
            onChange={handleChange}
          />
        </div>
        <div style={inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Insert your password"
            onChange={handleChange}
          />
        </div>
        <div style={inputContainer}>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}

export default FormB;

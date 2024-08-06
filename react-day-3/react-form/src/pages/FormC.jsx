import Header from "../components/Header";
import { formContainerStyle, inputContainer } from "./FormA";

function FormC() {
  function handleSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const data = {
      email,
      password,
      confirmPassword,
    };

    console.log(data);
  }
  return (
    <div>
      <Header />
      <h1>Form C</h1>
      <form onSubmit={handleSubmit} style={formContainerStyle}>
        <h4>Register</h4>
        <div style={inputContainer}>
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Insert your email"
          />
        </div>
        <div style={inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Insert your password"
          />
        </div>
        <div style={inputContainer}>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default FormC;

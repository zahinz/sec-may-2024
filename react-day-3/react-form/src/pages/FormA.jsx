import Header from "../components/Header";
import { useState } from "react";

export const formContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  margin: "0 auto",
  marginTop: "50px",
  border: "1px solid #000",
  borderRadius: "5px",
  width: "fit-content",
  padding: "20px 40px",
};

export const inputContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

function FormA() {
  // email state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // handleSubmit function
  function handleSubmit() {
    console.log("Form submitted");
    if (password !== confirmPassword) {
      alert("Password and confirm password must be the same");
      return;
    }
    const data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log(data);
  }

  // handle email input change
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  // handle password input change
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  // handle confirm password input change
  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  return (
    <div>
      <Header />
      <h1>Form A</h1>
      <div style={formContainerStyle}>
        <h4>Register</h4>
        <div style={inputContainer}>
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Insert your email"
            onChange={handleEmailChange}
          />
        </div>
        <div style={inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Insert your password"
            onChange={handlePasswordChange}
          />
        </div>
        <div style={inputContainer}>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}

export default FormA;

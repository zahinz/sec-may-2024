import Header from "../components/Header";
import {
  formContainer,
  inputContainer,
  sectionBorder,
  sectionContainer,
} from "../sharedStyles/form";

function Login() {
  return (
    <div>
      <Header />
      <div style={sectionContainer}>
        <section style={sectionBorder}>
          <h1 style={{ marginBottom: "1rem" }}>Login</h1>
          <form style={formContainer}>
            <div style={inputContainer}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div style={inputContainer}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button className="primary-black" type="submit">
              Login
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;

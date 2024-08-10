import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {
  formContainer,
  inputContainer,
  sectionBorder,
  sectionContainer,
} from "../sharedStyles/form";
import { useForm } from "react-hook-form";
import { postApi } from "../utils/api";
import Cookies from "js-cookie";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  // Create a function called loginApi that takes in data as an argument
  async function loginApi(data) {
    try {
      const res = await postApi("http://localhost:3000/auth/login", data);
      // Check if the response is not okay by using the ok property of the response object
      if (!res.ok) {
        const serverError = await res.json();
        const message = serverError.message;
        alert(message);
        throw new Error(message);
      }
      const resData = await res.json();
      const token = resData.token;
      console.log(token);
      alert("User logged in successfully");
      navigate("/dashboard");

      // save the token in cookie using js-cookie
      Cookies.set("authToken", token);
      reset();
    } catch (error) {
      console.error("Error at loginApi");
    }
  }

  // onSubmit function that calls the loginApi function
  function onSubmit(data) {
    loginApi(data);
  }
  return (
    <div>
      <Header />
      <div style={sectionContainer}>
        <section style={sectionBorder}>
          <h1 style={{ marginBottom: "1rem" }}>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} style={formContainer}>
            <div style={inputContainer}>
              <label htmlFor="email">Email</label>
              <input {...register("email")} type="email" id="email" />
            </div>
            <div style={inputContainer}>
              <label htmlFor="password">Password</label>
              <input {...register("password")} type="password" id="password" />
            </div>
            <div>
              <button className="primary-black" type="submit">
                Login
              </button>
              <span>
                {" "}
                or{" "}
                <Link to="/register" className="primary-black">
                  Register
                </Link>
              </span>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;

import { json, Link } from "react-router-dom";
import Header from "../components/Header";
import {
  formContainer,
  inputContainer,
  sectionBorder,
  sectionContainer,
} from "../sharedStyles/form";
import { useForm } from "react-hook-form";
import { postApi } from "../utils/api";

function Register() {
  const { register, handleSubmit, reset } = useForm();

  async function registerApi(data) {
    try {
      const res = await postApi("http://localhost:3000/auth/register", data);
      // Check if the response is not okay by using the ok property of the response object
      if (!res.ok) {
        const serverError = await res.json();
        const errors = serverError.errors;
        errors.forEach((error) => {
          alert(error.message);
        });
        throw new Error(serverError);
      }
      const resData = await res.json();
      console.log(resData);
      alert("User registered successfully");
      reset();
    } catch (error) {
      console.error("Error at registerApi");
    }
  }

  function onSubmit(data) {
    registerApi(data);
  }

  return (
    <div>
      <Header />
      <div style={sectionContainer}>
        <section style={sectionBorder}>
          <h1 style={{ marginBottom: "1rem" }}>Register</h1>
          <form onSubmit={handleSubmit(onSubmit)} style={formContainer}>
            <div style={inputContainer}>
              <label htmlFor="email">Email</label>
              <input {...register("email")} type="email" />
            </div>
            <div style={inputContainer}>
              <label htmlFor="username">Username</label>
              <input {...register("username")} type="text" />
            </div>
            <div style={inputContainer}>
              <label htmlFor="password">Password</label>
              <input {...register("password")} type="password" />
            </div>
            <div>
              <button type="submit" className="primary-black">
                Register
              </button>
              <span>
                {" "}
                or{" "}
                <Link to="/login" className="primary-black">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Register;

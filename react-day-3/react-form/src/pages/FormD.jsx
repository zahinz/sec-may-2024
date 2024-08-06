import Header from "../components/Header";
import { formContainerStyle, inputContainer } from "./FormA";
import { useForm } from "react-hook-form";

function FormD() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  function onSubmit(values) {
    if (values.password !== values.confirmPassword) {
      alert("Password and Confirm Password must be the same");
      return;
    }
    alert("Form submitted");
  }

  console.log(errors);
  return (
    <div>
      <Header />
      <h1>Form D</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={formContainerStyle}>
        <h4>Register</h4>
        <div style={inputContainer}>
          <label htmlFor="name">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Insert your email"
          />
          <span>{errors?.email?.message}</span>
        </div>
        <div style={inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            placeholder="Insert your password"
          />
          <span>{errors?.password?.message}</span>
        </div>
        <div style={inputContainer}>
          <label htmlFor="password">Confirm Password</label>
          <input
            {...register("confirmPassword", {
              required: "Confirm Password is required",
            })}
            type="password"
            placeholder="Confirm your password"
          />
          <span>{errors?.confirmPassword?.message}</span>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default FormD;

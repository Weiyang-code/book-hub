import { Link } from "react-router";
import "../css/Register.css";
import FormInput from "../components/FormInput";
import { useState } from "react";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter Email",
      required: true,
      errorMessage: "Enter valid email address"
    },
    {
      id: 2,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter Password",
      required: true,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  console.log(values);
  return (
    <>
      <div className="register mb-5">
        <h1 className="text-white fw-bold">Login to your account</h1>
        <div className="">
          <form className="card p-4 login" onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                handleChange={handleChange}
              />
            ))}
            <button type="submit" className="btn btn-light mt-4 text-black">
              Login
            </button>
          </form>
        </div>
        <div className="fw-normal">
          Don't have an account?
          <span>
            <Link to="/register" className="link p-1">
              Register
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;

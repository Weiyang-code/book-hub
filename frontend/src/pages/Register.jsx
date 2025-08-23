import "../css/Register.css";
import { Link, useNavigate } from "react-router";
import FormInput from "../components/FormInput";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      label: "Name",
      placeholder: "Enter Name",
      errorMessage:
        "Please enter letters only. Numbers and symbols are not allowed",
      required: true,
      pattern: "^[A-Za-z ]+$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter Email",
      errorMessage: "Enter valid email address",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter Password",
      errorMessage:
        "Password should be at least 12 characters long, and must have at least 1 upper case letter, 1 number, and 1 symbol",
      required: true,
      pattern: "^(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).{12,}$",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "Re-enter Password",
      errorMessage: "Password does not match",
      required: true,
      pattern: values.password
        ? `^${values.password.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`
        : "",
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();
      alert("You have succesfully registered!");
      navigate('/login');
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  console.log(values);

  return (
    <>
      <div className="register mb-5">
        <h1 className="text-white fw-bold mt-5">Welcome to Book Hub</h1>
        <form className="card p-4" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              handleChange={handleChange}
              errorMessage={input.errorMessage}
            />
          ))}
          <button type="submit" className="btn btn-light mt-4 text-black">
            Register
          </button>
        </form>
        <div className="fw-normal">
          Already have an account?
          <span>
            <Link to="/login" className="link p-1">
              Login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Register;

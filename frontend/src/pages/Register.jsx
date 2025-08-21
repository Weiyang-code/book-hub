import "../css/Register.css";
import {Link} from 'react-router'

function Register() {
  return (
    <>
      <div className="register mb-5">
        <h1 className="text-white fw-bold mt-5">Welcome to Book Hub</h1>
        <div className="">
          <form className="card p-4">
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <label for="confirm">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm"
                placeholder="Re-enter password"
              />
            </div>
            <button type="submit" className="btn btn-light mt-4 text-black">
              Register
            </button>
          </form>
        </div>
        <div className="fw-normal">
          Already have an account?
          <span>
            <Link to="/login" className="login p-1">
              Login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Register;

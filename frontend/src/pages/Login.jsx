import {Link} from 'react-router'
import '../css/Register.css'

function Login() {
  return (
    <>
      <div className="register mb-5">
        <h1 className="text-white fw-bold">Login to your account</h1>
        <div className="">
          <form className="card p-4">
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
            <button type="submit" className="btn btn-light mt-4 text-black">
              Login
            </button>
          </form>
        </div>
        <div className="fw-normal">
          Don't have an account?
          <span>
            <Link to="/register" className="login p-1">
              Register
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;

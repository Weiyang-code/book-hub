import { useEffect, useRef } from "react";
import "../css/NavigationBar.css";
import { Link } from "react-router";

function NavigationBar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        navbarRef.current.classList.add("navbar-scrolled");
      } else {
        navbarRef.current.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="navbar justify-content-between fixed-top p-3"
    >
      <a className="navbar-brand text-white">Book Hub</a>
      <div className="justify-space-between">
        <Link to="/login">
          <button className="btn fw-bold btn-hover text-white">Sign In</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-outline-light fw-bold btn-hover">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;

import { useEffect, useRef, useState } from "react";
import "../css/NavigationBar.css";
import { Link, useLocation } from "react-router";

function NavigationBar() {
  const navbarRef = useRef(null);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLanding = location.pathname === "/";
  const navbarClass = `navbar justify-content-between fixed-top p-3 ${
    !isLanding || scrolled ? "navbar-scrolled" : ""
  }`;

  return (
    <nav ref={navbarRef} className={navbarClass}>
      <a className="navbar-brand text-white">Book Hub</a>
      <div className="justify-space-between">
        <Link to="/login" className="signin">
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

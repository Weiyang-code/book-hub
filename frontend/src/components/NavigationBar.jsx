import "../css/NavigationBar.css";

function NavigationBar() {

  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 10) {
      navbar.classList.add('navbar-scrolled');
    } 
    else if (window.scrollY < 10) {
      navbar.classList.remove('navbar-scrolled');
    }
  })

  return (
    <>
      <nav className="navbar justify-content-between fixed-top p-3">
        <a className="navbar-brand text-white">Book Hub</a>
        <div className="justify-space-between">
          <button class="btn fw-bold btn-hover text-white">Sign In</button>
          <button class="btn btn-outline-light fw-bold btn-hover">Sign Up</button>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;

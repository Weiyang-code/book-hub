import NavigationBar from "./components/NavigationBar.jsx";
import Landing from "./pages/Landing.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  const hideNav = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNav && <NavigationBar />}

      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

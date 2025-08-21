import NavigationBar from "./components/NavigationBar.jsx";
import Landing from "./pages/Landing.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<><NavigationBar/> <Landing /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

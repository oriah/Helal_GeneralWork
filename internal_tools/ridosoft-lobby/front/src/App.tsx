import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Providers from "../components/Providers";
import Projects from "../components/Home";
import Recruits from "../components/Recruits";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />

        <Route path="/Providers" element={<Providers />} />
        <Route path="/Recruits" element={<Recruits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

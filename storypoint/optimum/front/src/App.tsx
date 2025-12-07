import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Management from "./components/Management";
import Assets from "./components/Assets";

function App() {
  return (
    // App.tsx
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/management" element={<Management />} />
          {/* optional: add pages per menu item */}
          <Route path="/assets" element={<Assets />} />
          <Route path="/calendar" element={<div>Calendar</div>} />
          <Route path="/team" element={<div>Team</div>} />
          <Route path="/service" element={<div>Service</div>} />
          <Route path="/settings" element={<div>Settings</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

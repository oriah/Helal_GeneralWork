import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SideNav from "./Components/SideNav";
import Dashboard from "./Components/Dashboard";
import CustomerPage from "./Components/CustomerPage";

function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* This stays on all pages */}
        <SideNav />

        {/* This changes according to the route */}
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customer-page" element={<CustomerPage />} />
            {/* <Route path="/products" element={<ProductsPage />} />
            <Route path="/admin" element={<AdminPage />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

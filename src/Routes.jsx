import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAddressPage from "./pages/AddAddressPage";
import EditAddressPage from "./pages/EditAddressPage";
import ListAddressPage from "./pages/ListAddressPage";
import HomePage from "./pages/HomePage";

export function AppRoutes({ handleClick }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage handleClick={handleClick} />} />
        <Route path="/listAddress" element={<ListAddressPage handleClick={handleClick} />} />
        <Route path="/addAddress" element={<AddAddressPage handleClick={handleClick} />} />
        <Route path="/editAddress" element={<EditAddressPage handleClick={handleClick} />} />
      </Routes>
    </Router>
  );
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddAddressPage from "./pages/AddAdressPage";

export function AppRoutes({handleClick}) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage  handleClick={handleClick}/>} />
        <Route path="/addAddress" element={<AddAddressPage handleClick={handleClick}/>} />
      </Routes>
    </Router>
  );
}
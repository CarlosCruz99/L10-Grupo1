import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Protected from "./Protected";
import CustomerList from "./CustomersList";
import SalesList from "./SalesList";
import SalesReport from "./SalesReport";

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/protected" element={<Protected />} />
      <Route path="/customers" element={<CustomerList />} />
      <Route path="/sales" element={<SalesList />} />
      <Route path="/report" element={<SalesReport />} />
    </Routes>
  </Router>
);

export default App;
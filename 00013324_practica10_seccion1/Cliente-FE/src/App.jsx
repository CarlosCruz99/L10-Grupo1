import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Protected from "./Protected";
import Customers from "./Customers";

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/protected" element={<Protected />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  </Router>
);

export default App;
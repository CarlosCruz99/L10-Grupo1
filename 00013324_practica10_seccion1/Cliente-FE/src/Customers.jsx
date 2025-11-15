import React, { useState, useEffect } from "react";
import API from "./utils/api";

const Customers = () => {
    const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const customerList = async () => {
      const response = await API.get("/customers");
      setCustomers(response.data);
    };
    customerList();
  }, []);
  

  return (
    <div>
      <h2>Customers</h2>

      <ul>
        {customers.map(c => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
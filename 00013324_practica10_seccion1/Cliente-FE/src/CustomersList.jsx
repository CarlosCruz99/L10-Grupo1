import React, { useState, useEffect } from "react";
import API from "./utils/api";

const CustomerList = () => {
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
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Código</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.address}</td>
                <td>{c.phone}</td>
                <td>{c.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default CustomerList;
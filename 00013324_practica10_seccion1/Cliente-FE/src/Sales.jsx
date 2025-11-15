import React, { useState, useEffect } from "react";
import API from "./utils/api";

const Sales = () => {
    const [sales, setSales] = useState([]);

  useEffect(() => {
    const salesList = async () => {
      const response = await API.get("/sales");
      setSales(response.data);
    };
    salesList();
  }, []);
  
  return (
    <div>
      <h2>Sales</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount</th>
              <th>Created at</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.amount}</td>
                <td>{s.created_at}</td>
                <td>{s.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default Sales;
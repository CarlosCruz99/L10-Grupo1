import React, { useState, useEffect } from "react";
import API from "./utils/api";

const SalesReport = () => {
    const [report, setReport] = useState([]);

  useEffect(() => {
    const reportList = async () => {
      const response = await API.get("/report");
      setReport(response.data);
    };
    reportList();
  }, []);
  
  return (
    <div>
      <h2>Reporte de ventas</h2>
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Total de Ventas</th>
            </tr>
          </thead>
          <tbody>
            {report.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.total_sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default SalesReport;
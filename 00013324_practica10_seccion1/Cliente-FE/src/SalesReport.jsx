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
      <div className="tabla cols-2">
        <div className="titulo">Cliente</div>
        <div className="titulo">Total de Ventas</div>
            {report.map((s) => (
              <React.Fragment key={s.id}>
                <div>{s.name}</div>
                <div>{s.total_sales}</div>
              </React.Fragment>
            ))}
      </div>
    </div>
  );
};

export default SalesReport;
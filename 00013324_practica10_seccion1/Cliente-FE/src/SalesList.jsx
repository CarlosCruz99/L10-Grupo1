import React, { useState, useEffect } from "react";
import API from "./utils/api";

const SalesList = () => {
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
      <h2>Ventas</h2>
        <div className="tabla cols-4">
              <div className="titulo">ID</div>
              <div className="titulo">Monto</div>
              <div className="titulo">Fecha de creación</div>
              <div className="titulo">Nombre</div>
            {sales.map((s) => (
              <React.Fragment key={s.id}>
                <td>{s.id}</td>
                <td>{s.amount}</td>
                <td>{s.created_at}</td>
                <td>{s.name}</td>
              </React.Fragment>
            ))}
        </div>
    </div>
  );
};

export default SalesList;
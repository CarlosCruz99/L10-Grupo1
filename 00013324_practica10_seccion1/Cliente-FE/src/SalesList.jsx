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
                <div>{s.id}</div>
                <div>{s.amount}</div>
                <div>{s.created_at}</div>
                <div>{s.name}</div>
              </React.Fragment>
            ))}
        </div>
    </div>
  );
};

export default SalesList;
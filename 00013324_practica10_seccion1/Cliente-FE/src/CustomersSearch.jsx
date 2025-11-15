import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API from "./utils/api";

const CustomerSearch = () => {
    const [customers, setCustomers] = useState([]);
    const location = useLocation();
    const params = new URLSearchParams(location.search)
    const code = params.get("code")

  useEffect(() => {
    const customerList = async () => {
      const response = await API.get(`/customers/search?code=${code}`);
      setCustomers(response.data);
    };
    customerList();
  }, []);
  
  return (
    <div>
      <h2>Clientes con el código {code}</h2>
      <div className="tabla cols-5">
        <div className="titulo">ID</div>
        <div className="titulo">Nombre</div>
        <div className="titulo">Dirección</div>
        <div className="titulo">Teléfono</div>
        <div className="titulo">Código</div>
        {customers.map((c) => (
          <React.Fragment key={c.id}>
            <div>{c.id}</div>
            <div>{c.name}</div>
            <div>{c.address}</div>
            <div>{c.phone}</div>
            <div>{c.code}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CustomerSearch;
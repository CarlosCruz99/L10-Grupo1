import React, { useState } from "react";
import API from "./utils/api";

const RegisterSale = () => {
  const [amount, setAmount] = useState("");
  const [id_customer, setIdCustomer] = useState("");
  const [error, setError] = useState("");

  const handleRegisterSale = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/sales", { amount, id_customer });
      const token = response.data._jwt || response.data.token;
      localStorage.setItem("token", token);
      alert("Se ha registrado la venta");
    } catch (err) {
      setError(err.response?.data?.message || "No se ha podido registrar la venta");
    }
  };

  return (
    <div>
        <h2>Registro de ventas</h2>
        <form onSubmit={handleRegisterSale}>
        <input type="number" placeholder="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input type="number" placeholder="id_customer" value={id_customer} onChange={(e) => setIdCustomer(e.target.value)} />
        <div></div>
        <button type="submit">Registrar venta</button>
        {error && <p>{error}</p>}
        </form>
    </div>

  );
};

export default RegisterSale;
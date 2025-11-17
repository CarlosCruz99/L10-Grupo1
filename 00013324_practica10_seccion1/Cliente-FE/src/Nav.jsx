import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="app-nav">
   
        <div className="links">
          <NavLink to="/customers" >Clientes  </NavLink>
          <NavLink to="/customers/search" >Buscar  </NavLink>
          <NavLink to="/sales" >Ventas  </NavLink>
          <NavLink to="/report" >Reporte  </NavLink>
          <NavLink to="/login" >Login   </NavLink>
        </div>

    </nav>
  );
};

export default Nav;

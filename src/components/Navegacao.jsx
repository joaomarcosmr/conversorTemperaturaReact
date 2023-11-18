import React from "react";
import { NavLink } from "react-router-dom";

const Navegacao = () => (
  <ul>
    <li>
      <NavLink to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/frontend">
        Frontend
      </NavLink>
    </li>
    <li>
      <NavLink to="/programacao">
        Programacao
      </NavLink>
    </li>
    <li>
      <NavLink to="/design">
        Design
      </NavLink>
    </li>
    <li>
      <NavLink to="/catalogo">
        Catalogo
      </NavLink>
    </li>
  </ul>
);

export default Navegacao;

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartCountSelector } from "./store.js";

export default function Navbar(props) {
  
  /* Code without Redux
    
    const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  */

  const cartCount = useSelector(cartCountSelector);

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

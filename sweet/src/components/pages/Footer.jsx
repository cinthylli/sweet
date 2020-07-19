import React from "react";
import "../../styles/footer.css"

export default function Footer() {
  return (
    <footer>
      <ul className="footer-left">
        <li>
          <a href="/">Terminos & Condiciones</a>
        </li>
        <li>
          <a href="/">Nosotros</a>
        </li>
        <li>
          <a href="/">Promociones</a>
        </li>
      </ul>
      <ul className="footer-right">
        <li>
          <a href="/">Facebook</a>
        </li>
        <li>
          <a href="/">Twitter</a>
        </li>
        <li>
          <a href="/">Instagram</a>
        </li>
      </ul>
    </footer>
  );
}

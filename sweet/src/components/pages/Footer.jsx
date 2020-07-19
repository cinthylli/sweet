import React from "react";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <ul className="footer-left">
        <li>
          <a href="/" target="blank">
            Terminos & Condiciones
          </a>
        </li>
        <li>
          <a href="/" target="blank">
            Nosotros
          </a>
        </li>
        <li>
          <a href="/" target="blank">
            Promociones
          </a>
        </li>
      </ul>
      <ul className="footer-right">
        <li>
          <a href="/" target="blank">
            Facebook
          </a>
        </li>
        <li>
          <a href="/" target="blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="/" target="blank">
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
}

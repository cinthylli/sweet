import React from "react";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <ul className="footer-left" id="menu">
        <li>
          <a href="/" target="blank" className="text-focus-in">
            Terminos & Condiciones
          </a>
        </li>
        <li>
          <a href="/" target="blank" className="text-focus-in">
            Nosotros
          </a>
        </li>
        <li>
          <a href="/" target="blank" className="text-focus-in">
            Promociones
          </a>
        </li>
      </ul>
      <ul className="footer-right" id="social-media">
        <li>
          <a href="/" target="blank" className="text-focus-in">
            Facebook
          </a>
        </li>
        <li>
          <a href="/" target="blank" className="text-focus-in">
            Twitter
          </a>
        </li>
        <li>
          <a href="/" target="blank" className="text-focus-in">
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
}

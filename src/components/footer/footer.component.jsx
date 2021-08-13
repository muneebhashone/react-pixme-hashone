import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import "./footer.styles.css";

function Footer({ variation }) {
  return (
    <div className={`${variation === "home" ? "footer-home" : ""} footer`}>
      <Container>
        <div className="container">
          <ul className="footer_menu">
            <li className="footer_menu-list-item">
              <Link to="#">Privacy Policy</Link>
            </li>
            <li className="footer_menu-list-item">&#x25CF;</li>
            <li className="footer_menu-list-item">
              <Link to="#">Terms and Conditions</Link>
            </li>
          </ul>
          <div className="footer_copyright">
            Copyright &copy; 2021- Pix Me A Brink. All Copyrights Reserved.
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

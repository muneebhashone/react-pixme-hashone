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
              <Link to="privacy-policy">Privacy Policy</Link>
            </li>
            <li className="footer_menu-list-item">&#x25CF;</li>
            <li className="footer_menu-list-item">
              <Link to="privacy-policy">Terms and Conditions</Link>
            </li>
          </ul>
          <div className="footer_copyright">
            Copyright &copy; 2022- Pix Me A Drink. All Copyrights Reserved.
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

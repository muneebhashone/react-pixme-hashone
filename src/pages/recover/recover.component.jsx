import React from "react";
import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./recover.styles.css";

function Recover() {
  return (
    <Container>
      <div className="login-signup">
        <div className="container">
          <h1 className="page-heading">Recover Your Password</h1>
          <Container maxWidth="sm">
            <form className="login-signup_form">
              <CustomInput type="email" placeholder="Email Address" />
              <CustomButton text="Send Email" />
            </form>
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default Recover;

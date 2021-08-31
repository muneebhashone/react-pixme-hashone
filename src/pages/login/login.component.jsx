import React from "react";
import {
  Container,
  Button,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { signInStart } from "../../redux/user/user.action";
import "./login.styles.css";

const useStyles = makeStyles((theme) => {
  return {
    btnRoot: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      fontSize: 16,
    },
    btnFacebook: {
      backgroundColor: "#3B5998",
    },
    btnGoogle: {
      backgroundColor: "#CD2900",
    },
  };
});

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(5, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function Login() {
  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  if (currentUser || localStorage.getItem("currentUser")) {
    history.push("/pixme/customer");
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(signInStart(values));
    },
  });

  return (
    <Container>
      <div className="login-signup">
        <div className="container">
          <h1 className="page-heading">Login</h1>
          <Container maxWidth="sm">
            <form className="login-signup_form" onSubmit={formik.handleSubmit}>
              <TextField
                variant="outlined"
                type="email"
                name="email"
                label="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                variant="outlined"
                type="password"
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                classes={{ root: classes.btnRoot }}
                color="primary"
                type="submit"
                variant="contained"
                size="large"
                disableElevation
              >
                Log In
              </Button>
              <div className="divider">OR</div>
              <Button
                className={classes.btnFacebook}
                classes={{ root: classes.btnRoot }}
                color="primary"
                type="submit"
                variant="contained"
                size="large"
                disableElevation
                startIcon={<FaFacebook />}
              >
                Login with Facebook
              </Button>
              <Button
                className={classes.btnGoogle}
                classes={{ root: classes.btnRoot }}
                color="primary"
                type="submit"
                variant="contained"
                size="large"
                disableElevation
                startIcon={<FcGoogle />}
              >
                Login with Google
              </Button>
            </form>
          </Container>
          <Link to="/signup" className="already-member">
            Create New Account? Sign Up
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Login;

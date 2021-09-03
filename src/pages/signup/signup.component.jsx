import React, { useEffect } from "react";
import {
  Container,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  CircularProgress,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useFormik } from "formik";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { signUpStart } from "../../redux/user/user.action";
import { useHistory } from "react-router";
import "./signup.styles.css";

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
  name: yup.string("Enter your full name").required("Full Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .required("Password is required")
    .min(8, "Password should be of minimum 8 characters length"),
  terms: yup.boolean().isTrue("Terms and Conditions must be checked"),
});

function Signup() {
  const { currentUser, isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  // if (localStorage.getItem("currentUser")) {
  //   history.push("/pixme/customer");
  // }

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      history.push("/pixme/customer");
    }
  }, [currentUser]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      delete values["terms"];
      dispatch(signUpStart(values));
    },
  });

  return (
    <Container>
      <div className="login-signup">
        <div className="container">
          {isFetching ? <CircularProgress /> : null}
          {error ? <Alert severity="error">{error}</Alert> : null}
          <h1 className="page-heading">Signup</h1>
          <Container maxWidth="sm">
            <form className="login-signup_form" onSubmit={formik.handleSubmit}>
              <TextField
                variant="outlined"
                type="text"
                name="name"
                label="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formik.values.terms}
                    onChange={formik.handleChange}
                    inputProps={{ "aria-label": "Terms" }}
                    name="terms"
                  />
                }
                label={`I accept all Terms & Conditions`}
              />
              <FormHelperText error>
                {formik.errors.terms &&
                  formik.touched.terms &&
                  formik.errors.terms}
              </FormHelperText>
              <Button
                classes={{ root: classes.btnRoot }}
                color="primary"
                type="submit"
                variant="contained"
                size="large"
                disableElevation
              >
                Sign Up
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
                Continue with Facebook
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
                Continue with Google
              </Button>
            </form>
          </Container>
          <Link to="/pixme/login" className="already-member">
            Already have account? Login
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Signup;

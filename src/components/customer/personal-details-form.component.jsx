import React, { useRef, useState } from "react";
import { Grid, TextField, Button, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DisplayPicture from "../../assets/displaypicture.png";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  formRoot: {
    textAlign: "right",
  },
  personalDetails: {
    marginTop: theme.spacing(4),
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  largeAvatar: {
    width: "100%",
    height: "100%",
  },
  button: {
    marginTop: theme.spacing(3),
  },
  imgButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    borderRadius: "50%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "90px",
    height: "90px",
    "&:hover": {
      opacity: "0.7",
    },
  },
  cameraIcon: {
    position: "absolute",
    bottom: "5px",
    color: "white",
  },
}));

function PersonalDetailsForm({ currentUser }) {
  const [image, setImage] = useState("");

  const getBase64 = (file) => {
    let encodedImg = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      encodedImg = reader.result;
      setImage(encodedImg);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const formik = useFormik({
    initialValues: {
      firstName: currentUser.first_name,
      lastName: currentUser.last_name,
      email: currentUser.email,
      phone: currentUser.phone,
      address: currentUser.country,
    },
    onSubmit: (values) => {
      values["user_id"] = currentUser.id;
      if (image) {
        values["image"] = image;
      }
      console.log(values);
    },
  });

  const fileInput = useRef(null);

  const handlePictureClick = () => {
    fileInput.current.click();
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes.avatar}>
        <button className={classes.imgButton} onClick={handlePictureClick}>
          <img
            src={DisplayPicture}
            alt="Profile"
            className={classes.largeAvatar}
          />
          <CameraAltIcon className={classes.cameraIcon} />
          <input
            type="file"
            onChange={(e) => getBase64(e.target.files[0])}
            ref={fileInput}
            hidden
          />
        </button>
        <Typography variant="h5">
          {`${currentUser.first_name} ${currentUser.last_name}`}
        </Typography>
      </div>
      <div className={classes.personalDetails}>
        <form onSubmit={formik.handleSubmit} className={classes.formRoot}>
          <Grid container spacing={3}>
            <Grid item lg={6}>
              <TextField
                type="text"
                name="firstName"
                label="First Name"
                fullWidth
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                type="text"
                name="lastName"
                label="Last Name"
                fullWidth
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                type="email"
                name="email"
                label="Email Address"
                fullWidth
                variant="outlined"
                // onChange={formik.handleChange}
                value={formik.values.email}
                disabled
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                type="number"
                name="phone"
                label="Phone Number"
                fullWidth
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                type="text"
                name="address"
                label="Residential Address"
                fullWidth
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </Grid>
          </Grid>
          <Button
            className={classes.button}
            classes={{ root: classes.buttonRoot }}
            size="large"
            variant="contained"
            color="primary"
            disableElevation
            type="submit"
          >
            Save Changes
          </Button>
        </form>
      </div>
    </>
  );
}

export default PersonalDetailsForm;

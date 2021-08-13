import React, { useState } from "react";
import AdminLayout from "../../../components/admin-layout/admin-kayout.component";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, TextField, Grid, Button } from "@material-ui/core";
import DisplayPicture from "../../../assets/displaypicture.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  personalDetails: {
    marginTop: theme.spacing(4),
  },
  accordians: {
    width: "100%",
    display: "block",
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  largeAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  button: {
    marginTop: theme.spacing(3),
  },
  formRoot: {
    textAlign: "right",
  },
  buttonRoot: {
    padding: "10px 35px",
  },
}));

function Profile() {
  const classes = useStyles();
  return (
    <AdminLayout heading="Profile" active={0}>
      <Accordion defaultExpanded={true} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Personal</Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.accordians }}>
          <div className={classes.personal}>
            <div className={classes.avatar}>
              <Avatar src={DisplayPicture} className={classes.largeAvatar} />
              <Typography variant="h5">John Doe</Typography>
            </div>
            <div className={classes.personalDetails}>
              <form className={classes.formRoot}>
                <Grid container spacing={3}>
                  <Grid item lg={6}>
                    <TextField
                      type="text"
                      name="fname"
                      label="First Name"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      type="text"
                      name="lname"
                      label="Last Name"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      type="email"
                      name="email"
                      label="Email Address"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      type="number"
                      name="phone-number"
                      label="Phone Number"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item lg={12}>
                    <TextField
                      type="text"
                      name="address"
                      label="Residential Address"
                      fullWidth
                      variant="outlined"
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
                >
                  Save Changes
                </Button>
              </form>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Payment Methods</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Security</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AdminLayout>
  );
}

export default Profile;

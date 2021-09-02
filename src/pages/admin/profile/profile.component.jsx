import React from "react";
import AdminLayout from "../../../components/admin-layout/admin-layout.component";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector } from "react-redux";
import PersonalDetailsForm from "../../../components/customer/personal-details-form.component";

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
  buttonRoot: {
    padding: "10px 35px",
  },
}));

function Profile() {
  const { currentUser } = useSelector((state) => state.user);

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
            {currentUser && <PersonalDetailsForm currentUser={currentUser} />}
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

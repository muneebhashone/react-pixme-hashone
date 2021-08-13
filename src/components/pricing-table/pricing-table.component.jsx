import React from "react";
import {
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    package: {
      display: "flex",
      gap: "10px",
      "& sub": {
        marginTop: "auto",
      },
      "& sup": {
        marginTop: theme.spacing(3),
      },
      marginTop: "25px",
    },
    hOne: {
      fontWeight: "700",
    },
    buttonRoot: {
      fontSize: theme.spacing(2),
      padding: "10px 65px",
      marginTop: theme.spacing(2),
    },
    ulRoot: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      width: "60%",
      "& li": {
        paddingTop: "0px",
        paddingBottom: "0px",
      },
    },
  };
});

function PricingTable() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} variant="outlined">
      <Typography variant="h5">Regular Subscribtion</Typography>
      <Typography variant="body1">
        Choose a monthly plan for the best bang
      </Typography>
      <div className={classes.package}>
        <sup>
          <Typography variant="h5">US$ </Typography>
        </sup>
        <Typography classes={{ h1: classes.hOne }} variant="h1">
          9.99
        </Typography>
        <sub>
          {" "}
          <Typography variant="h5"> / month </Typography>
        </sub>
      </div>
      <Typography variant="body1">Cancel anytime within the month.*</Typography>
      <List className={classes.ulRoot}>
        <ListItem disableGutters>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary="Item 1" />
        </ListItem>
      </List>
      <Button
        classes={{ root: classes.buttonRoot }}
        variant="contained"
        color="primary"
        size="large"
        disableElevation
      >
        Subscribe
      </Button>
    </Paper>
  );
}

export default PricingTable;

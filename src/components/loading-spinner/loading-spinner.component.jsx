import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

function LoadingSpinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={100} color="primary" />
    </div>
  );
}

export default LoadingSpinner;

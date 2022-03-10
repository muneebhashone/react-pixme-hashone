import React from "react";
import { Modal, Box, Typography, Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { differenceInYears } from "date-fns";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const calculateAge = (dob) => {
  return differenceInYears(new Date(), dob);
};

const ageLimit = 21;

const AgeRestriction = () => {
  const [open, setOpen] = React.useState(true);

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [allowed, setAllowed] = React.useState(true);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const checkAge = () => {
    let isAllowed = localStorage.getItem("ageAllowed");

    if (isAllowed !== null) {
      isAllowed = Number(isAllowed);

      if (isAllowed) {
        setOpen(false);
        setAllowed(true);
      }
    }
  };

  const handleConfirm = () => {
    const age = calculateAge(selectedDate);
    if (age < ageLimit) {
      alert("You are not allowed to visit this site");
      setAllowed(false);
    } else {
      setOpen(false);
      localStorage.setItem("ageAllowed", "1");
    }

    checkAge();
  };

  React.useEffect(() => {
    checkAge();
  }, []);

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {allowed ? (
          <>
            <Typography
              align="center"
              id="modal-modal-title"
              variant="h5"
              component="h2"
            >
              Please confirm your age
            </Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div style={{ textAlign: "center" }}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Select your Date of Birth"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </div>
            </MuiPickersUtilsProvider>
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <Button
                onClick={handleConfirm}
                variant="contained"
                color="primary"
              >
                CONFIRM AGE
              </Button>
            </div>
          </>
        ) : (
          <Typography
            align="center"
            id="modal-modal-title"
            variant="h5"
            component="h2"
          >
            You are not allowed to visit this website
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default AgeRestriction;

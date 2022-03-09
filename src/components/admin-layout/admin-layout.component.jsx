import React, { useState, useEffect } from "react";
import { Tabs, Tab, Typography, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineCrown } from "react-icons/ai";
import { BiLabel } from "react-icons/bi";
import { BsBoxArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { URL } from "../../config";

const adminRightWidth = 240;

const useStyles = makeStyles(() => {
  return {
    container: {
      paddingTop: "80px",
      paddingBottom: "80px",
      display: "flex",
      gap: "25px",
    },
    tab: {
      display: "flex",
      flexDirection: "row",
      alignItem: "center",
      justifyContent: "flex-start",
      gap: "10px",
      "& svg": {
        marginBottom: "0px !important",
      },
    },
    tabLabelIcon: {
      minHeight: "auto",
    },
    heading: {
      color: "#000",
      fontWeight: "600",
    },
    adminContent: {
      marginTop: "35px",
      minHeight: "100vh",
    },
    adminLeft: {
      minWidth: adminRightWidth,
    },
    adminRight: {
      flexGrow: 1,
    },
  };
});

function AdminLayout({ children, heading, active }) {
  const [activeTab, setActiveTab] = useState(active);
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.user);

  const tabsIndex = {
    0: "profile",
    1: "wishlist",
    2: "reviews",
    3: "subscription",
    4: "signout",
  };

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    history.push(`${URL}/customer/${tabsIndex[newValue]}`);
    setActiveTab(newValue);
  };

  if (!localStorage.getItem("currentUser")) {
    history.push(`${URL}/login`);
  }

  useEffect(() => {
    setActiveTab(active);
  }, [setActiveTab]);

  // useEffect(() => {
  //   if (!localStorage.getItem("currentUser")) {
  //     history.push(`${URL}/login`);
  //   }
  // }, [currentUser]);

  return (
    <div>
      <Container className={classes.container}>
        <div className={classes.adminLeft}>
          <Typography className={classes.heading} variant="h4">
            My Account
          </Typography>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={activeTab}
            className={classes.adminContent}
            onChange={handleChange}
          >
            <Tab
              classes={{
                wrapper: classes.tab,
                labelIcon: classes.tabLabelIcon,
              }}
              icon={<CgProfile />}
              label="Profile"
            ></Tab>
            <Tab
              classes={{
                wrapper: classes.tab,
                labelIcon: classes.tabLabelIcon,
              }}
              icon={<AiOutlineHeart />}
              label="Wishlist"
            ></Tab>
            <Tab
              classes={{
                wrapper: classes.tab,
                labelIcon: classes.tabLabelIcon,
              }}
              icon={<AiOutlineCrown />}
              label="Reviews"
            ></Tab>
            <Tab
              classes={{
                wrapper: classes.tab,
                labelIcon: classes.tabLabelIcon,
              }}
              icon={<BiLabel />}
              label="Subscribtion"
            ></Tab>
            <Tab
              classes={{
                wrapper: classes.tab,
                labelIcon: classes.tabLabelIcon,
              }}
              icon={<BsBoxArrowRight />}
              label="Sign Out"
            ></Tab>
          </Tabs>
        </div>
        <div className={classes.adminRight}>
          <Box>
            <Typography variant="h5">{heading}</Typography>
            <div className={classes.adminContent}>{children}</div>
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default AdminLayout;

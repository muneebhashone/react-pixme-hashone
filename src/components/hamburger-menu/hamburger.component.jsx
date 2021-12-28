import React from "react";
import { Drawer, Button, Box } from "@material-ui/core";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./hamburger-menu.styles.css";

function HamburgerMenu({ children, ...props }) {
  const [open, setOpen] = React.useState(false);

  const handleOnClose = () => {
    setOpen(false);
  };

  return (
    <div {...props}>
      <Button onClick={() => setOpen(true)}>
        <div className="hamburger-icon">
          <GiHamburgerMenu />
        </div>
      </Button>
      <Drawer
        PaperProps={{ style: { maxWidth: "400px" } }}
        anchor={"right"}
        open={open}
        onClose={handleOnClose}
      >
        <div className="drawer-close-icon" onClick={handleOnClose}>
          <AiOutlineCloseCircle />
        </div>
        <div className="drawer-container">{children}</div>
      </Drawer>
    </div>
  );
}

export default HamburgerMenu;

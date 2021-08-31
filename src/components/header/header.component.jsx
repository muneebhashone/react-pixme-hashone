import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { BsSearch, BsGrid3X3Gap } from "react-icons/bs";
import { useHistory, useLocation } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { clearCurrentUser } from "../../redux/user/user.action";
import SearchInput from "../search-input/search-input.component";
import "./header.styles.css";

function Header({ variation }) {
  const { currentUser } = useSelector((state) => state.user);
  const [localUser, setLocalUser] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearCurrentUser());
    // location.reload();
  };

  useEffect(() => {
    setLocalUser(JSON.parse(localStorage.getItem("currentUser")));
  }, [currentUser]);

  return (
    <div className={`${variation === "home" ? "header-home" : ""} header`}>
      <Container>
        <div className="container">
          <Link to="/pixme" className="header_brand">
            <img src={logo} alt="" />
          </Link>
          <SearchInput />
          <div className="header_nav-items">
            <Link to="/pixme/drinks">Spirits</Link>
            <Link to="/pixme/flavours">Ingredients</Link>
          </div>
          <div className="header_right">
            <div className="header_nav-items">
              {localUser !== null || currentUser !== null ? (
                <>
                  <Button
                    variant="contained"
                    type="button"
                    disableElevation
                    color="primary"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                  <div className="header_menu">
                    <BsGrid3X3Gap className="header_menu-icon" color="white" />
                  </div>
                  <div className="header_user">
                    <img src={user} alt="" />
                  </div>
                </>
              ) : (
                <>
                  <Link to="/pixme/signup">Sign Up</Link>
                  <Link to="/pixme/login">Login</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;

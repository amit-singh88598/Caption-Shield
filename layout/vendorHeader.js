import React from "react";
import SearchBar from "../Components/searchBar";
import {
  AppBar,
  Avatar,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import Setting from "../Components/setting";
import Notification from "../Components/notification";
import { useRouter } from "next/router";
import {
  AccountCircle,
  Dashboard,
  ListAlt,
  PeopleAlt,
  Receipt,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginLeft: 5,
      fontSize: "1.6em",
      cursor: "pointer",
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  mobStyle: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function VendorHeader() {
  const classes = useStyles();
  const router = useRouter();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            onClick={() => router.push("#")}
            alt="Remy Sharp"
            src="/logo1.png"
            className={classes.large}
          />
          <a
            onClick={() => router.push("#")}
            className={classes.title}
            variant="h5"
          >
            Captain Shield
          </a>
          {/* <SearchBar /> */}
          <div style={{ display: "flex", marginLeft: "auto" }}>
            <Notification />
            <Setting />
            <div>
              {auth && (
                <div className={classes.mobStyle}>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => router.push("/vendor/dashboard")}>
                      <Dashboard style={{ marginRight: 10 }} />
                      Dashboard
                    </MenuItem>
                    <MenuItem onClick={() => router.push("/vendor/purchase")}>
                      <Receipt style={{ marginRight: 10 }} />
                      Purchase
                    </MenuItem>
                    <MenuItem onClick={() => router.push("/vendor/sale")}>
                      <ListAlt style={{ marginRight: 10 }} />
                      Sale
                    </MenuItem>
                    <MenuItem onClick={() => router.push("/vendor/userList")}>
                      <PeopleAlt style={{ marginRight: 10 }} />
                      Users List
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { makeStyles, Tooltip } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { useRouter } from "next/router";
import jsCookies from "js-cookies";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.light,
  },
}));

export default function Setting() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ marginTop: 5 }}
      >
        <Tooltip disableFocusListener disableTouchListener title="Settings">
          <ExitToApp className={classes.root} size="large" />
        </Tooltip>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        style={{ marginTop: 50 }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div>
          <Button
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: 15,
            }}
            fullWidth
            onClick={() => {
              jsCookies.removeItem("auth");
              router.replace("/login");
            }}
          >
            <ExitToApp style={{ marginRight: 10 }} />
            Logout
          </Button>
        </div>
      </Menu>
    </div>
  );
}

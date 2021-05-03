import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, Tooltip } from "@material-ui/core";
import { NotificationsActive } from "@material-ui/icons";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.light,
  },
}));

export default function Notification() {
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <a
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "flex-start",
        }}
        onClick={() => router.push("#")}
      >
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ marginTop: 5 }}
        >
          <Tooltip
            disableFocusListener
            disableTouchListener
            title="Notifications"
          >
            <NotificationsActive className={classes.root} size="large" />
          </Tooltip>
        </Button>
      </a>
    </div>
  );
}

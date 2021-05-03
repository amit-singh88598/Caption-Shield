import { Avatar, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Dashboard, ListAlt, Receipt } from "@material-ui/icons";
import { useRouter } from "next/router";
import { getProfile } from "../../actions/vendor";
import capitalize from "../capitalize";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: "100%",
  },
  detail: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.light,
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginTop: 15,
  },
  listItem: {
    color: theme.palette.primary.light,
  },
}));

function SideBar(props) {
  const classes = useStyles();
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  useEffect(async () => {
    // axios.defaults.withCredentials = true;
    await getProfile((error, result) => {
      if (error) {
        console.log(error);
      } else {
        setProfile(result.data);
      }
    });
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.detail}>
        <Avatar alt="Remy Sharp" src="/avatar3.png" className={classes.large} />
      </div>
      <Typography
        style={{
          marginTop: 20,
        }}
        className={classes.detail}
      >
        {/* {capitalize(profile && `${profile.firstName} ${profile.lastName}`)} */}
        {profile && capitalize(`${profile.firstName} ${profile.lastName}`)}
      </Typography>
      <Typography className={classes.detail} variant="body2">
        Admin
      </Typography>
      <div style={{ marginTop: 20 }} className={classes.detail}>
        <List className={classes.listItem}>
          <ListItem button>
            <a
              style={{ display: "flex" }}
              onClick={() => router.push("/admin/dashboard")}
            >
              <ListItemIcon>
                <Dashboard className={classes.listItem} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </a>
          </ListItem>

          <ListItem button>
            <a
              style={{ display: "flex" }}
              onClick={() => router.push("/admin/sale")}
            >
              <ListItemIcon>
                <Receipt className={classes.listItem} />
              </ListItemIcon>
              <ListItemText primary="Sale" />
            </a>
          </ListItem>
          <ListItem button>
            <a
              style={{ display: "flex" }}
              onClick={() => router.push("/admin/records/userRecord")}
            >
              <ListItemIcon>
                <ListAlt className={classes.listItem} />
              </ListItemIcon>
              <ListItemText primary="User Record" />
            </a>
          </ListItem>
          {/* <ListItem button>
            <a
              style={{ display: "flex" }}
              onClick={() => router.push("/admin/uploads")}
            >
              <ListItemIcon>
                <Backup className={classes.listItem} />
              </ListItemIcon>
              <ListItemText primary="Upload" />
            </a>
          </ListItem> */}
        </List>
      </div>
    </div>
  );
}

export default SideBar;

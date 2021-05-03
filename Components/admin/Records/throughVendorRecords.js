import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, Chip, Grid, Typography } from "@material-ui/core";
import { getAllUsersProfile } from "../../../actions/vendor";
import capitalize from "../../capitalize";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    backgroundColor: theme.palette.primary.main,
  },
  cardStyle: {
    borderRadius: 20,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: theme.palette.secondary.light,
    height: "100vh",
  },
  details: {
    color: theme.palette.primary.light,
    fontWeight: 500,
  },
  heading: {
    fontSize: "1.5em",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.light,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    fontWeight: 500,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
  },
  totalCodes: {
    borderStyle: "outset ",
    borderRadius: 15,
    borderTop: 0,
    borderLeft: 0,
    padding: 5,
    paddingBottom: 20,
    width: 800,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },

  // Desktop Style

  desktopStyle: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  // Mobile Style

  mobStyle: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mobCardStyle: {
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: theme.palette.secondary.main,
  },

  //  Scroll bar

  scroll: {
    overflowY: "scroll",
    height: "100%",
  },
}));

export default function ThroughVendorRecords() {
  const classes = useStyles();
  const [profile, setProfile] = useState(null);
  useEffect(async () => {
    await getAllUsersProfile((error, result) => {
      if (error) {
        console.log(error);
      } else {
        setProfile(result.data);
      }
    });
  }, []);

  return (
    <div className={classes.root}>
      <Card className={classes.cardStyle}>
        <Typography
          style={{
            margin: 10,
            marginLeft: 20,
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "1.8em",
          }}
        >
          Through Vendor Users Record
        </Typography>
        {/* //////////////////////////////////////////////////////////         Desktop Card  */}

        <div className={classes.desktopStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card className={classes.totalCodes} elevation={2}>
              <div className={classes.scroll} id="scroller">
                <CardActions disableSpacing>
                  <Typography className={classes.details} variant="h5">
                    Name
                  </Typography>
                  <Typography
                    style={{ marginLeft: 280 }}
                    className={classes.details}
                    variant="h5"
                  >
                    Number
                  </Typography>
                  <Typography className={classes.expand} variant="h5">
                    Expiry Date
                  </Typography>
                </CardActions>
                {profile &&
                  profile.map((item, index) => (
                    <CardActions disableSpacing key={index}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                          <Typography
                            className={classes.details}
                            aria-label="show more"
                            variant="subtitle1"
                          >
                            {`${item._user.name}`}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Typography
                            className={classes.details}
                            aria-label="show more"
                            variant="subtitle1"
                            style={{
                              marginLeft: "auto",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {item._user.primaryNumber}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Typography
                            className={classes.expand}
                            variant="subtitle1"
                            style={{
                              float: "right",
                              marginRight: 20,
                            }}
                          >
                            {moment(item.expiryDate).format("DD-MM-YYYY")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  ))}
              </div>
            </Card>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////           Mobile Card */}

        <div className={classes.mobStyle}>
          {profile &&
            profile.map((item, index) => (
              <Card key={index} className={classes.mobCardStyle}>
                <div style={{ display: "flex" }}>
                  <Typography style={{ marginRight: 10, color: "#ffffff" }}>
                    {capitalize(`${item._user.name}`)}
                  </Typography>
                  <Chip
                    variant="outlined"
                    color="primary"
                    style={{
                      cursor: "pointer",
                      marginLeft: "auto",
                      paddingLeft: 10,
                      paddingRight: 10,
                      color: "#ffffff",
                    }}
                    size="small"
                    label={item._user.primaryNumber}
                  />
                </div>
                <Typography style={{ color: "#ffffff" }} variant="subtitle1">
                  {moment(item.expiryDate).format("DD-MM-YYYY")}
                </Typography>
              </Card>
            ))}
        </div>
      </Card>
    </div>
  );
}

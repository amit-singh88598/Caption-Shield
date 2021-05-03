import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, Chip, Grid, Typography } from "@material-ui/core";
import { getTodaySaleDetails } from "../../actions/vendor";
import capitalize from "../capitalize";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    backgroundColor: theme.palette.primary.main,
  },
  cardStyle: {
    borderRadius: 20,
    backgroundColor: theme.palette.secondary.light,
    height: "100vh",
  },

  // Desktop Style

  details: {
    color: theme.palette.primary.light,
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
    marginRight: 10,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
  },
  totalCodes: {
    borderStyle: "outset ",
    borderRadius: 15,
    borderTop: 0,
    borderLeft: 0,
    padding: 5,
    paddingBottom: 40,
    // height: 600,
    width: 700,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },

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

export default function TodaySaleDetails() {
  const classes = useStyles();
  const [details, setDetails] = useState(null);
  useEffect(async () => {
    await getTodaySaleDetails((error, result) => {
      if (error) {
        console.log(error);
      } else {
        setDetails(result.data);
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
          Today's Sale Details
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
                  <Typography
                    style={{ color: "#ffffff", marginLeft: 20 }}
                    variant="h6"
                  >
                    Name
                  </Typography>
                  <Typography
                    style={{ marginLeft: 225 }}
                    className={classes.details}
                    variant="h6"
                  >
                    Number
                  </Typography>
                  <Typography className={classes.expand} variant="h6">
                    Codes
                  </Typography>
                </CardActions>
                {details &&
                  details.map((item, index) => (
                    <CardActions disableSpacing key={index}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                          <Typography
                            className={classes.details}
                            aria-label="show more"
                            variant="subtitle1"
                            color="primary"
                          >
                            {capitalize(`${item.firstname} ${item.lastName}`)}
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
                            {item.number}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Typography
                            className={classes.expand}
                            variant="subtitle1"
                            style={{
                              float: "right",
                              marginRight: 30,
                            }}
                          >
                            {item.count}
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
          {details &&
            details.map((item, index) => (
              <Card key={index} className={classes.mobCardStyle}>
                <div style={{ display: "flex" }}>
                  <Typography style={{ marginRight: 10, color: "#ffffff" }}>
                    {capitalize(`${item.firstname} ${item.lastName}`)}
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
                    label={item.count}
                  />
                </div>
                <Typography style={{ color: "#ffffff" }} variant="subtitle1">
                  {item.number}
                </Typography>
              </Card>
            ))}
        </div>
      </Card>
    </div>
  );
}

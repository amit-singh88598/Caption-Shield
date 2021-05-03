import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { getCodes } from "../../actions/vendor";
import { useAuth } from "../../auth";

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
    width: 700,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },

  //  Scroll bar

  scroll: {
    overflowY: "scroll",
    height: 500,
  },
}));

export default function AvailableCode() {
  const { vendor } = useAuth();
  const classes = useStyles();
  const [codes, setCodes] = useState([]);
  const [codesLength, setCodesLength] = useState(-1);
  useEffect(async () => {
    if (vendor) {
      await getCodes(vendor._id, (error, result) => {
        if (error) {
          console.log(error);
        } else {
          const temp = [];
          setCodesLength(result.length);
          if (result.length > 0) {
            if (result.length >= 5) {
              for (let i = 0; i < 100; i++) {
                temp.push(result[i]);
              }
            } else {
              temp.push(result);
            }
          }
          setCodes(temp);
        }
      });
    }
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
          Available Codes
        </Typography>
        <div className={classes.desktopStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card className={classes.totalCodes} elevation={2}>
              <div className={classes.scroll} id="scroller">
                <CardContent>
                  <Typography className={classes.heading} variant="h1">
                    100 Available Codes
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Typography className={classes.details} variant="h6">
                    S No.
                  </Typography>
                  <Typography className={classes.expand} variant="h6">
                    Codes
                  </Typography>
                </CardActions>
                {codesLength == -1 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 25,
                    }}
                  >
                    <CircularProgress />
                  </div>
                ) : (
                  codes.map((item, index) => (
                    <CardActions disableSpacing key={index}>
                      <Typography
                        className={classes.details}
                        variant="subtitle1"
                      >
                        {index + 1}
                      </Typography>
                      <Typography
                        className={classes.expand}
                        aria-label="show more"
                        variant="subtitle1"
                      >
                        {item.activationCode}
                      </Typography>
                    </CardActions>
                  ))
                )}
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}

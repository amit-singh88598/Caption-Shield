import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { getCodeDetails } from "../../actions/vendor";

import moment from "moment";

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
  totalCodes: {
    borderStyle: "outset ",
    borderRadius: 15,
    borderTop: 0,
    borderLeft: 0,
    padding: 5,
    width: 700,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  heading: {
    fontSize: 25,
    color: theme.palette.primary.light,
  },
  details: {
    color: theme.palette.primary.light,
  },
  expand: {
    color: theme.palette.primary.light,
    marginLeft: "auto",
  },
}));

export default function SearchDetails() {
  const classes = useStyles();
  const router = useRouter();
  const [data, setData] = useState(null);
  let { key } = router.query;

  useEffect(() => {
    getCodeDetails(key, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        setData(result.data[0]);
      }
    });
  }, [key]);

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
          Search Details
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {data == null ? (
            <CircularProgress color="primary" />
          ) : (
            <Card className={classes.totalCodes} elevation={2}>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  Key
                </Typography>
                <Typography
                  className={classes.expand}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {data.activationCode}
                </Typography>
              </CardActions>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  Status
                </Typography>
                <Typography
                  className={classes.expand}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {data.status.toString()}
                </Typography>
              </CardActions>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  Activation Date
                </Typography>
                <Typography
                  className={classes.expand}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {moment(data.createdAt + "").format("DD-MM-YYYY")}
                </Typography>
              </CardActions>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  Expiry Date
                </Typography>
                <Typography
                  className={classes.expand}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {moment(data.expiryDate + "").format("DD-MM-YYYY")}
                </Typography>
              </CardActions>

              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  User Name
                </Typography>
                <Typography
                  className={classes.expand}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {data._user ? data._user.firstName : "null"}
                </Typography>
              </CardActions>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  User Contact Number
                </Typography>
                <Typography
                  className={classes.expand}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {data._user ? data._user.primaryNumber : "null"}
                </Typography>
              </CardActions>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  Vendor Name
                </Typography>
                <Typography
                  className={classes.expand}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {data._vendor ? data._vendor.firstName : "null"}
                </Typography>
              </CardActions>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  Vendor Contact Number
                </Typography>
                <Typography
                  className={classes.expand}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {data._vendor ? data._vendor.primaryNumber : "null"}
                </Typography>
              </CardActions>
            </Card>
          )}
        </div>
      </Card>
    </div>
  );
}

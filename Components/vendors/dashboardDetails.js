import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Gradient } from "react-gradient";
import { getCodes } from "../../actions/vendor";
import { useAuth } from "../../auth";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 10,
    backgroundColor: theme.palette.primary.main,
  },
  cardStyle: {
    borderRadius: 20,
    height: "100vh",
    backgroundColor: theme.palette.secondary.light,
  },
  purchaseCard: {
    borderStyle: "outset ",
    borderRadius: 15,
    borderTop: 0,
    borderLeft: 0,
    padding: 20,
    height: 180,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  saleCard: {
    borderRadius: 15,
    padding: 20,
    height: 180,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  availableCodesCard: {
    borderRadius: 15,
    padding: 20,
    height: 180,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  priceTag: {
    color: theme.palette.primary.light,
  },

  totalCodes: {
    borderStyle: "outset ",
    borderRadius: 15,
    borderTop: 0,
    borderLeft: 0,
    padding: 20,
    height: 370,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  availableCodesStyle: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.light,
  },
  listStyle: {
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
  },
  details: {
    marginLeft: 30,
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
    marginRight: 30,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
  },

  // Scroller Style

  scroll: {
    overflowY: "scroll",
    height: "100%",
  },
}));

const gradients = [
  ["#363131", "#363131"],
  ["#363131", "#bda713"],
];

// Admin Dashboard

export default function DashboardDetails(props) {
  const { vendor } = useAuth();
  const classes = useStyle();
  const router = useRouter();
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
              for (let i = 0; i < 5; i++) {
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
    <div>
      <div className={classes.root}>
        <Card className={classes.cardStyle}>
          <div className={classes.scroll} id="scroller">
            <Typography
              style={{
                margin: 10,
                marginLeft: 20,
                color: "#ffffff",
                fontWeight: 600,
              }}
              variant="h5"
            >
              Dashboard
            </Typography>
            <div>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  {/*////////////////////////////////////////////////////////         Purchase Card */}

                  <Gradient
                    className={classes.purchaseCard}
                    gradients={gradients}
                    property="background"
                    transitionType="parallel"
                    duration={3000}
                    angle="45deg"
                  >
                    <div style={{ display: "flex" }}>
                      <Avatar alt="Remy Sharp" src="/rupee6.jpg" />

                      <Typography
                        style={{
                          float: "right",
                          marginLeft: "auto",
                          fontWeight: 530,
                          fontSize: "1.6em",
                        }}
                        className={classes.priceTag}
                      >
                        Purchase
                      </Typography>
                    </div>
                    <Typography
                      variant="h5"
                      style={{
                        marginTop: 20,
                        fontWeight: 530,
                      }}
                      className={classes.priceTag}
                    >
                      ₹ 00
                    </Typography>
                    <div style={{ display: "flex" }}>
                      <Typography
                        variant="body1"
                        style={{
                          marginTop: 10,
                          fontWeight: 400,
                        }}
                        className={classes.priceTag}
                      >
                        ₹ 00
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          marginLeft: 10,
                          marginTop: 12,
                          fontWeight: 500,
                        }}
                        className={classes.priceTag}
                      >
                        Total Purchase
                      </Typography>
                    </div>
                  </Gradient>
                </Grid>
                <Grid item xs={12} sm={4}>
                  {/*///////////////////////////////////////////////////////////////   Sale Card */}

                  <Gradient
                    className={classes.purchaseCard}
                    gradients={gradients}
                    property="background"
                    duration={3000}
                    angle="45deg"
                  >
                    <div style={{ display: "flex" }}>
                      <Avatar alt="Remy Sharp" src="/rupee6.jpg" />

                      <Typography
                        style={{
                          float: "right",
                          marginLeft: "auto",
                          fontWeight: 530,
                          fontSize: "1.6em",
                        }}
                        className={classes.priceTag}
                      >
                        Sale
                      </Typography>
                    </div>
                    <Typography
                      variant="h5"
                      style={{
                        marginTop: 20,
                        fontWeight: 530,
                      }}
                      className={classes.priceTag}
                    >
                      ₹ 00
                    </Typography>
                    <div style={{ display: "flex" }}>
                      <Typography
                        variant="body1"
                        style={{
                          marginTop: 10,
                          fontWeight: 400,
                        }}
                        className={classes.priceTag}
                      >
                        ₹ 00
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          marginLeft: 10,
                          marginTop: 12,
                          fontWeight: 500,
                        }}
                        className={classes.priceTag}
                      >
                        Total Sale
                      </Typography>
                    </div>
                  </Gradient>
                </Grid>
                <Grid item xs={12} sm={4}>
                  {/*///////////////////////////////////////////////////////////////   Available Codes Card */}

                  <Gradient
                    className={classes.purchaseCard}
                    gradients={gradients}
                    property="background"
                    duration={3000}
                    angle="45deg"
                    onClick={() => router.push("/vendor/availableCodes")}
                  >
                    <Typography
                      style={{ fontSize: "1.8em" }}
                      className={classes.availableCodesStyle}
                    >
                      Available Codes
                    </Typography>

                    {codesLength == -1 ? (
                      <div
                        style={{ marginTop: 25 }}
                        className={classes.availableCodesStyle}
                      >
                        <CircularProgress />
                      </div>
                    ) : (
                      <Typography
                        variant="h4"
                        style={{ marginTop: 25 }}
                        className={classes.availableCodesStyle}
                      >
                        {codesLength}
                      </Typography>
                    )}
                  </Gradient>
                </Grid>
              </Grid>
            </div>

            <div>
              <Grid container>
                <Grid item xs={12} sm={8}>
                  {/* <MyChart /> */}
                </Grid>
                <Grid item xs={12} sm={4}>
                  {/*/////////////////////////////////////////////////////        Top 5 Codes */}
                  <Card className={classes.totalCodes} elevation={2}>
                    <CardContent>
                      <Typography className={classes.heading} variant="h1">
                        Top 5 Codes
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
                        style={{ marginTop: 25 }}
                        className={classes.availableCodesStyle}
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
                  </Card>
                </Grid>
              </Grid>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

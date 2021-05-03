import { Avatar, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Gradient } from "react-gradient";
import { getCodes } from "../../actions/vendor";
import { useRouter } from "next/router";

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
    cursor: "pointer",
  },
  priceTag: {
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

// Dashboard

export default function DashboardDetails(props) {
  const router = useRouter();
  const [codes, setCodes] = useState([]);
  const [codesLength, setCodesLength] = useState(-1);
  useEffect(async () => {
    await getCodes("605065bcc26a4d23baac1be7", (error, result) => {
      if (error) {
        console.log(error);
      } else {
        const temp = [];
        setCodesLength(result.length);
        for (let i = 0; i < 5; i++) {
          temp.push(result[i]);
        }
        setCodes(temp);
      }
    });
  }, []);
  const classes = useStyle();

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
                fontSize: "1.8em",
              }}
            >
              Dashboard
            </Typography>
            <div>
              <Grid container>
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
                  {/*///////////////////////////////////////////////////////////////   Generate Codes Card */}

                  <Gradient
                    className={classes.purchaseCard}
                    gradients={gradients}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "1.8em",
                      color: "#ffffff",
                    }}
                    property="background"
                    duration={3000}
                    angle="45deg"
                    onClick={() => router.push("/admin/generateCodes")}
                  >
                    Generate Codes
                  </Gradient>
                </Grid>
                <Grid item xs={12} sm={4}>
                  {/*///////////////////////////////////////////////////////////////   Vendors List Card */}

                  <Gradient
                    className={classes.purchaseCard}
                    gradients={gradients}
                    property="background"
                    duration={3000}
                    angle="45deg"
                    onClick={() => router.push("/admin/vendors")}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "1.8em",
                      color: "#ffffff",
                    }}
                  >
                    Vendors List
                  </Gradient>
                </Grid>
              </Grid>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

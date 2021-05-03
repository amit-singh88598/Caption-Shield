import { Avatar, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Gradient } from "react-gradient";
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
    // height: 650,
  },
}));

const gradients = [
  ["#363131", "#363131"],
  ["#363131", "#bda713"],
];

// Dashboard

export default function UsersRecords(props) {
  const router = useRouter();
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
              Users Records
            </Typography>
            <div>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  {/*///////////////////////////////////////////////////////////////   All Users Records Card */}

                  <Gradient
                    className={classes.purchaseCard}
                    gradients={gradients}
                    property="background"
                    duration={3000}
                    angle="45deg"
                    onClick={() =>
                      router.push("/admin/records/allUsersRecords")
                    }
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "1.8em",
                      color: "#ffffff",
                    }}
                  >
                    All Users
                  </Gradient>
                </Grid>
                {/* <Grid item xs={12} sm={4}> */}
                {/*///////////////////////////////////////////////////////////////   Through Vendors Records Card */}

                {/* <Gradient
                    className={classes.purchaseCard}
                    gradients={gradients}
                    property="background"
                    duration={3000}
                    angle="45deg"
                    onClick={() =>
                      router.push("/admin/records/throughVendorRecords")
                    }
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "1.8em",
                      color: "#ffffff",
                    }}
                  >
                    Through Vendors
                  </Gradient>
                </Grid> */}
                <Grid item xs={12} sm={4}>
                  {/*///////////////////////////////////////////////////////////////   Self Generated Records Card */}

                  <Gradient
                    className={classes.purchaseCard}
                    gradients={gradients}
                    property="background"
                    duration={3000}
                    angle="45deg"
                    onClick={() =>
                      router.push("/admin/records/selfGeneratedRecord")
                    }
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "1.8em",
                      color: "#ffffff",
                    }}
                  >
                    Self Generate
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

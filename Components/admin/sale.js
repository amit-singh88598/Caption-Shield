import { Avatar, Card, Grid, makeStyles, Typography } from "@material-ui/core";
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
  },
  saleCard: {
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
    height: "100%",
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
    marginLeft: 10,
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

export default function Sales(props) {
  const classes = useStyle();
  const router = useRouter();

  return (
    <div>
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
            Sale
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
                {/*///////////////////////////////////////////////////////////////   Sale Details Card */}

                <Gradient
                  className={classes.purchaseCard}
                  gradients={gradients}
                  property="background"
                  duration={3000}
                  angle="45deg"
                  onClick={() => router.push("/admin/todaySaleDetail")}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "1.8em",
                    color: "#ffffff",
                  }}
                >
                  Today's Sale Details
                </Gradient>
              </Grid>
            </Grid>
          </div>
        </Card>
      </div>
    </div>
  );
}

import { Grid, makeStyles } from "@material-ui/core";
import Head from "next/head";
import SideBar from "../../Components/vendors/sideBar";
import { UserProtectedPage } from "../../auth";
import PurchaseDetails from "../../Components/vendors/purchase";
import VendorHeader from "../../layout/vendorHeader";

const useStyle = makeStyles((theme) => ({
  desktopStyle: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobStyle: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Purchase() {
  const classes = useStyle();
  return (
    <div>
      <UserProtectedPage>
        <div>
          <Head>
            <title>Captain Shield</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <VendorHeader />

          {/*//////////////////////////////////////////////////// desktop View */}

          <div className={classes.desktopStyle}>
            <Grid container>
              <Grid item xs={2} sm={2}>
                <SideBar />
              </Grid>
              <Grid item xs={10} sm={10}>
                <PurchaseDetails />
              </Grid>
            </Grid>
          </div>

          {/*//////////////////////////////////////////////////      Mobile View  */}

          <div className={classes.mobStyle}>
            <PurchaseDetails />
          </div>
        </div>
      </UserProtectedPage>
    </div>
  );
}

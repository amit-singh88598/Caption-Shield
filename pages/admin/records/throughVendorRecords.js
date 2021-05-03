import { Grid, makeStyles } from "@material-ui/core";
import Head from "next/head";
import { AdminProtectedPage } from "../../../auth";
import SideBar from "../../../Components/admin/sideBar";
import Header from "../../../layout/header";
import ThroughVendorRecords from "../../../Components/admin/Records/throughVendorRecords";

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

export default function Vendors() {
  const classes = useStyle();
  return (
    <div>
      <AdminProtectedPage>
        <div>
          <Head>
            <title>Captain Shield</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          {/*//////////////////////////////////////////////////// desktop View */}

          <div className={classes.desktopStyle}>
            <Grid container>
              <Grid item xs={2} sm={2}>
                <SideBar />
              </Grid>
              <Grid item xs={10} sm={10}>
                <ThroughVendorRecords />
              </Grid>
            </Grid>
          </div>

          {/*//////////////////////////////////////////////////      Mobile View  */}

          <div className={classes.mobStyle}>
            <ThroughVendorRecords />
          </div>
        </div>
      </AdminProtectedPage>
    </div>
  );
}

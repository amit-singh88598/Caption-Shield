import { Grid, makeStyles } from "@material-ui/core";
import Head from "next/head";
import { AdminProtectedPage } from "../../auth";
import SideBar from "../../Components/admin/sideBar";
import Upload from "../../Components/admin/upload";
import Header from "../../layout/header";

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

export default function Uploads() {
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
                <Upload />
              </Grid>
            </Grid>
          </div>

          {/*//////////////////////////////////////////////////      Mobile View  */}

          <div className={classes.mobStyle}>
            <Upload />
          </div>
        </div>
      </AdminProtectedPage>
    </div>
  );
}

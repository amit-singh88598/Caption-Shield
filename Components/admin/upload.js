import {
  Avatar,
  Button,
  Card,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Backup } from "@material-ui/icons";

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
  alignCenter: {
    display: "flex",
    justifyContent: "center",
  },
  input: {
    display: "none",
  },
  txtStyle: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.secondary.grey,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function Upload() {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.root}>
        <Card className={classes.cardStyle} elevation={0}>
          <Typography
            style={{
              margin: 10,
              marginLeft: 20,
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "1.8em",
            }}
          >
            Upload apk
          </Typography>
          <div className={classes.alignCenter} style={{ marginTop: 80 }}>
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/logo.jpeg"
                  className={classes.large}
                />
              </IconButton>

              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
            </label>
          </div>
          <div className={classes.alignCenter} style={{ marginBottom: 30 }}>
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                SELECT FILE
              </Button>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
            </label>
          </div>
          <div className={classes.alignCenter}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<Backup />}
            >
              Upload
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

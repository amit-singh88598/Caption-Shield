import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, Grid, TextField } from "@material-ui/core";
import { getVendors } from "../../actions/vendor";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getGenerateCode } from "../../actions/vendor";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: 10,
  },
  cardStyle: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: theme.palette.secondary.light,
    height: "100vh",
  },
  totalCodes: {
    borderStyle: "outset ",
    borderRadius: 15,
    borderTop: 0,
    borderLeft: 0,
    height: 400,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function GenerateCode() {
  const classes = useStyles();
  const [primaryNumber, setPrimaryNumber] = useState("");
  const [codes, setCodes] = useState(null);
  const [profile, setProfile] = useState(null);
  useEffect(async () => {
    await getVendors((error, result) => {
      if (error) {
        console.log(error);
      } else {
        setProfile(result.data);
      }
    });
  }, []);

  const generateCode = async () => {
    await getGenerateCode(primaryNumber, codes, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        alert("Code Genrated Sucessfully");
      }
    });
  };

  return (
    <div className={classes.root}>
      <Card className={classes.cardStyle}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Card className={classes.totalCodes} elevation={2}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      margin: 20,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Autocomplete
                      id="combo-box-demo"
                      onChange={(event, value) => {
                        setPrimaryNumber(value.primaryNumber);
                      }}
                      options={profile}
                      getOptionLabel={(item) =>
                        `${item.firstName} ${item.lastName} : ${item.primaryNumber}`
                      }
                      style={{ width: 400 }}
                      renderInput={(params) => (
                        <TextField
                          fullWidth
                          {...params}
                          placeholder="Select Vendor Name"
                          variant="outlined"
                          style={{ backgroundColor: "#656565" }}
                        />
                      )}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: 20,
                    }}
                  >
                    <TextField
                      fullWidth
                      onChange={(event) => {
                        setCodes(event.target.value);
                      }}
                      style={{ backgroundColor: "#656565" }}
                      placeholder="Select Total No's. Of Codes"
                      variant="outlined"
                    />
                  </div>
                </Grid>
              </Grid>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Button
                  onClick={() => generateCode()}
                  variant="contained"
                  color="secondary"
                >
                  Generate
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

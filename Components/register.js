import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";
import jsCookies from "js-cookies";
import React, { useState } from "react";
import {
  regxFirstName,
  regxLastName,
  regxEmail,
  regxPrimaryNumber,
  regxPassword,
  regxSecondaryNumber,
} from "../regular-Expression.js";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "125vh",
    backgroundImage: 'url("/desktop.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "145vh",
      backgroundImage: 'url("/mobile.jpg")',
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
  card: {
    borderStyle: "outset ",
    borderWidth: 10,
    borderBlockStartColor: "black",
    borderLeftColor: "black",
    width: 340,
    height: 700,
    borderTop: 0,
    borderLeft: 0,
    marginTop: 200,
    borderRadius: 30,
    padding: 15,
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: 100,
      right: 100,
      borderStyle: "outset ",
      borderWidth: 10,
      borderBlockStartColor: "black",
      borderLeftColor: "black",
      width: 430,
      height: 700,
      borderTop: 0,
      borderLeft: 0,
      marginTop: 20,
      borderRadius: 30,
      padding: 15,
      backgroundColor: theme.palette.primary.light,
    },
  },
  title: {
    textAlign: "center",
    fontSize: "2.2em",
    fontWeight: 500,
    display: "flex",
    justifyContent: "center",
  },
  btnStyle: {
    marginTop: 8,
    fontSize: "1.2em",
  },

  logo: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  contentCenter: {
    display: "flex",
    justifyContent: "center",
  },
}));

// Register Page

function VendorRegister(props) {
  const classes = useStyles();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [primaryNumber, setPrimaryNumber] = useState("");
  const [secondaryNumber, setSecondaryNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);

  const [error, setError] = useState({
    firstNameErr: false,
    lastNameErr: false,
    emailErr: false,
    primaryNumberErr: false,
    secondaryNumberErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
  });

  const handleChange = () => {
    if (!(firstName != "" && regxFirstName.test(firstName))) {
      setError({ firstNameErr: true });
    } else if (!(lastName != "" && regxLastName.test(lastName))) {
      setError({ lastNameErr: true });
    } else if (!(email != "" && regxEmail.test(email))) {
      setError({ emailErr: true });
    } else if (
      !(primaryNumber != "" && regxPrimaryNumber.test(primaryNumber))
    ) {
      setError({ primaryNumberErr: true });
    } else if (
      !(secondaryNumber != "" && regxSecondaryNumber.test(secondaryNumber))
    ) {
      setError({ secondaryNumberErr: true });
    } else if (!(password != "" && regxPassword.test(password))) {
      setError({ passwordErr: true });
    } else if (confirmPassword === "") {
      setError({ confirmPasswordErr: true });
    } else {
      if (password !== confirmPassword) {
        setError({ confirmPasswordErr: true });
      } else {
        const postData = {
          firstName,
          lastName,
          primaryNumber,
          secondaryNumber,
          email,
          password,
        };
        console.log(postData);
        userRegister(postData);
      }
    }
  };

  const userRegister = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.BASE_URL}/vendors/register`,
        data,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            withCredentials: true,
          },
        }
      );
      if (res && res.data.isAuth) {
        // to save token in cookies
        jsCookies.setItem("auth", res.data.token, { expires: 3 });
        router.replace("/vendor/dashboard");
        // alert("Register successful");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <Container component="main">
        <div className={classes.contentCenter}>
          <Grid item xs={12} sm={12}>
            <Card className={classes.card} elevation={2}>
              <Typography className={classes.title}>
                Let's get started !
              </Typography>
              <Grid container spacing={1} style={{ marginTop: 20 }}>
                <Grid item xs={12} sm={12} className={classes.contentCenter}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    className={classes.textFieldStyle}
                    onChange={(event) => {
                      setError({ firstNameErr: false });
                      setFirstName(event.target.value);
                    }}
                    error={error.firstNameErr}
                    helperText={
                      error.firstNameErr ? "Please enter valid First Name" : ""
                    }
                    fullWidth
                    placeholder="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.contentCenter}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    className={classes.textFieldStyle}
                    onChange={(event) => {
                      setError({ lastNameErr: false });
                      setLastName(event.target.value);
                    }}
                    error={error.lastNameErr}
                    helperText={
                      error.lastNameErr ? "Please enter valid Last Name" : ""
                    }
                    fullWidth
                    placeholder="Last Name"
                  />
                </Grid>

                <Grid item xs={12} sm={12} className={classes.contentCenter}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    color="primary"
                    onChange={(event) => {
                      setError({ emailErr: false });
                      setEmail(event.target.value);
                    }}
                    error={error.emailErr}
                    helperText={
                      error.emailErr ? "Please enter valid email" : ""
                    }
                    fullWidth
                    type="text"
                    placeholder="Email"
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.contentCenter}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(event) => {
                      setError({ primaryNumberErr: false });
                      setPrimaryNumber(event.target.value);
                    }}
                    error={error.primaryNumberErr}
                    helperText={
                      error.primaryNumberErr
                        ? "please enter valid Phone no."
                        : ""
                    }
                    fullWidth
                    placeholder="Phone no."
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.contentCenter}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(event) => {
                      setError({ secondaryNumberErr: false });
                      setSecondaryNumber(event.target.value);
                    }}
                    error={error.secondaryNumberErr}
                    helperText={
                      error.secondaryNumberErr
                        ? "please enter valid Phone no."
                        : ""
                    }
                    fullWidth
                    placeholder="Phone no."
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.contentCenter}>
                  <TextField
                    variant="outlined"
                    onChange={(event) => {
                      setError({ passwordErr: false });
                      setPassword(event.target.value);
                    }}
                    error={error.passwordErr}
                    helperText={
                      error.passwordErr == true
                        ? " Password Contains Minimum Six Characters, At Least One Letter And One Number:"
                        : ""
                    }
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => {
                              isPassVisible
                                ? setIsPassVisible(false)
                                : setIsPassVisible(true);
                            }}
                          >
                            {isPassVisible ? (
                              <Visibility fontSize="small" />
                            ) : (
                              <VisibilityOff fontSize="small" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    type={isPassVisible ? "text" : "password"}
                    value={password}
                    id="password"
                    placeholder="Password"
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.contentCenter}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(event) => {
                      setError({ confirmPasswordErr: false });
                      setConfirmPassword(event.target.value);
                    }}
                    error={error.confirmPasswordErr}
                    helperText={
                      error.confirmPasswordErr == true
                        ? "Please Match your Password"
                        : ""
                    }
                    fullWidth
                    value={confirmPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => {
                              isConfirmPassVisible
                                ? setIsConfirmPassVisible(false)
                                : setIsConfirmPassVisible(true);
                            }}
                          >
                            {isConfirmPassVisible ? (
                              <Visibility fontSize="small" />
                            ) : (
                              <VisibilityOff fontSize="small" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    type={isConfirmPassVisible ? "text" : "password"}
                    placeholder="Confirm Password"
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.contentCenter}>
                  <Button
                    variant="contained"
                    className={classes.btnStyle}
                    size="large"
                    fullWidth
                    color="primary"
                    onClick={handleChange}
                  >
                    Sign Up
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} className={classes.contentCenter}>
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    alignContent="flex-start"
                    className={classes.contentCenter}
                  >
                    <div style={{ marginTop: 10 }}>
                      <a
                        onClick={() => router.push("/login")}
                        style={{
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                      >
                        Already have account ?
                      </a>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default VendorRegister;

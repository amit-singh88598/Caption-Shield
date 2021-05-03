import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import { searchKeys } from "../actions/vendor";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "auto",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    borderRadius: 50,
    backgroundColor: theme.palette.primary.grey,
    color: "#000000",
    "&:hover": {
      backgroundColor: theme.palette.primary.grey,
      color: "#000000",
    },
    marginRight: theme.spacing(3),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 60,
      width: "40%",
    },
  },
}));

// Search Bar

function SearchBar(props) {
  const classes = useStyles();
  const router = useRouter();
  const [codes, setCodes] = useState(null);
  const [open, setOpen] = useState(true);
  useEffect(async () => {
    searchKeys(0, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        setCodes(result.data);
      }
    });
  }, []);

  const onType = (key) => {
    searchKeys(key, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        setCodes(result.data);
        setOpen(false);
      }
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <Autocomplete
          id="combo-box-demo"
          options={codes && codes}
          getOptionLabel={(option) => option.activationCode}
          onInputChange={(event, value) => {
            onType(value);
          }}
          onChange={(event, value) => {
            value
              ? router.push(`/admin/search?key=${value.activationCode}`)
              : "";
          }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Search" variant="outlined" />
          )}
        />
      </div>
    </div>
  );
}

export default SearchBar;

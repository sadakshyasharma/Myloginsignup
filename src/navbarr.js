import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { BrowserRouter as Router } from "react-router-dom";

// import {TabContext} from "@mui/lab/TabContext";
// import {TabList} from "@mui/lab/TabList";
// import {TabPanel} from "@mui/lab/TabPanel";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     color: theme.palette.primary.main,
//   },
//   indicator: {
//     backgroundColor: "#3f51b5",
//   },
// }));

const Navbar = () => {
  // const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper>
      <Grid container>
        <Grid xs={5}>
          <div></div>
        </Grid>

        <Grid xs={6}>
          <div className="logsign">
            <Tabs
              value={value}
              onChange={handleChange}
              // classes={{ root: classes.root, indicator: classes.indicator }}
            >
              <div className="nav">
                <Tab label="Log In" component={Link} to="/login" />
              </div>
              <div className="nav">
                <Tab label="Patient Sign up" component={Link} to="/signup" />
              </div>
              <div className="nav">
                <Tab label="Doctor Sign up" component={Link} to="/doctor" />
              </div>
            </Tabs>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Navbar;

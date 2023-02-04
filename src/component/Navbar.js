import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import {TabContext} from "@mui/lab/TabContext";
// import {TabList} from "@mui/lab/TabList";
// import {TabPanel} from "@mui/lab/TabPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
  indicator: {
    backgroundColor: "#3f51b5",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="logsign">
      {/* <Router> */}
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{ root: classes.root, indicator: classes.indicator }}
        >
          <Tab label="Log In" component={Link} to="/login" />
          <Tab label="Patient Sign up" component={Link} to="/signup" />
          <Tab label="Doctor Sign up" component={Link} to="/doctor" />
        </Tabs>
      {/* </Router> */}
    </div>
  );
};

export default Navbar;

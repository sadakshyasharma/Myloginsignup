import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { BrowserRouter as Router } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
  indicator: {
    backgroundColor: "#3f51b5",
  },
}));

const Navbar = ({currentTab = 0}) => {
  const [value, setValue] = useState(currentTab);
   const classes = useStyles();

  const handleChange = (e,newValue) => {
    console.log('nv',newValue)
    setValue(newValue);
  };
  
  
  return (
    <div className="logsign">
      <Tabs
        
        value={value}
        onChange={handleChange}
        classes={{ root: classes.root, indicator: classes.indicator }}
       
      >
        <Tab label="Log In" component={Link} to="/login" />

        <Tab label="Patient Sign Up" component={Link} to="/signup" />
        <Tab label="Doctor Sign Up" component={Link} to="/doctor" />
      </Tabs>
    </div>
  );
};

export default Navbar;

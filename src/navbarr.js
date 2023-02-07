import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
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

const Navbar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper>
      <Grid container>
        <Grid xs={5}>
          <div></div>
        </Grid>

        <Grid xs={6}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <div className="logsign">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  // aria-label="basic tabs example"
                >
                  <Tab label="Log In" component={Link} to="/login" />

                  <Tab label="Patient Sign Up" component={Link} to="/signup" />
                  <Tab label="Doctor Sign Up" component={Link} to="/doctor" />
                </Tabs>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Navbar;

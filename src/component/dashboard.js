import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StyledDashboard from './StyledDashboard'
import Scard from "../Cards.js/Scard";

const dashboard = () => {
  return (
    <section>
      <div>
        <StyledDashboard />
      </div>
      <div>
        <img className="dashboardimg" src="dashboard.svg" />
      </div>
      <Paper>
        <Grid container>
          <Grid item xs={4}>
            <div></div>
          </Grid>
          <Grid item xs={4}>
            <div className="card">
              <Scard />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div></div>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};

export default dashboard;

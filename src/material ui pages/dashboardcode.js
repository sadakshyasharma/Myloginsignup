import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const dashboard = () => {
  return (
    <Paper>
      <Grid container>
        <Grid item xs={6}>
          <div>
            <img src="dashboard.svg" width="100%" />
          </div>
        </Grid>

        <Grid item xs={6}>
          <div></div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default dashboard;

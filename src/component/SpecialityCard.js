import React from 'react'
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StyledDashboard from './StyledDashboard'
import Scard from '../Cards.js/Scard';
const SpecialityCard = () => {
  return (
    <section>
      <div>
        <StyledDashboard />
      </div>

      <Paper>
        <Grid container>
          <Grid item xs={2}>
            <div>
            </div>
          </Grid>

          <Grid item xs={10}>
            <div>
              <Scard />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
}

export default SpecialityCard;

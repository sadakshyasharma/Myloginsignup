import React from 'react'
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Dcard = ({ item ,index}) => {
    return (
      <div className="apibox">
        <Paper>
          <Grid container>
            <Grid item xs={6}>
              <div></div>
            </Grid>
            <Grid item xs={6}>
              {"Dr. " + item.firstName + " " + item.lastName}
              <br />
              {item.contactNumber}

              {/* {item.profile} */}
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
}

export default Dcard;

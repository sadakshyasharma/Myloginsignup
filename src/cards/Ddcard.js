import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Ddcard = ({ item }) => {
    return (
      <Paper >
    <section className="apiboxdoctor">
      
        <div>
          <div>
            <img className="icondoctor" src="images.jpg" />
          </div>
          <div>
            <p className="docname">
              {"Dr. " + item.firstName + " " + item.lastName}
            </p>

            <p className="docdetails">
              {item.profile.qualifications.map((qual) => (
                <p>{qual.name} |</p>
              ))}
            </p>

            <Grid container>
              <Grid item xs={3}>
                <p className="doctext">Hospital </p>
              </Grid>

              <Grid item xs={3}>
                <p className="docdetails">{item.profile.experience[0].place}</p>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <p className="doctext">Languages</p>
                </Grid>
                <Grid item xs={3}>
                  {item.profile.languages.map((lang) => (
                    <p className="docdetails">{lang}</p>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="flex2">
          <div>
            <button className="dbtn" type="submit">
              BOOK Appointment
            </button>
          </div>
        </div>
      
            </section>
            </Paper>
  );
};

export default Ddcard;

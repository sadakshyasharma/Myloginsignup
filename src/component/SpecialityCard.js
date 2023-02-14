import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StyledDashboard from "./StyledDashboard";
import Scard from "../cards/Scard";
import { useState, useEffect } from "react";
import axios from "axios";

const api_url =
  "http://my-doctors.net:8090/specializations?%24limit=16&%24skip=0";

const SpecialityCard = () => {

const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
useEffect(() => {
  fetchData();
}, []);
async function fetchData() {
  try {
    setLoading(true);
    const response = await axios.get(api_url);
    // console.log(response.data)
    setData(response.data.data);
    setLoading(false);
  } catch (error) {}
}

if (loading) {
  return <p>Loading...</p>;
}



  return (
    <section>
      <div>
        <StyledDashboard />
      </div>

      <Paper>
        <Grid container>
          <Grid item xs={2}>
            <div></div>
          </Grid>

          <Grid item xs={8}>
            <div className="special">20+ Specialities</div>
            <div className="flexContainer">
              {data &&
                data.map((item) => (
                  <div>
                    <Scard item={item} />
                  </div>
                ))}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};

export default SpecialityCard;

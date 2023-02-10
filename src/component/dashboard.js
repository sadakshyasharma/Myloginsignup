import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StyledDashboard from './StyledDashboard'
import Scard from "../cards/Scard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DoctorCard from "../cards/DoctorCard";
const api_url = "http://my-doctors.net:8090/specializations?%24limit=8";

const Dashboard = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
   useEffect(() => {
     fetchData();
   }, []);
   async function fetchData() {
     try {
       setLoading(true);
       const response = await axios.get(api_url);
       setData(response.data.data);
       setLoading(false);
     } catch (error) {}
  }
  

  
   if (loading) {
     return <p>Loading...</p>;
  }
  
// console.log("test", DoctorCard);
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
          <Grid item xs={2}>
            <div></div>
          </Grid>

          <Grid item xs={9}>
            <div className="special">20+ Specialities</div>
            <div className="flexContainer">
              {data &&
                data.map((item) => (
                  <div>
                    <Scard item={item} />
                  </div>
                ))}
            </div>
            <Link to="/specialities" className="special_">
           View all Specialities...
          </Link>
          </Grid>
        </Grid>
      </Paper>

<Paper>
<Grid container>
<Grid item xs={2}>
  <div></div>
</Grid>
<Grid item xs={9}>
            <div>
              
<DoctorCard />
  </div>
</Grid>
  
</Grid>

</Paper>


    </section>
  );
};

export default Dashboard;

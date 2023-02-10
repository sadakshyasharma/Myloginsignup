import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StyledDashboard from "../component/StyledDashboard"
import Dcard from "./Dcard"


const api_url = "http://my-doctors.net:8090/doctors?%24limit=12&%24skip=0";

const DoctorCard = () => {
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
    console.log("test",data)
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

          <Grid item xs={9}>
            <div>920+ Doctors</div>
            <div className="flexContainer">
              {data &&
                data.map((item) => (
                  <div>
                    <Dcard item={item} />
                  </div>
                ))}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};

export default DoctorCard;

import React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState, useEffect } from "react";
import Paper from "@mui/material";
import Grid from "@mui/material";




const api_url = "http://my-doctors.net:8090/specializations?%24limit=8";

const Scard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

 
  async function fetchData() {
    try {
      setLoading(true)
      const response = await axios.get(api_url);
      setData(response.data.data)
      setLoading(false)
    } catch(error) {
      
    }
  }
  
  useEffect(() => {
    fetchData();
   },[]);

  console.log("test1", data);

  if (loading) {
    return (
     <p>Loading...</p>
   ) 
  }
  return (
    <>
      {data &&
        data.map((item) => (
          <><Card variant="outlined" sx={{ maxWidth: 250 }}>
            {/* <img src={item.imageUrl} alt="testiamge" />
    <p>{item.name}</p> */}

            <CardMedia
              component="img"
              image={item.imageUrl}
              alt="green iguana" />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.name}
              </Typography>
            </CardContent>
          </Card><br /></>
        ))}
    </>
  );
};

export default Scard;
